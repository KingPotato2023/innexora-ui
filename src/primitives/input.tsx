import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Editorial Atlas input —
// 40px tall (h-10) with a hairline ink/15 border, white-tinted plate, and a
// brand-teal focus ring + border. Disabled state goes paper-cream so the field
// reads as inert without disappearing. The visual contract matches the `.input`
// CSS utility class in styles.css so raw <input className="input" /> elements
// are pixel-identical to <Input /> components.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-ink/15 bg-white/90 px-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/35 focus:border-brand-teal-600 disabled:cursor-not-allowed disabled:bg-paper-200 disabled:text-ink/40",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
