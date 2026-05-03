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
var empty_state_exports = {};
__export(empty_state_exports, {
  EmptyState: () => EmptyState
});
module.exports = __toCommonJS(empty_state_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card p-10 flex flex-col items-center text-center gap-4", children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-12 rounded-full bg-paper-200 ring-1 ring-ink/10 text-ink/55 inline-flex items-center justify-center", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1.5 max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display font-semibold text-[18px] leading-tight text-ink-900 tracking-[-0.015em]", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-ink/60", children: description })
    ] }),
    action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1", children: action })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmptyState
});
