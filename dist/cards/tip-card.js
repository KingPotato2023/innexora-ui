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
var tip_card_exports = {};
__export(tip_card_exports, {
  TipCard: () => TipCard,
  TipStrip: () => TipStrip
});
module.exports = __toCommonJS(tip_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_lucide_react = require("lucide-react");
function TipCard({
  title,
  children,
  footer,
  sticky = false,
  icon,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "aside",
    {
      className: [
        sticky ? "lg:sticky lg:top-7 lg:h-fit" : "",
        className ?? ""
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card p-5 space-y-3 bg-paper-100", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 text-ink-900", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-brand-teal-700 shrink-0", children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { className: "h-4 w-4", "aria-hidden": "true" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow text-brand-indigo-700", children: title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[13px] leading-relaxed text-ink/70", children }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-ink/10" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[12px] leading-relaxed text-ink/55", children: footer })
        ] })
      ] })
    }
  );
}
function TipStrip({
  title,
  children,
  icon,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "rounded-lg border border-ink/10 bg-paper-100 px-4 py-3 flex items-start gap-3 " + (className ?? ""),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-teal-700 ring-1 ring-ink/10 shrink-0 mt-0.5", children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Info, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow text-brand-indigo-700", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1.5 text-[13px] leading-relaxed text-ink/70", children })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TipCard,
  TipStrip
});
