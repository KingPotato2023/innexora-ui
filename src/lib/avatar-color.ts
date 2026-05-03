// Deterministic mapping from a string seed (user.id, user.email, or user.name)
// to one of N palette colors. Same input -> same color, every render.
//
// Replaces the previous heavy teal->indigo gradient on avatar fallbacks with a
// calmer per-user solid tone. White text initials remain readable on every
// palette member because we use the `-600` weight everywhere.
//
// IMPORTANT: full class strings are listed inline (not concatenated) so
// Tailwind's content scanner picks them up at build time. Do NOT compute
// these via string interpolation - Tailwind would tree-shake the unused
// classes and the runtime fallback would render unstyled.
const PALETTE = [
  "bg-teal-600",
  "bg-slate-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-emerald-600",
  "bg-indigo-600",
  "bg-orange-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-fuchsia-600",
] as const;

export type AvatarColorClass = (typeof PALETTE)[number];

export const AVATAR_PALETTE: readonly AvatarColorClass[] = PALETTE;

export function avatarColorClass(seed: string): AvatarColorClass {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}
