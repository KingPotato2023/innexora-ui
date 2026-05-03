import { defineConfig } from "tsup";
import { promises as fs } from "node:fs";
import path from "node:path";

// "use client" preservation
//
// tsup's `banner: { js: '"use client";' }` is rejected with a "Module
// level directives cause errors when bundled" warning and stripped from
// the output. The barrel re-exports a mix of server-safe (Pagination,
// PageHeader, Table…) and client-only components (Button uses no hooks
// directly but Slot needs the client; FormSubmitRibbon, KanbanBoard,
// DatePicker, etc. all do). Marking the whole bundle as a client
// boundary is the safe choice for Next.js App Router consumers — server
// components can still import named exports from a "use client" module,
// they just can't render server-only data into them.
//
// Solution: prepend the directive in `onSuccess` after the bundle is
// written. We patch dist/index.mjs and dist/index.js directly.
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: false,
  splitting: false,
  treeshake: true,
  external: ["react", "react-dom", "next", "lucide-react", "tailwindcss"],
  // Modern JSX transform — emits `_jsx` calls that import from
  // "react/jsx-runtime", instead of the classic `React.createElement`
  // calls that require an in-scope React binding. Without this,
  // Next.js consumers hit `ReferenceError: React is not defined` on
  // routes that only import a server-safe component from the package
  // (Next tree-shakes the unused `import * as React from 'react'`
  // away). Confirmed via Vercel runtime logs after the v0.1.0 ship —
  // /home threw on every request because Next stripped the React import
  // from the chunk. The automatic transform sidesteps this entirely
  // because each .tsx file's compiled output explicitly imports the
  // jsx runtime from "react/jsx-runtime".
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  async onSuccess() {
    const outDir = "dist";
    const targets = ["index.mjs", "index.js"];
    for (const file of targets) {
      const p = path.join(outDir, file);
      try {
        const body = await fs.readFile(p, "utf8");
        if (!body.startsWith('"use client"')) {
          await fs.writeFile(p, `"use client";\n${body}`, "utf8");
        }
      } catch {
        // ignore — file may not exist on a partial build
      }
    }
  },
});
