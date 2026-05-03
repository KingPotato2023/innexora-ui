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
var detail_card_exports = {};
__export(detail_card_exports, {
  DetailGrid: () => DetailGrid,
  DetailRow: () => DetailRow,
  DetailSection: () => DetailSection
});
module.exports = __toCommonJS(detail_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function DetailSection({
  title,
  icon,
  action,
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "card p-6 " + (className ?? ""), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: action ? "flex items-center justify-between gap-4 mb-4" : "mb-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { className: "eyebrow text-brand-indigo-700 flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-brand-indigo-700 inline-flex", children: icon }),
            title
          ] }),
          action
        ]
      }
    ),
    children
  ] });
}
function DetailGrid({
  children,
  cols = 2
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "dl",
    {
      className: "grid grid-cols-1 gap-x-8 gap-y-4 text-sm " + (cols === 2 ? "sm:grid-cols-2" : ""),
      children
    }
  );
}
function DetailRow({
  icon,
  label,
  value,
  span
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: span === 2 ? "sm:col-span-2" : void 0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { className: "field-label flex items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-ink/40 inline-flex shrink-0", children: icon }),
      label
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { className: "mt-1 text-ink/85 leading-relaxed", children: value ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-ink/40", children: "\u2014" }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DetailGrid,
  DetailRow,
  DetailSection
});
