declare const PALETTE: readonly ["bg-teal-600", "bg-slate-600", "bg-amber-600", "bg-rose-600", "bg-emerald-600", "bg-indigo-600", "bg-orange-600", "bg-violet-600", "bg-cyan-600", "bg-fuchsia-600"];
type AvatarColorClass = (typeof PALETTE)[number];
declare const AVATAR_PALETTE: readonly AvatarColorClass[];
declare function avatarColorClass(seed: string): AvatarColorClass;

export { AVATAR_PALETTE, type AvatarColorClass, avatarColorClass };
