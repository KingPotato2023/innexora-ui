"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../lib/utils";
import { avatarColorClass } from "../lib/avatar-color";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const DICEBEAR_BASE = "https://api.dicebear.com/7.x/initials/svg";
const AVATAR_BG = "01b6ad,2e3191";
const AVATAR_TEXT = "ffffff";
function avatarUrl(name, size) {
  const seed = encodeURIComponent(name);
  return `${DICEBEAR_BASE}?seed=${seed}&backgroundColor=${AVATAR_BG}&backgroundType=gradientLinear&textColor=${AVATAR_TEXT}&fontWeight=600&size=${size}`;
}
function initialsOf(name) {
  return name.split(" ").map((p) => p.charAt(0)).slice(0, 2).join("").toUpperCase() || "?";
}
function BrandedAvatar({
  name,
  imageUrl,
  size = 28
}) {
  const initials = initialsOf(name);
  const src = imageUrl && imageUrl.length > 0 ? imageUrl : avatarUrl(name, size * 2);
  const fallbackBg = avatarColorClass(name);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: `relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white ${fallbackBg}`,
      style: { width: size, height: size },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: initials }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt: "",
            width: size,
            height: size,
            loading: "lazy",
            className: "relative h-full w-full object-cover"
          }
        )
      ]
    }
  );
}
function OwnerCell({
  name,
  imageUrl
}) {
  if (!name || name === "\u2014") {
    return /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: "\u2014" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
    /* @__PURE__ */ jsx(BrandedAvatar, { name, imageUrl }),
    /* @__PURE__ */ jsx("span", { className: "truncate", children: name })
  ] });
}
export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  BrandedAvatar,
  OwnerCell
};
