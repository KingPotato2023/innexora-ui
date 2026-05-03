import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// Editorial Atlas button —
// Default variant uses the logo's teal→indigo→ink gradient with a magnetic
// hover lift and a subtle inner-highlight on hover. Outline is the hairline
// ink/15 plate with brand-teal hover ring. All variants share the brand-teal
// focus ring + active scale-down so they read as one family across the app.
//
// Icons: every Lucide <svg> nested inside renders at h-3.5/w-3.5 by default
// to match the editorial scale of the rest of the chrome (eyebrows, kickers
// at 10.5px / pill text at 11px). Override per-call with `[&>svg]:h-4` if
// needed for a specific surface.
const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "btn-primary bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-paper hover:-translate-y-px hover:shadow-paper-lg",
        destructive:
          "bg-red-600 text-white shadow-paper hover:bg-red-700 hover:-translate-y-px hover:shadow-paper-lg",
        outline:
          "border border-ink/15 bg-white/80 text-ink shadow-paper hover:bg-white hover:border-ink/30 hover:-translate-y-px",
        secondary:
          "bg-paper-200 text-ink shadow-paper hover:bg-paper-300 hover:-translate-y-px",
        ghost:
          "text-ink/80 hover:bg-ink/5 hover:text-ink",
        link:
          "text-brand-teal-700 underline-offset-4 hover:underline hover:text-brand-teal-800",
        teal:
          "bg-gradient-to-br from-brand-teal-500 to-brand-teal-700 text-white shadow-paper hover:from-brand-teal-600 hover:to-brand-teal-700 hover:-translate-y-px hover:shadow-paper-lg",
      },
      size: {
        default: "h-8 px-3 py-1.5 text-xs",
        sm: "h-7 rounded-md px-2.5 text-[11px]",
        lg: "h-10 rounded-md px-5 text-sm",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
