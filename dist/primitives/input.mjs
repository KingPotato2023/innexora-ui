import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-ink/15 bg-white/90 px-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/35 focus:border-brand-teal-600 disabled:cursor-not-allowed disabled:bg-paper-200 disabled:text-ink/40",
        className
      ),
      ref,
      ...props
    }
  )
);
Input.displayName = "Input";
export {
  Input
};
