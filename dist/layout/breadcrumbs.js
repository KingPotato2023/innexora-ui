"use strict";
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
var breadcrumbs_exports = {};
__export(breadcrumbs_exports, {
  Breadcrumbs: () => Breadcrumbs
});
module.exports = __toCommonJS(breadcrumbs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_link = __toESM(require("next/link"));
var import_lucide_react = require("lucide-react");
const SEGMENT_BASE = "text-[10.5px] font-mono font-semibold uppercase tracking-[0.18em] transition-colors max-w-[24ch] truncate";
const SEGMENT_LINK = SEGMENT_BASE + " text-ink/55 hover:text-ink-900";
const SEGMENT_CURRENT = SEGMENT_BASE + " text-ink-900";
function Breadcrumbs({ items }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { "aria-label": "Breadcrumb", className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { className: "flex items-center gap-1.5 flex-wrap", children: items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const hasHref = Boolean(item.href);
    const labelEl = hasHref && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_link.default,
      {
        href: item.href,
        className: "inline-flex items-center gap-1.5 " + SEGMENT_LINK,
        children: [
          isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate", children: item.label })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "span",
      {
        "aria-current": isLast ? "page" : void 0,
        className: "inline-flex items-center gap-1.5 " + (isLast ? SEGMENT_CURRENT : SEGMENT_LINK),
        children: [
          isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { className: "h-3 w-3 shrink-0 opacity-70", "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate", children: item.label })
        ]
      }
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { className: "flex items-center gap-1.5 min-w-0", children: [
      !isFirst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-3 w-3 shrink-0 text-ink/30", "aria-hidden": "true" }),
      labelEl
    ] }, i);
  }) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumbs
});
