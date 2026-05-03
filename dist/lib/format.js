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
var format_exports = {};
__export(format_exports, {
  formatAed: () => formatAed,
  formatAedShort: () => formatAedShort,
  formatCurrencyShort: () => formatCurrencyShort
});
module.exports = __toCommonJS(format_exports);
function formatCurrencyShort(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "$0";
  const abs = Math.abs(n);
  if (abs >= 1e6) {
    return `$${(n / 1e6).toFixed(1)}M`;
  }
  if (abs >= 1e3) {
    return `$${Math.round(n / 1e3)}k`;
  }
  return `$${Math.round(n)}`;
}
function formatAedShort(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "AED 0";
  const abs = Math.abs(n);
  if (abs >= 1e6) return `AED ${(n / 1e6).toFixed(1)}M`;
  if (abs >= 1e4) return `AED ${Math.round(n / 1e3)}k`;
  if (abs >= 1e3) return `AED ${(n / 1e3).toFixed(1)}k`;
  return `AED ${Math.round(n)}`;
}
function formatAed(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return "AED \u2014";
  return `AED ${n.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatAed,
  formatAedShort,
  formatCurrencyShort
});
