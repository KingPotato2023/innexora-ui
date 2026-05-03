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
var form_card_exports = {};
__export(form_card_exports, {
  FormActions: () => FormActions,
  FormCard: () => FormCard,
  FormError: () => FormError,
  FormSection: () => FormSection,
  FormSplitBody: () => FormSplitBody
});
module.exports = __toCommonJS(form_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function FormCard({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `card p-6 space-y-6 ${className ?? ""}`, children });
}
function FormSplitBody({
  left,
  right
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8 gap-y-6 items-start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-8", children: left }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "hidden lg:block w-px bg-ink/10 self-stretch my-6",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-8", children: right })
  ] });
}
function FormSection({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { className: "flex items-center gap-1.5 text-[11px] font-bold text-brand-indigo-700 uppercase tracking-[0.08em] mb-4 pb-2 border-b border-ink/10", children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-brand-indigo-700", children: icon }),
      title
    ] }),
    children
  ] });
}
function FormActions({
  primary,
  destructive
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 pt-4 border-t border-ink/10", children: [
    destructive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mr-auto", children: destructive }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-auto", children: primary })
  ] });
}
function FormError({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700", children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormActions,
  FormCard,
  FormError,
  FormSection,
  FormSplitBody
});
