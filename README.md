# @innexora/ui

Shared component library for Innexora apps. One source of truth for every UI primitive — `Button`, `StatusBadge`, `PageHero`, `KpiTile`, `FormCard`, `Pagination`, `SidebarNav`, and 30+ more — plus the Editorial Atlas design tokens (paper / ink / brand-teal-indigo / brass) and CSS utilities (`.input`, `.card`, `.tbl`, `.btn-primary`, `.eyebrow`, …).

Update once, propagate everywhere. A bug fix or design tweak lands in `@innexora/ui`, both consuming apps pick it up via a single version bump.

## Install

Three steps to drop `@innexora/ui` into a new Next.js App Router project.

### 1. Install the package

```sh
npm install github:KingPotato2023/innexora-ui#v0.1.0
npm install -D tailwindcss tailwindcss-animate
npm install lucide-react
```

`react`, `react-dom`, `next`, `lucide-react`, and `tailwindcss` are peer dependencies — the consuming app provides them. `tailwindcss-animate` is loaded by the preset's animations and must be available to the consumer's Tailwind plugin resolver.

### 2. Wire up Tailwind

```ts
// tailwind.config.ts
import preset from "@innexora/ui/tailwind";

export default {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // CRITICAL: Tailwind's JIT does not scan node_modules by default.
    // Without this glob, the package's class names are tree-shaken out.
    "./node_modules/@innexora/ui/dist/**/*.{js,mjs}",
  ],
  plugins: [require("tailwindcss-animate")],
};
```

### 3. Import the stylesheet

```css
/* app/globals.css */
@import "@innexora/ui/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
/* app-specific overrides below if any */
```

The package's stylesheet provides every editorial utility class (`.input`, `.card`, `.tbl`, `.field-label`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-destructive`, `.btn-teal`, `.eyebrow`, `.section-title`, `.page-title`, `.display-em`, `.stagger`, `.pulse-ring`, `.underline-draw`, `.bg-brand-gradient`, `.bg-hero-gradient`, `.sidebar-surface`, `.rule-fade`, `.vrule`, `.ticker*`) plus the editorial `@keyframes` (`stagger-up`, `fade-in-soft`, `hue-drift`, `dot-pulse`, `underline-draw`, `ticker-scroll`, `rule-in`, `aurora-drift`).

The package does NOT define `--font-display`, `--font-sans`, or `--font-mono`. The consuming app loads its own Bricolage Grotesque / Inter / JetBrains Mono via `next/font` and exposes those CSS variables on `:root` — the Tailwind preset's `fontFamily` block reads from them.

### 4. Use anywhere

```tsx
import { Button, PageHeader, Pagination, StatusBadge } from "@innexora/ui";
```

## Quick reference

The full visual catalog of every component, every prop, and every editorial utility lives in `showcase.html` at the root of this repo. Open it in a browser for the canonical reference.

Component groupings (matched to the barrel export):

- **Primitives** — `Button`, `Input`, `Textarea`, `Label`, `Checkbox`, `Avatar`, `Badge`, `Separator`, `Skeleton`, `EmptyState`, `Card`, `StatusBadge`
- **Selection** — `PillGroup`, `PillButtons`, `HiddenFormSelect`, `SegmentedControlLinks`, `DatePicker`, `Calendar`
- **Overlays** — `Dialog`, `AlertDialog`, `Alert`, `DropdownMenu`, `Popover`, `Tabs`, `Select`
- **Layout** — `PageHeader`, `PageHero`, `Breadcrumbs`, `SidebarNav`
- **Cards** — `FormCard`, `DetailCard`, `KpiTile`, `TipCard`, `TipStrip`, `ZenStrip`, `ManagerHero`
- **Data** — `Pagination`, `Table`
- **Form helpers** — `FormSubmitRibbon`, `useUnsavedChangesGuard`, `ConfirmForm`
- **Utility** — `LocalClock`

## Versioning

The package is consumed via GitHub-tagged version (`github:KingPotato2023/innexora-ui#v0.1.0`). Whenever a component changes:

1. Edit the component in `innexora-ui/src/`.
2. Bump the version in `package.json` (semver).
3. `git tag v0.X.Y && git push --tags`.
4. In each consumer app: `npm install github:KingPotato2023/innexora-ui#v0.X.Y` (or `npm update @innexora/ui` if the version was already bumped in their lockfile).
5. Deploy. Both apps pick up the change at the same time.

## Build & develop

```sh
npm install
npm run build       # tsup -> dist/index.{js,mjs,d.ts}
npm run typecheck   # tsc --noEmit
npm run dev         # tsup --watch (for local iteration)
```

The bundle preserves `"use client"` directives via tsup's banner — every component file in the package starts with the directive at runtime, so the consumer's Next.js bundler treats them all as client components.
