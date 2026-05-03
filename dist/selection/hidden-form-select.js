"use strict";
"use client";
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
var hidden_form_select_exports = {};
__export(hidden_form_select_exports, {
  HiddenFormSelect: () => HiddenFormSelect
});
module.exports = __toCommonJS(hidden_form_select_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_select = require("../overlays/select");
const EMPTY_SENTINEL = "__empty";
function HiddenFormSelect({
  name,
  defaultValue = "",
  placeholder,
  options,
  disabled,
  ariaInvalid,
  className,
  onChange
}) {
  const [value, setValue] = (0, import_react.useState)(defaultValue);
  (0, import_react.useEffect)(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const internal = value === "" ? EMPTY_SENTINEL : value;
  const handleChange = (next) => {
    const real = next === EMPTY_SENTINEL ? "" : next;
    setValue(real);
    onChange?.(real);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_select.Select, { value: internal, onValueChange: handleChange, disabled, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_select.SelectTrigger,
        {
          className,
          "aria-invalid": ariaInvalid ? true : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectValue, { placeholder })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectContent, { children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_select.SelectItem,
        {
          value: opt.value === "" ? EMPTY_SENTINEL : opt.value,
          children: opt.label
        },
        opt.value === "" ? EMPTY_SENTINEL : opt.value
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "hidden", name, value })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HiddenFormSelect
});
