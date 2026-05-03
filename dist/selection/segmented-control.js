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
var segmented_control_exports = {};
__export(segmented_control_exports, {
  SegmentedControlLinks: () => SegmentedControlLinks
});
module.exports = __toCommonJS(segmented_control_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_link = __toESM(require("next/link"));
const wrapperClass = "inline-flex items-center gap-0.5 rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm";
const segmentBase = "px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400";
const segmentActive = "bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-sm";
const segmentInactive = "text-neutral-600 hover:text-brand-indigo-700";
function SegmentedControlLinks({
  options,
  value,
  hrefFor,
  ariaLabel
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { role: "tablist", "aria-label": ariaLabel, className: wrapperClass, children: options.map((opt) => {
    const selected = opt.value === value;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_link.default,
      {
        href: hrefFor(opt.value),
        role: "tab",
        "aria-selected": selected,
        className: [
          segmentBase,
          selected ? segmentActive : segmentInactive
        ].join(" "),
        children: opt.label
      },
      opt.value
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SegmentedControlLinks
});
