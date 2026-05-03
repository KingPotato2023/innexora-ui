"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var avatar_exports = {};
__export(avatar_exports, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  BrandedAvatar: () => BrandedAvatar,
  OwnerCell: () => OwnerCell
});
module.exports = __toCommonJS(avatar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_utils = require("../lib/utils");
var import_avatar_color = require("../lib/avatar-color");
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AvatarPrimitive.Root,
  {
    ref,
    className: (0, import_utils.cn)("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarPrimitive.Image, { ref, className: (0, import_utils.cn)("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: (0, import_utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs", className),
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
  const fallbackBg = (0, import_avatar_color.avatarColorClass)(name);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      className: `relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white ${fallbackBg}`,
      style: { width: size, height: size },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 flex items-center justify-center", children: initials }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-neutral-400", children: "\u2014" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 min-w-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandedAvatar, { name, imageUrl }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate", children: name })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  AvatarFallback,
  AvatarImage,
  BrandedAvatar,
  OwnerCell
});
