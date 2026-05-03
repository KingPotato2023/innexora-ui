# `@innexora/ui` — shared component library plan

One source of truth for every UI primitive used across Innexora apps. Update once, propagate everywhere.

---

## 1. Goal

- One package, `@innexora/ui`, that ships every reusable component, every design token, and the editorial CSS utilities (`.input`, `.card`, `.tbl`, `.field-label`, …).
- Both `innexora-properties` and `esal-tech-pm` install it. A bug fix or design tweak lands in `@innexora/ui`, both apps pick it up via a single version bump.
- New Innexora products start by `npm install @innexora/ui` + applying the Tailwind preset → instantly look like the rest of the family.

## 2. Non-goals (what stays app-side, on purpose)

- App-specific nav data (`nav-items.ts` differs per product — Properties has a portfolio shell, PM has a project shell).
- Auth.js wiring (`auth.ts`, `lib/session.ts`) — different schemas per app.
- Prisma schema, server actions, route handlers — these are app code, not UI.
- The actual Next.js app shell (Vercel deploy unit). The package ships the *components*; each app composes them into its own pages.

## 3. Distribution model — decision matrix

| Option | How consumers install | Pros | Cons | Verdict |
|---|---|---|---|---|
| A. GitHub install (`npm i github:KingPotato2023/innexora-ui#v0.1.0`) | git tag = version | Zero registry setup; versioned via tags; works from Vercel | Slower iteration (commit + tag + `npm update` for every change); no semver from npm | **Pick this** |
| B. GitHub Packages (private npm registry) | `npm i @innexora/ui` with `NPM_TOKEN` in Vercel | Standard npm workflow; semver | Auth tokens to manage in every CI env; one more thing to break | Defer |
| C. Local `file:` dependency | `file:../innexora-ui` | Instant local iteration | Vercel deploys from app subfolder — sibling path doesn't exist on Vercel | Not viable |
| D. Monorepo (pnpm/npm workspaces) | `workspace:*` | Best DX; one repo | Both apps are in *separate* git repos today; merging would be a major lift | Defer |

**Pick A**. For local iteration *during* development of the package itself, use `npm link` (built-in symlink) so the consuming app sees changes without publishing. Once stable, tag the version and have apps `npm update`.

## 4. Build tooling

- **`tsup`** for the bundle. Auto-preserves `"use client"` directives (critical for Next.js App Router), emits ESM + types in one shot, fast.
- **TypeScript** strict mode, target ES2022.
- **Tailwind preset** (a JS file that exports the `theme.extend` block) so consumer apps can `presets: [require("@innexora/ui/tailwind")]` and inherit the paper/ink/brand colour family.
- **CSS file** `@innexora/ui/styles.css` containing every utility class (`.input`, `.card`, `.tbl`, `.field-label`, `.btn-*`, `.eyebrow`, `.section-title`, `.page-title`, `.display-em`, `.stagger`, `.pulse-ring`, `.underline-draw`, `.bg-brand-gradient`, `.bg-hero-gradient`, `.sidebar-surface`, `.rule-fade`, `.vrule`, `.ticker*`, all `@keyframes`). Consumer imports it once in their root layout.
- **Lucide, React, React-DOM, Next.js, Tailwind** are `peerDependencies` — the package never bundles its own copy, the consuming app provides them. Avoids duplicate-React bugs and keeps the package small.

## 5. Component inventory

### Goes into `@innexora/ui` (the package — 38 components)

**Primitives** (`components/ui/*`):
- `Button`, `Input`, `Textarea`, `Label`, `Checkbox`, `Switch` (if present), `Avatar`, `Separator`
- `StatusBadge` (with all the tone helpers: `priorityTone`, `srStatusTone`, `workOrderStatusTone`, `contractStatusTone`, `invoiceStatusTone`, `auditActionTone`, `activeTone`, `assetConditionTone`, `communicationTypeTone`, `communicationDirectionTone`, `stakeholderTypeTone`, `leadStageTone`)
- `Badge`, `Card`
- `EmptyState`
- `HiddenFormSelect`, `PillGroup`, `PillButtons`, `SegmentedControl`, `SegmentedControlLinks`
- `DatePicker`, `Calendar`
- `AlertDialog`, `Dialog`, `DropdownMenu`, `Popover`, `Tabs`, `Select`, `Tooltip` (if present)
- `Alert`
- `ConfirmForm`
- `Table` (Radix-based wrappers, plus the editorial `.tbl` class)

**Layout & shell** (`components/*`):
- `PageHeader` (kicker + title + description + actions)
- `PageHero` (icon stamp + kicker + gradient title + meta + actions)
- `Breadcrumbs` (multi-level, ArrowLeft, aria-current)

**Cards & content blocks**:
- `FormCard`, `FormSection`, `FormSplitBody`, `FormActions`, `FormError`
- `DetailCard`, `DetailSection`, `DetailGrid`, `DetailRow`
- `KpiTile`
- `TipCard`, `TipStrip`
- `ZenStrip`
- `ManagerHero`

**Data & navigation**:
- `Pagination`
- `KanbanBoard` — **generic** drag-and-drop board. Takes `stages`, `items: T[]`, `renderCard: (item: T) => ReactNode`, `onMove: (id, toStage) => void`, `canMove: boolean`, optional `cardHref`. The work-orders and leads kanbans (currently in `app/(app)/.../{work-orders,leads}/_components/kanban-board.tsx`) become thin wrappers.
- `Skeleton`

**Form helpers**:
- `FormSubmitRibbon`
- `UnsavedChangesGuard`

**Utility**:
- `LocalClock`

### Stays app-side (5 components — depend on app routing/data)

| Component | Why it stays | Notes |
|---|---|---|
| `app-shell.tsx` | Composes nav routes, auth session lookup | Each app provides its own. The package can ship a `<ShellLayout>` *primitive* (the visual frame: sidebar slot + main slot + bottom dock) but the *data* — which routes, what user — is app-injected. |
| `app-shell-client.tsx` | Same as above | |
| `sidebar-nav.tsx` | Renders nav routes specific to each product | Could become a *parameterised* `<SidebarNav items={...}>` that lives in the package and consumes app-supplied items. **Decision in plan: ship a parameterised version in the package.** |
| `nav-items.ts` | Per-app route definitions | Stays app-side. Each app exports its own array typed against the package's `<SidebarNavItem>` type. |
| `attachments-section.tsx` | Hits app-specific upload API + Prisma | Stays app-side. Could be generalised later if both apps standardise on the same upload endpoint. |
| `file-export-button.tsx` | Calls app-specific server actions | Stays app-side. The package can provide a `<DownloadButton>` *primitive* (look + behaviour) and the app wires the action. |

### Net: 39 in package (added generic KanbanBoard) + 4 stay (re-categorised: parameterised SidebarNav goes IN, app provides items)

## 6. Design tokens strategy

**Tailwind preset** at `@innexora/ui/tailwind`:

```js
// packages/innexora-ui/tailwind.preset.cjs
module.exports = {
  theme: {
    extend: {
      colors: { brand: {...}, paper: {...}, ink: {...}, brass: {...} },
      boxShadow: { paper, "paper-lg", "brass-glow" },
      fontFamily: { display, sans, mono },
      keyframes: { ... },
      animation: { ... },
    }
  }
}
```

Consumer `tailwind.config.ts`:

```ts
import preset from "@innexora/ui/tailwind";
export default {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@innexora/ui/dist/**/*.{js,mjs}", // critical
  ],
};
```

**CSS file** at `@innexora/ui/styles.css` — contains every `@layer` directive from the current `globals.css` (the `.input`, `.card`, `.tbl`, `.btn-*`, `.eyebrow`, …, `@keyframes stagger-up`, etc.). Consumer imports once in `app/globals.css`:

```css
@import "@innexora/ui/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
/* app-specific overrides below if any */
```

**Fonts** — stay app-side. Each Next.js app loads Bricolage Grotesque / Inter / JetBrains Mono via `next/font` and exposes the CSS variables (`--font-display`, `--font-sans`, `--font-mono`) the package's `fontFamily` block expects. The package documents the contract; the apps fulfil it.

## 7. Repo & versioning workflow

- New repo: `KingPotato2023/innexora-ui`. Standalone, MIT-licensed (or private — your call).
- `main` is always shippable.
- Releases tagged `v0.1.0`, `v0.2.0`, … following semver.
- A `CHANGELOG.md` for human-readable diff notes per tag.
- Apps install via `"@innexora/ui": "github:KingPotato2023/innexora-ui#v0.1.0"`. Bumping is `npm i github:KingPotato2023/innexora-ui#v0.2.0` then commit the new lockfile.

## 8. Migration plan

**Phase 0 (this turn)**: PLAN + HTML showcase. You sign off.

**Phase 1 — scaffold the package**
1. Create `innexora-ui/` workspace folder (or new git repo).
2. `package.json`, `tsup.config.ts`, `tsconfig.json`, `tailwind.preset.cjs`, `src/styles.css`.
3. Empty `src/index.ts` barrel export.
4. CI: just `tsup && tsc --noEmit` — no tests yet.

**Phase 2 — port components in waves**
Migrate in dependency order so each wave is independently testable:
- **Wave A** (no dependencies): `lib/utils.ts` (cn helper), `lib/format.ts` (formatAed, etc.) → publish as `@innexora/ui/lib`
- **Wave B** (primitives): Button, Input, Textarea, Label, Checkbox, Avatar, Badge, Separator, Skeleton, EmptyState
- **Wave C** (composite primitives): StatusBadge (+ all tone helpers), HiddenFormSelect, PillGroup, SegmentedControl, DatePicker, Alert, AlertDialog, Dialog, DropdownMenu, Popover, Tabs, Select, Calendar, ConfirmForm, Table
- **Wave D** (layout): PageHeader, PageHero, Breadcrumbs, KpiTile, TipCard, ZenStrip, ManagerHero, LocalClock
- **Wave E** (cards): FormCard family, DetailCard family, Pagination
- **Wave F** (form helpers): FormSubmitRibbon, UnsavedChangesGuard
- **Wave G** (parameterised shell): SidebarNav (taking items as prop), ShellLayout

After each wave: `tsup` builds, `tsc --noEmit` passes, manual smoke check that imports resolve.

**Phase 3 — wire up `innexora-properties` (proof migration)**
1. Bump `@innexora/ui` to v0.1.0. Tag.
2. In `innexora-properties/package.json`: add `"@innexora/ui": "github:KingPotato2023/innexora-ui#v0.1.0"`.
3. Update `tailwind.config.ts` to include the preset + the package's content path.
4. Update `app/globals.css` to `@import "@innexora/ui/styles.css"`.
5. **Codemod**: replace every `from "@/components/ui/..."` with `from "@innexora/ui"`. Likewise for `@/components/...`. Single sed pass per directory, then `tsc --noEmit` to catch anything missed.
6. Delete the old `components/ui/*` and migrated `components/*` files. Keep `nav-items.ts`, `app-shell.tsx`, `attachments-section.tsx`, `file-export-button.tsx` (app-specific).
7. `next build` must pass. Visual smoke-check the staging deploy.

**Phase 4 — migrate `esal-tech-pm`**
Same as Phase 3 but for PM. PM may have local tweaks to some components; reconcile by adding props to the package version OR keeping a thin app-side wrapper.

**Phase 5 — done. Future updates**
- Bug fix → patch the package, tag `v0.1.1`, run `npm update @innexora/ui` in both apps, deploy.
- New design pattern → add to package, document in `showcase.html`, update the `innexora-design` skill to point at it.

## 9. Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| Tailwind JIT misses class names from the package because it doesn't scan `node_modules/` by default | High | Add `node_modules/@innexora/ui/dist/**/*` to `content` in every consumer's `tailwind.config.ts`. Documented in §6. |
| `"use client"` directives stripped during bundling → server-component errors at runtime | Medium | tsup ≥ 7.x preserves them. Pin tsup version. Add a smoke-test that `dist/button.mjs` starts with `"use client";`. |
| Two apps end up needing slightly different versions of one component (e.g. PM's PageHeader has a 5th slot) | Medium | Solve via *props*, not divergence. If PM needs a fifth slot, add it to the package (default null) and PM uses it. Never fork. |
| Vercel build pulls from GitHub install but rate-limits unauthenticated git clones during a deploy storm | Low | Pin `package-lock.json` so GitHub shasum is cached; only re-fetches on bump. Worst case, switch to GitHub Packages later (Option B). |
| Migration codemod misses an import → runtime undefined | Low | Strict `tsc --noEmit` after the codemod catches all of them; nothing slips to runtime. |
| Skill (`~/.claude/skills/innexora-design/`) docs become stale | Medium | Update the skill in the same PR that ships v0.1.0 to point at `@innexora/ui` source files instead of in-repo paths. |

## 10. What I'll deliver in code (after sign-off)

1. `innexora-ui/` directory at workspace root, scaffolded:
   - `package.json` (peerDeps on react, next, lucide, tailwind)
   - `tsup.config.ts` (ESM build, dts, preserves "use client")
   - `tsconfig.json` (strict, ES2022)
   - `tailwind.preset.cjs` (theme.extend)
   - `src/styles.css` (every utility class from current globals.css)
   - `src/index.ts` (barrel export)
   - `src/{button,input,...}.tsx` (one file per component, ported from innexora-properties)
   - `README.md` (consumer install + setup snippet)
2. `innexora-properties/` migrated:
   - Tailwind config + globals.css updated
   - All `from "@/components/..."` swapped to `from "@innexora/ui"`
   - Old component files deleted
   - `tsc --noEmit` clean, `next build` clean, staging deploy verified
3. The `innexora-design` skill at `~/.claude/skills/innexora-design/SKILL.md` updated to reference `@innexora/ui` and link to its `showcase.html`.

`esal-tech-pm/` migration is a separate follow-up — won't touch it without explicit go-ahead, since it's a live production system.

---

**One question before I code**: confirm "GitHub install + tagged versions" (Option A in §3) is OK with you, vs publishing to GitHub Packages with auth tokens. Option A is simpler; Option B is more "professional" but adds setup overhead. Either works.
