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
var page_header_exports = {};
__export(page_header_exports, {
  PageHeader: () => PageHeader,
  PageHero: () => PageHero
});
module.exports = __toCommonJS(page_header_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function PageHero({
  icon,
  title,
  description,
  meta,
  actions,
  kicker
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 -top-1 h-px",
        style: {
          background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.5) 35%, rgba(46,49,145,0.5) 65%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-5 flex-wrap pt-4 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-paper-200 text-ink-900 ring-1 ring-ink/10 shadow-paper", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-ink/80", children: icon }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex-1 min-w-0", children: [
        kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "eyebrow mb-2 text-brand-indigo-700", children: kicker }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "page-title", children: title }),
        meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: meta }),
        description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 text-[14.5px] text-ink/65 max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-2 flex-wrap pt-1", children: actions })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-fade" })
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  kicker
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-end justify-between flex-wrap gap-4 pb-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0", children: [
        kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "eyebrow mb-2", children: kicker }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "page-title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-[14px] text-ink/65 max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-2 flex-wrap", children: actions })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-fade" })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PageHeader,
  PageHero
});
