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
