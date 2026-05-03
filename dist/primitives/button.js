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
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../lib/utils");
const buttonVariants = (0, import_class_variance_authority.cva)(
  "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-primary bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-paper hover:-translate-y-px hover:shadow-paper-lg",
        destructive: "bg-red-600 text-white shadow-paper hover:bg-red-700 hover:-translate-y-px hover:shadow-paper-lg",
        outline: "border border-ink/15 bg-white/80 text-ink shadow-paper hover:bg-white hover:border-ink/30 hover:-translate-y-px",
        secondary: "bg-paper-200 text-ink shadow-paper hover:bg-paper-300 hover:-translate-y-px",
        ghost: "text-ink/80 hover:bg-ink/5 hover:text-ink",
        link: "text-brand-teal-700 underline-offset-4 hover:underline hover:text-brand-teal-800",
        teal: "bg-gradient-to-br from-brand-teal-500 to-brand-teal-700 text-white shadow-paper hover:from-brand-teal-600 hover:to-brand-teal-700 hover:-translate-y-px hover:shadow-paper-lg"
      },
      size: {
        default: "h-8 px-3 py-1.5 text-xs",
        sm: "h-7 rounded-md px-2.5 text-[11px]",
        lg: "h-10 rounded-md px-5 text-sm",
        icon: "h-8 w-8"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { className: (0, import_utils.cn)(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonVariants
});
