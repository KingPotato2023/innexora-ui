"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var avatar_color_exports = {};
__export(avatar_color_exports, {
  AVATAR_PALETTE: () => AVATAR_PALETTE,
  avatarColorClass: () => avatarColorClass
});
module.exports = __toCommonJS(avatar_color_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_PALETTE,
  avatarColorClass
});
