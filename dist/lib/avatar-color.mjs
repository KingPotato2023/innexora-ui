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
  "bg-fuchsia-600"
];
const AVATAR_PALETTE = PALETTE;
function avatarColorClass(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = hash * 31 + seed.charCodeAt(i) | 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}
export {
  AVATAR_PALETTE,
  avatarColorClass
};
