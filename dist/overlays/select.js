"use strict";
"use client";
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
var select_exports = {};
__export(select_exports, {
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue
});
module.exports = __toCommonJS(select_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react = require("lucide-react");
var import_utils = require("../lib/utils");
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: (0, import_utils.cn)(
      "group flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-ink/15 bg-white/90 px-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-ink/40 transition-all duration-200 hover:border-ink/25 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/35 focus:border-brand-teal-600 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 text-ink/55 transition-transform duration-200 group-data-[state=open]:rotate-180" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  SelectPrimitive.Content,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative z-50 max-h-96 min-w-[10rem] overflow-hidden rounded-md border border-ink/12 bg-white text-ink shadow-paper-lg before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(0,142,134,0.45)_35%,rgba(46,49,145,0.45)_65%,transparent)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
      position === "popper" && "data-[side=bottom]:translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      SelectPrimitive.Viewport,
      {
        className: (0, import_utils.cn)(
          "p-1.5",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: (0, import_utils.cn)(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-ink/85 outline-none transition-colors focus:bg-brand-teal-500/[0.06] focus:text-ink data-[state=checked]:text-ink data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-brand-teal-600", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "h-3.5 w-3.5" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
});
