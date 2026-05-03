"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../lib/utils";
import { avatarColorClass } from "../lib/avatar-color";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ─── BrandedAvatar (DiceBear-backed, deterministic) ────────────────────
//
// The richer Avatar variant used in page headers / table rows / contact
// lists — renders a DiceBear "initials" SVG with the brand teal→indigo
// gradient as the background. Deterministic per name (same name → same
// look). Falls back to a per-name solid colour from the avatar palette
// when the image hasn't loaded yet.
//
// A11y: avatar is rendered adjacent to the user's visible name in every
// known consumer, so it's marked decorative (`aria-hidden`, alt="").

const DICEBEAR_BASE = "https://api.dicebear.com/7.x/initials/svg";
const AVATAR_BG = "01b6ad,2e3191";
const AVATAR_TEXT = "ffffff";

function avatarUrl(name: string, size: number) {
  const seed = encodeURIComponent(name);
  return `${DICEBEAR_BASE}?seed=${seed}&backgroundColor=${AVATAR_BG}&backgroundType=gradientLinear&textColor=${AVATAR_TEXT}&fontWeight=600&size=${size}`;
}

function initialsOf(name: string): string {
  return (
    name
      .split(" ")
      .map((p) => p.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?"
  );
}

export function BrandedAvatar({
  name,
  imageUrl,
  size = 28,
}: {
  name: string;
  imageUrl?: string | null;
  size?: number;
}) {
  const initials = initialsOf(name);
  const src = imageUrl && imageUrl.length > 0 ? imageUrl : avatarUrl(name, size * 2);
  const fallbackBg = avatarColorClass(name);
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white ${fallbackBg}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="absolute inset-0 flex items-center justify-center">{initials}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className="relative h-full w-full object-cover"
      />
    </span>
  );
}

export function OwnerCell({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl?: string | null;
}) {
  if (!name || name === "—") {
    return <span className="text-neutral-400">—</span>;
  }
  return (
    <div className="flex items-center gap-2 min-w-0">
      <BrandedAvatar name={name} imageUrl={imageUrl} />
      <span className="truncate">{name}</span>
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
