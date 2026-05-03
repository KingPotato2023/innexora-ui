// Re-export of PageHero to satisfy the per-component file convention used
// in showcase #package-shape. The actual implementation lives alongside
// PageHeader in `./page-header.tsx` because the two share styling tokens
// and were always co-defined.
export { PageHero } from "./page-header";
