import { defineConfig } from "tsup";

// PER-FILE OUTPUT (`bundle: false`)
//
// Earlier ship attempts bundled everything into a single `dist/index.mjs`
// with `"use client";` prepended at the top. That made Next.js treat
// EVERY export — including pure utility functions like `priorityTone`,
// `formatAed`, and `cn` — as a React Server Component "client reference
// proxy". Calling `priorityTone("high")` then threw
// `TypeError: (0 , a.wZ) is not a function` because the proxy is an
// object, not a function. Pages that imported any tone helper failed at
// render time; pages that only imported components (e.g. `/home` using
// ManagerHero/KpiTile) happened to work.
//
// Switching to `bundle: false` means tsup transpiles each source file
// individually into its own output file, preserving the per-file
// `"use client"` directive on components that need it (Button,
// FormSubmitRibbon, KanbanBoard, DatePicker, the Radix overlays…) and
// leaving server-safe modules (status-badge tone helpers, format,
// utils, pagination, page-header) free of the directive. Next sees
// each as its own module and applies the right boundary per file.
//
// Modern JSX transform stays on — emits `_jsx` from `react/jsx-runtime`
// so chunks never depend on an in-scope React binding (fixes the
// `ReferenceError: React is not defined` from v0.1.0).
export default defineConfig({
  entry: ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: false,
  bundle: false,
  splitting: false,
  treeshake: false,
  external: ["react", "react-dom", "next", "lucide-react", "tailwindcss"],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
