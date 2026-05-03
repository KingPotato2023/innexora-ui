"use client";
import * as React21 from 'react';
import { useState, useEffect, useTransition, useOptimistic, useRef, useCallback } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, ChevronDown, X, Clock, CalendarDays, ArrowLeft, ChevronRight, Menu, Minus, TrendingUp, TrendingDown, Info, ArrowUpRight, ChevronLeft, AlertTriangle, ArrowLeftRight } from 'lucide-react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SelectPrimitive from '@radix-ui/react-select';
import Link6 from 'next/link';
import { DayPicker } from 'react-day-picker';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { format } from 'date-fns';

// src/primitives/button.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/primitives/button.tsx
var buttonVariants = cva(
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
var Button = React21.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React21.createElement(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
var Input = React21.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  )
);
Input.displayName = "Input";
var Textarea = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "textarea",
    {
      ref,
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
var Checkbox = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React21.createElement(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current") }, /* @__PURE__ */ React21.createElement(Check, { className: "h-3 w-3" }))
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/lib/avatar-color.ts
var PALETTE = [
  "bg-teal-600",
  "bg-slate-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-emerald-600",
  "bg-indigo-600",
  "bg-orange-600",
  "bg-violet-600",
  "bg-cyan-600",
  "bg-fuchsia-600"
];
var AVATAR_PALETTE = PALETTE;
function avatarColorClass(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = hash * 31 + seed.charCodeAt(i) | 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

// src/primitives/avatar.tsx
var Avatar = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
var DICEBEAR_BASE = "https://api.dicebear.com/7.x/initials/svg";
var AVATAR_BG = "01b6ad,2e3191";
var AVATAR_TEXT = "ffffff";
function avatarUrl(name, size) {
  const seed = encodeURIComponent(name);
  return `${DICEBEAR_BASE}?seed=${seed}&backgroundColor=${AVATAR_BG}&backgroundType=gradientLinear&textColor=${AVATAR_TEXT}&fontWeight=600&size=${size}`;
}
function initialsOf(name) {
  return name.split(" ").map((p) => p.charAt(0)).slice(0, 2).join("").toUpperCase() || "?";
}
function BrandedAvatar({
  name,
  imageUrl,
  size = 28
}) {
  const initials = initialsOf(name);
  const src = imageUrl && imageUrl.length > 0 ? imageUrl : avatarUrl(name, size * 2);
  const fallbackBg = avatarColorClass(name);
  return /* @__PURE__ */ React21.createElement(
    "span",
    {
      className: `relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white ${fallbackBg}`,
      style: { width: size, height: size },
      "aria-hidden": "true"
    },
    /* @__PURE__ */ React21.createElement("span", { className: "absolute inset-0 flex items-center justify-center" }, initials),
    /* @__PURE__ */ React21.createElement(
      "img",
      {
        src,
        alt: "",
        width: size,
        height: size,
        loading: "lazy",
        className: "relative h-full w-full object-cover"
      }
    )
  );
}
function OwnerCell({
  name,
  imageUrl
}) {
  if (!name || name === "\u2014") {
    return /* @__PURE__ */ React21.createElement("span", { className: "text-neutral-400" }, "\u2014");
  }
  return /* @__PURE__ */ React21.createElement("div", { className: "flex items-center gap-2 min-w-0" }, /* @__PURE__ */ React21.createElement(BrandedAvatar, { name, imageUrl }), /* @__PURE__ */ React21.createElement("span", { className: "truncate" }, name));
}
var badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ React21.createElement("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Separator = React21.forwardRef(({ className, orientation = "horizontal", ...props }, ref) => /* @__PURE__ */ React21.createElement(
  "div",
  {
    ref,
    role: "separator",
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = "Separator";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-neutral-200", className),
      ...props
    }
  );
}

// src/primitives/empty-state.tsx
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "card p-10 flex flex-col items-center text-center gap-4" }, icon && /* @__PURE__ */ React.createElement("div", { className: "h-12 w-12 rounded-full bg-paper-200 ring-1 ring-ink/10 text-ink/55 inline-flex items-center justify-center" }, icon), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5 max-w-md" }, /* @__PURE__ */ React.createElement("div", { className: "font-display font-semibold text-[18px] leading-tight text-ink-900 tracking-[-0.015em]" }, title), description && /* @__PURE__ */ React.createElement("div", { className: "text-sm text-ink/60" }, description)), action && /* @__PURE__ */ React.createElement("div", { className: "mt-1" }, action));
}
var Card = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/primitives/status-badge.tsx
var TONE_CLASS = {
  neutral: "bg-ink/[0.06] text-ink/80 ring-ink/12",
  muted: "bg-ink/[0.04] text-ink/55 ring-ink/10",
  positive: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  warning: "bg-amber-50 text-amber-700 ring-amber-200/70",
  negative: "bg-red-50 text-red-700 ring-red-200/70",
  info: "bg-sky-50 text-sky-700 ring-sky-200/70",
  brand: "bg-brand-teal-50 text-brand-teal-800 ring-brand-teal-200/70"
};
function StatusBadge({
  children,
  tone = "neutral",
  dot = false
}) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ring-1 ring-inset ${TONE_CLASS[tone]}`
    },
    dot && /* @__PURE__ */ React.createElement("span", { className: `h-1.5 w-1.5 rounded-full ${dotColor(tone)}`, "aria-hidden": "true" }),
    children
  );
}
function dotColor(tone) {
  switch (tone) {
    case "positive":
      return "bg-emerald-500";
    case "warning":
      return "bg-amber-500";
    case "negative":
      return "bg-red-500";
    case "info":
      return "bg-sky-500";
    case "brand":
      return "bg-brand-teal-500";
    case "muted":
      return "bg-ink/30";
    case "neutral":
    default:
      return "bg-ink/40";
  }
}
function leadStageTone(stage) {
  switch (stage) {
    case "won":
      return "positive";
    case "lost":
      return "negative";
    case "proposal":
      return "info";
    case "opportunity":
      return "brand";
    case "qualified":
      return "info";
    default:
      return "muted";
  }
}
function workOrderStatusTone(status) {
  switch (status) {
    case "closed":
      return "positive";
    case "cancelled":
      return "muted";
    case "in_progress":
      return "info";
    case "on_hold":
      return "warning";
    case "assigned":
    case "triaged":
      return "brand";
    default:
      return "neutral";
  }
}
function priorityTone(priority) {
  switch (priority) {
    case "urgent":
      return "negative";
    case "high":
      return "warning";
    case "medium":
      return "neutral";
    case "low":
      return "muted";
    default:
      return "neutral";
  }
}
function contractStatusTone(status) {
  switch (status) {
    case "active":
      return "positive";
    case "draft":
      return "muted";
    case "expired":
      return "warning";
    case "terminated":
      return "negative";
    default:
      return "neutral";
  }
}
function invoiceStatusTone(status) {
  switch (status) {
    case "paid":
      return "positive";
    case "sent":
      return "info";
    case "overdue":
      return "negative";
    case "draft":
      return "muted";
    case "cancelled":
      return "muted";
    default:
      return "neutral";
  }
}
function srStatusTone(status) {
  switch (status) {
    case "converted_to_work_order":
      return "info";
    case "acknowledged":
      return "brand";
    case "closed_no_action":
      return "muted";
    default:
      return "neutral";
  }
}
function stakeholderTypeTone(type) {
  switch (type) {
    case "developer":
      return "brand";
    case "owner":
      return "info";
    case "tenant":
      return "neutral";
    case "vendor":
      return "warning";
    case "investor":
      return "positive";
    case "lead":
      return "muted";
    default:
      return "neutral";
  }
}
function assetConditionTone(condition) {
  switch (condition) {
    case "excellent":
    case "good":
      return "positive";
    case "fair":
      return "warning";
    case "poor":
      return "negative";
    case "needs_replacement":
      return "negative";
    default:
      return "neutral";
  }
}
function activeTone(active) {
  return active ? "positive" : "muted";
}
function communicationTypeTone(type) {
  switch (type) {
    case "complaint":
      return "negative";
    case "meeting":
      return "info";
    case "email":
      return "info";
    case "call":
      return "brand";
    case "note":
      return "neutral";
    default:
      return "neutral";
  }
}
function communicationDirectionTone(direction) {
  return direction === "inbound" ? "info" : "neutral";
}
function maintenanceFrequencyTone(_freq) {
  return "info";
}
function maintenanceStatusTone(status) {
  switch (status) {
    case "active":
      return "positive";
    case "paused":
      return "warning";
    case "ended":
      return "muted";
    default:
      return "neutral";
  }
}
function auditActionTone(action) {
  switch (action) {
    case "create":
      return "positive";
    case "update":
      return "info";
    case "delete":
      return "negative";
    case "login":
    case "signin":
      return "brand";
    case "signout":
      return "muted";
    default:
      return "neutral";
  }
}

// src/selection/pill-group.tsx
var basePillClass = "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all bg-white text-neutral-500 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-brand-indigo-400 peer-checked:shadow-sm peer-checked:ring-2 ";
function PillGroup({
  name,
  options,
  defaultValue,
  disabled,
  required,
  onValueChange
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "radiogroup",
      "aria-label": name,
      className: "flex flex-wrap gap-2 mt-1"
    },
    options.map((opt, i) => /* @__PURE__ */ React.createElement(
      "label",
      {
        key: opt.value,
        className: "select-none " + (disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer")
      },
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "radio",
          name,
          value: opt.value,
          defaultChecked: defaultValue === opt.value,
          disabled,
          required: required && i === 0,
          onChange: (e) => {
            if (e.currentTarget.checked) onValueChange?.(opt.value);
          },
          className: "peer sr-only"
        }
      ),
      /* @__PURE__ */ React.createElement("span", { className: basePillClass + opt.selectedClass }, opt.label)
    ))
  );
}
var buttonPillBase = "relative inline-flex items-center rounded-full px-3 h-7 text-[11.5px] font-medium transition-all cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-paper-100 focus-visible:ring-brand-teal-500/45 ";
var FILTER_UNSELECTED = "bg-white text-ink/65 ring-1 ring-inset ring-ink/12 hover:text-ink hover:ring-ink/25 hover:bg-paper-50";
var FILTER_SELECTED = "bg-brand-gradient text-white ring-0 shadow-paper";
var COLOR_SELECTED = "bg-brand-indigo-700 text-white ring-2 ring-brand-indigo-700 shadow-sm";
var COLOR_UNSELECTED = "bg-white text-neutral-500 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700";
function PillButtons({
  options,
  value,
  onChange,
  ariaLabel,
  variant = "color"
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "radiogroup",
      "aria-label": ariaLabel,
      className: "flex flex-wrap gap-1.5"
    },
    options.map((opt) => {
      const selected = opt.value === value;
      const activeClass = variant === "filter" ? selected ? FILTER_SELECTED : FILTER_UNSELECTED : selected ? COLOR_SELECTED : COLOR_UNSELECTED;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: opt.value,
          type: "button",
          role: "radio",
          "aria-checked": selected,
          onClick: () => onChange(opt.value),
          className: buttonPillBase + activeClass
        },
        opt.label
      );
    })
  );
}
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "group flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-ink/15 bg-white/90 px-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-ink/40 transition-all duration-200 hover:border-ink/25 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/35 focus:border-brand-teal-600 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React21.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React21.createElement(ChevronDown, { className: "h-4 w-4 text-ink/55 transition-transform duration-200 group-data-[state=open]:rotate-180" }))
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React21.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ React21.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React21.createElement(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[10rem] overflow-hidden rounded-md border border-ink/12 bg-white text-ink shadow-paper-lg before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(0,142,134,0.45)_35%,rgba(46,49,145,0.45)_65%,transparent)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
      position === "popper" && "data-[side=bottom]:translate-y-1",
      className
    ),
    position,
    ...props
  },
  /* @__PURE__ */ React21.createElement(
    SelectPrimitive.Viewport,
    {
      className: cn(
        "p-1.5",
        position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )
    },
    children
  )
)));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-ink/85 outline-none transition-colors focus:bg-brand-teal-500/[0.06] focus:text-ink data-[state=checked]:text-ink data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React21.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-brand-teal-600" }, /* @__PURE__ */ React21.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React21.createElement(Check, { className: "h-3.5 w-3.5" }))),
  /* @__PURE__ */ React21.createElement(SelectPrimitive.ItemText, null, children)
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// src/selection/hidden-form-select.tsx
var EMPTY_SENTINEL = "__empty";
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
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const internal = value === "" ? EMPTY_SENTINEL : value;
  const handleChange = (next) => {
    const real = next === EMPTY_SENTINEL ? "" : next;
    setValue(real);
    onChange?.(real);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Select, { value: internal, onValueChange: handleChange, disabled }, /* @__PURE__ */ React.createElement(
    SelectTrigger,
    {
      className,
      "aria-invalid": ariaInvalid ? true : void 0
    },
    /* @__PURE__ */ React.createElement(SelectValue, { placeholder })
  ), /* @__PURE__ */ React.createElement(SelectContent, null, options.map((opt) => /* @__PURE__ */ React.createElement(
    SelectItem,
    {
      key: opt.value === "" ? EMPTY_SENTINEL : opt.value,
      value: opt.value === "" ? EMPTY_SENTINEL : opt.value
    },
    opt.label
  )))), /* @__PURE__ */ React.createElement("input", { type: "hidden", name, value }));
}
var wrapperClass = "inline-flex items-center gap-0.5 rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm";
var segmentBase = "px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400";
var segmentActive = "bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-sm";
var segmentInactive = "text-neutral-600 hover:text-brand-indigo-700";
function SegmentedControlLinks({
  options,
  value,
  hrefFor,
  ariaLabel
}) {
  return /* @__PURE__ */ React.createElement("div", { role: "tablist", "aria-label": ariaLabel, className: wrapperClass }, options.map((opt) => {
    const selected = opt.value === value;
    return /* @__PURE__ */ React.createElement(
      Link6,
      {
        key: opt.value,
        href: hrefFor(opt.value),
        role: "tab",
        "aria-selected": selected,
        className: [
          segmentBase,
          selected ? segmentActive : segmentInactive
        ].join(" ")
      },
      opt.label
    );
  }));
}
function weekStart(d) {
  const dt = new Date(d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function NavChevron({ orientation }) {
  if (orientation === "right") return /* @__PURE__ */ React21.createElement(ChevronRight, { className: "h-3.5 w-3.5" });
  if (orientation === "down") return /* @__PURE__ */ React21.createElement(ChevronDown, { className: "h-3.5 w-3.5" });
  return /* @__PURE__ */ React21.createElement(ChevronLeft, { className: "h-3.5 w-3.5" });
}
function BrandedDropdown(props) {
  const currentValue = props.value === void 0 ? "" : String(props.value);
  const handleChange = (next) => {
    if (!props.onChange) return;
    const fakeEvent = {
      target: { value: next },
      currentTarget: { value: next }
    };
    props.onChange(fakeEvent);
  };
  return /* @__PURE__ */ React21.createElement(Select, { value: currentValue, onValueChange: handleChange, disabled: props.disabled }, /* @__PURE__ */ React21.createElement(
    SelectTrigger,
    {
      "aria-label": props["aria-label"],
      className: "h-7 min-w-[88px] gap-1 rounded-md border border-ink/12 bg-white px-2 text-[13px] font-semibold text-ink-900 hover:border-ink/25 focus:ring-2 focus:ring-brand-indigo-400/35 focus:border-brand-indigo-500"
    },
    /* @__PURE__ */ React21.createElement(SelectValue, null)
  ), /* @__PURE__ */ React21.createElement(
    SelectContent,
    {
      className: "max-h-[260px]",
      position: "popper",
      sideOffset: 4
    },
    props.options?.map((opt) => /* @__PURE__ */ React21.createElement(
      SelectItem,
      {
        key: opt.value,
        value: String(opt.value),
        disabled: opt.disabled,
        className: "text-[13px]"
      },
      opt.label
    ))
  ));
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  const now = /* @__PURE__ */ new Date();
  const wkStart = weekStart(now);
  const wkEnd = new Date(wkStart);
  wkEnd.setDate(wkEnd.getDate() + 6);
  return /* @__PURE__ */ React21.createElement(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-0", className),
      hideNavigation: true,
      modifiers: { thisWeek: { from: wkStart, to: wkEnd } },
      modifiersClassNames: {
        thisWeek: "bg-brand-teal-50/60"
      },
      classNames: {
        months: "flex flex-col gap-4",
        month: "space-y-3",
        month_caption: "flex items-center justify-center gap-1.5 px-1",
        caption_label: "sr-only",
        dropdowns: "flex items-center gap-1.5",
        dropdown_root: "relative inline-flex items-center",
        dropdown: "",
        month_grid: "w-full border-collapse mt-1",
        weekdays: "flex w-full",
        weekday: "flex-1 h-8 inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-ink/45",
        weeks: "",
        week: "flex w-full mt-1",
        day: "flex-1 h-9 p-0 text-center relative",
        day_button: "inline-flex items-center justify-center w-9 h-9 rounded-md text-[12px] text-ink-900 hover:bg-brand-teal-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400",
        outside: "[&>button]:text-ink/30",
        disabled: "[&>button]:text-ink/20 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
        today: "[&>button]:font-semibold [&>button]:text-brand-teal-700 [&>button]:ring-2 [&>button]:ring-brand-teal-400 [&>button]:ring-inset",
        selected: "[&>button]:bg-gradient-to-br [&>button]:from-brand-teal-500 [&>button]:to-brand-indigo-700 [&>button]:text-white [&>button]:font-semibold [&>button]:shadow-sm [&>button]:hover:from-brand-teal-500 [&>button]:hover:to-brand-indigo-700 [&>button]:hover:text-white",
        ...classNames
      },
      components: {
        Chevron: NavChevron,
        Dropdown: BrandedDropdown
      },
      ...props
    }
  );
}
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React21.forwardRef(({ className, align = "start", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ React21.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React21.createElement(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-auto rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    ),
    ...props
  }
)));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/selection/date-picker.tsx
function pad2(n) {
  return String(n).padStart(2, "0");
}
function toIsoDate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function toIsoDateTime(d) {
  return `${toIsoDate(d)}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
function parseIso(s) {
  if (!s) return void 0;
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2}))?/);
  if (!m) return void 0;
  const d = new Date(
    Number(m[1]),
    Number(m[2]) - 1,
    Number(m[3]),
    m[4] ? Number(m[4]) : 0,
    m[5] ? Number(m[5]) : 0
  );
  if (Number.isNaN(d.getTime())) return void 0;
  return d;
}
function formatDateDisplay(d) {
  return d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function formatTimeDisplay(d) {
  return d.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
}
function DatePicker({
  name,
  defaultValue,
  required,
  placeholder,
  className,
  id,
  disabled,
  fromYear,
  toYear,
  withTime = false
}) {
  const [date, setDate] = useState(parseIso(defaultValue));
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setDate(parseIso(defaultValue));
  }, [defaultValue]);
  const value = !date ? "" : withTime ? toIsoDateTime(date) : toIsoDate(date);
  const triggerLabel = !date ? placeholder ?? (withTime ? "Pick a date and time" : "Pick a date") : withTime ? `${formatDateDisplay(date)} \xB7 ${formatTimeDisplay(date)}` : formatDateDisplay(date);
  const setCalendarDay = (d) => {
    if (!d) {
      setDate(void 0);
      return;
    }
    if (withTime) {
      const base = date ?? /* @__PURE__ */ new Date();
      const next = new Date(d);
      next.setHours(base.getHours(), base.getMinutes(), 0, 0);
      setDate(next);
    } else {
      const next = new Date(d);
      next.setHours(0, 0, 0, 0);
      setDate(next);
      setOpen(false);
    }
  };
  const setHour = (h) => {
    const base = date ?? (() => {
      const n = /* @__PURE__ */ new Date();
      n.setSeconds(0, 0);
      return n;
    })();
    const next = new Date(base);
    next.setHours(Math.max(0, Math.min(23, h)));
    setDate(next);
  };
  const setMinute = (m) => {
    const base = date ?? (() => {
      const n = /* @__PURE__ */ new Date();
      n.setSeconds(0, 0);
      return n;
    })();
    const next = new Date(base);
    next.setMinutes(Math.max(0, Math.min(59, m)));
    setDate(next);
  };
  return /* @__PURE__ */ React.createElement("div", { className: cn("relative", className) }, /* @__PURE__ */ React.createElement(Popover, { open, onOpenChange: setOpen }, /* @__PURE__ */ React.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      id,
      disabled,
      className: cn(
        "input flex items-center justify-between gap-2 text-left",
        !date && "text-ink/45",
        disabled && "cursor-not-allowed opacity-60"
      )
    },
    /* @__PURE__ */ React.createElement("span", { className: "truncate" }, triggerLabel),
    /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1 shrink-0 text-ink/45" }, date && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        "aria-label": "Clear",
        className: "rounded p-0.5 hover:bg-ink/[0.06] hover:text-ink/80",
        onClick: (e) => {
          e.stopPropagation();
          setDate(void 0);
        }
      },
      /* @__PURE__ */ React.createElement(X, { className: "h-3.5 w-3.5" })
    ), withTime ? /* @__PURE__ */ React.createElement(Clock, { className: "h-4 w-4" }) : /* @__PURE__ */ React.createElement(CalendarDays, { className: "h-4 w-4" }))
  )), /* @__PURE__ */ React.createElement(PopoverContent, { align: "start", className: "p-3" }, /* @__PURE__ */ React.createElement(
    Calendar,
    {
      mode: "single",
      selected: date,
      onSelect: setCalendarDay,
      captionLayout: "dropdown",
      startMonth: new Date(fromYear ?? (/* @__PURE__ */ new Date()).getFullYear() - 10, 0),
      endMonth: new Date(toYear ?? (/* @__PURE__ */ new Date()).getFullYear() + 10, 11),
      defaultMonth: date ?? /* @__PURE__ */ new Date()
    }
  ), withTime && /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex items-center justify-center gap-2 border-t border-ink/10 pt-3" }, /* @__PURE__ */ React.createElement(Clock, { className: "h-3.5 w-3.5 text-ink/45" }), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1" }, "Time"), /* @__PURE__ */ React.createElement(
    TimeSpinner,
    {
      value: date?.getHours() ?? 0,
      max: 23,
      onChange: setHour,
      ariaLabel: "Hours"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-ink/55 font-mono" }, ":"), /* @__PURE__ */ React.createElement(
    TimeSpinner,
    {
      value: date?.getMinutes() ?? 0,
      max: 59,
      onChange: setMinute,
      ariaLabel: "Minutes"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 hover:text-brand-teal-700",
      onClick: () => setDate(void 0)
    },
    "Clear"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-teal-700 hover:text-brand-teal-800",
      onClick: () => {
        const t = /* @__PURE__ */ new Date();
        if (!withTime) t.setHours(0, 0, 0, 0);
        else t.setSeconds(0, 0);
        setDate(t);
        if (!withTime) setOpen(false);
      }
    },
    withTime ? "Now" : "Today"
  ), withTime && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-indigo-700 hover:text-brand-indigo-800",
      onClick: () => setOpen(false)
    },
    "Done"
  )))), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "hidden",
      name,
      value,
      required
    }
  ));
}
function TimeSpinner({
  value,
  max,
  onChange,
  ariaLabel
}) {
  const [draft, setDraft] = useState(pad2(value));
  useEffect(() => setDraft(pad2(value)), [value]);
  const commit = (raw) => {
    const n = Number(raw.replace(/\D/g, ""));
    if (Number.isFinite(n)) {
      const clamped = Math.max(0, Math.min(max, n));
      onChange(clamped);
      setDraft(pad2(clamped));
    } else {
      setDraft(pad2(value));
    }
  };
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      inputMode: "numeric",
      maxLength: 2,
      "aria-label": ariaLabel,
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onBlur: (e) => commit(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit(e.target.value);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          onChange(Math.min(max, value + 1));
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.max(0, value - 1));
        }
      },
      onFocus: (e) => e.currentTarget.select(),
      className: "w-11 h-8 rounded-md border border-ink/15 bg-white text-center font-mono tabular-nums text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo-400 focus:border-brand-indigo-400 transition-colors"
    }
  );
}
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React21.createElement(DialogPortal, null, /* @__PURE__ */ React21.createElement(DialogOverlay, null), /* @__PURE__ */ React21.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React21.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none" }, /* @__PURE__ */ React21.createElement(X, { className: "h-4 w-4" }), /* @__PURE__ */ React21.createElement("span", { className: "sr-only" }, "Close"))
)));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ React21.createElement("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ React21.createElement("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  AlertDialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
    ...props
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(AlertDialogPortal, null, /* @__PURE__ */ React21.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React21.createElement(
  AlertDialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
      className
    ),
    ...props
  }
)));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ React21.createElement("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ React21.createElement("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(AlertDialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(AlertDialogPrimitive.Action, { ref, className: cn(className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(AlertDialogPrimitive.Cancel, { ref, className: cn(className), ...props }));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
var alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Alert = React21.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props })
);
Alert.displayName = "Alert";
var AlertTitle = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuContent = React21.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React21.createElement(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      className
    ),
    ...props
  }
)));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React21.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuLabel = React21.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var Tabs = TabsPrimitive.Root;
var TabsList = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  TabsPrimitive.List,
  {
    ref,
    className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  TabsPrimitive.Content,
  {
    ref,
    className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/layout/page-header.tsx
function PageHero({
  icon,
  title,
  description,
  meta,
  actions,
  kicker
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-hidden": "true",
      className: "absolute inset-x-0 -top-1 h-px",
      style: {
        background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.5) 35%, rgba(46,49,145,0.5) 65%, transparent 100%)"
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-5 flex-wrap pt-4 pb-5" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-paper-200 text-ink-900 ring-1 ring-ink/10 shadow-paper" }, /* @__PURE__ */ React.createElement("span", { className: "text-ink/80" }, icon)), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, kicker && /* @__PURE__ */ React.createElement("div", { className: "eyebrow mb-2 text-brand-indigo-700" }, kicker), /* @__PURE__ */ React.createElement("h1", { className: "page-title" }, title), meta && /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex flex-wrap items-center gap-2" }, meta), description && /* @__PURE__ */ React.createElement("p", { className: "mt-3 text-[14.5px] text-ink/65 max-w-2xl" }, description)), actions && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap pt-1" }, actions)), /* @__PURE__ */ React.createElement("div", { className: "rule-fade" }));
}
function PageHeader({
  title,
  description,
  actions,
  kicker
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-end justify-between flex-wrap gap-4 pb-5" }, /* @__PURE__ */ React.createElement("div", { className: "min-w-0" }, kicker && /* @__PURE__ */ React.createElement("div", { className: "eyebrow mb-2" }, kicker), /* @__PURE__ */ React.createElement("h1", { className: "page-title" }, title), description && /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-[14px] text-ink/65 max-w-2xl" }, description)), actions && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, actions));
}
var SEGMENT_BASE = "text-[10.5px] font-mono font-semibold uppercase tracking-[0.18em] transition-colors max-w-[24ch] truncate";
var SEGMENT_LINK = SEGMENT_BASE + " text-ink/55 hover:text-ink-900";
var SEGMENT_CURRENT = SEGMENT_BASE + " text-ink-900";
function Breadcrumbs({ items }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ React.createElement("nav", { "aria-label": "Breadcrumb", className: "mb-3" }, /* @__PURE__ */ React.createElement("ol", { className: "flex items-center gap-1.5 flex-wrap" }, items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const hasHref = Boolean(item.href);
    const labelEl = hasHref && !isLast ? /* @__PURE__ */ React.createElement(
      Link6,
      {
        href: item.href,
        className: "inline-flex items-center gap-1.5 " + SEGMENT_LINK
      },
      isFirst && /* @__PURE__ */ React.createElement(ArrowLeft, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }),
      /* @__PURE__ */ React.createElement("span", { className: "truncate" }, item.label)
    ) : /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-current": isLast ? "page" : void 0,
        className: "inline-flex items-center gap-1.5 " + (isLast ? SEGMENT_CURRENT : SEGMENT_LINK)
      },
      isFirst && /* @__PURE__ */ React.createElement(ArrowLeft, { className: "h-3 w-3 shrink-0 opacity-70", "aria-hidden": "true" }),
      /* @__PURE__ */ React.createElement("span", { className: "truncate" }, item.label)
    );
    return /* @__PURE__ */ React.createElement("li", { key: i, className: "flex items-center gap-1.5 min-w-0" }, !isFirst && /* @__PURE__ */ React.createElement(ChevronRight, { className: "h-3 w-3 shrink-0 text-ink/30", "aria-hidden": "true" }), labelEl);
  })));
}
function isActive(pathname, href) {
  if (pathname === href) return true;
  return pathname.startsWith(href + "/");
}
function SidebarNav({
  items,
  onNavigate,
  groupOrder,
  groupLabels
}) {
  const pathname = usePathname();
  const buckets = /* @__PURE__ */ new Map();
  const order = [];
  for (const item of items) {
    const key = item.group ?? "";
    if (!buckets.has(key)) {
      buckets.set(key, []);
      order.push(key);
    }
    buckets.get(key).push(item);
  }
  const finalOrder = groupOrder ?? order;
  return /* @__PURE__ */ React21.createElement("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-6" }, finalOrder.map((key) => {
    const list = buckets.get(key);
    if (!list || list.length === 0) return null;
    const label = key === "" ? void 0 : groupLabels?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
    return /* @__PURE__ */ React21.createElement(
      SidebarGroup,
      {
        key: key || "__ungrouped",
        label,
        items: list,
        pathname,
        onNavigate
      }
    );
  }));
}
function SidebarGroup({
  label,
  items,
  pathname,
  onNavigate
}) {
  return /* @__PURE__ */ React21.createElement("div", null, label && /* @__PURE__ */ React21.createElement("div", { className: "px-3 pb-2 eyebrow text-white/55" }, label), /* @__PURE__ */ React21.createElement("ul", { className: "space-y-0.5" }, items.map((i) => {
    const Icon2 = i.icon;
    const active = isActive(pathname, i.href);
    return /* @__PURE__ */ React21.createElement("li", { key: i.href }, /* @__PURE__ */ React21.createElement(
      Link6,
      {
        href: i.href,
        onClick: onNavigate,
        "aria-current": active ? "page" : void 0,
        className: [
          "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
          active ? "bg-white/[0.07] text-white font-medium" : "text-white/65 hover:bg-white/[0.04] hover:text-white"
        ].join(" ")
      },
      active && /* @__PURE__ */ React21.createElement(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 flex h-1.5 w-1.5"
        },
        /* @__PURE__ */ React21.createElement("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }),
        /* @__PURE__ */ React21.createElement("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })
      ),
      /* @__PURE__ */ React21.createElement(
        Icon2,
        {
          className: [
            "h-[15px] w-[15px] shrink-0 transition-colors",
            active ? "text-brand-teal-300" : "text-white/45 group-hover:text-white/85"
          ].join(" ")
        }
      ),
      /* @__PURE__ */ React21.createElement("span", { className: "truncate tracking-[-0.005em]" }, i.label)
    ));
  })));
}
function MobileMenuButton({
  open,
  onClick
}) {
  return /* @__PURE__ */ React21.createElement(
    "button",
    {
      type: "button",
      onClick,
      className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100",
      "aria-label": open ? "Close menu" : "Open menu"
    },
    open ? /* @__PURE__ */ React21.createElement(X, { className: "h-5 w-5" }) : /* @__PURE__ */ React21.createElement(Menu, { className: "h-5 w-5" })
  );
}
function ShellLayout({
  children,
  navItems,
  brand,
  userFooter,
  groupOrder,
  groupLabels
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();
  return /* @__PURE__ */ React21.createElement("div", { className: "relative min-h-screen" }, /* @__PURE__ */ React21.createElement(
    "div",
    {
      "data-app-chrome": true,
      className: "md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-ink/10 bg-paper-100/85 backdrop-blur px-4 py-2.5"
    },
    brand,
    /* @__PURE__ */ React21.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        "aria-label": open ? "Close menu" : "Open menu",
        className: "inline-flex items-center justify-center rounded-md p-2 text-ink/80 hover:bg-ink/5"
      },
      open ? /* @__PURE__ */ React21.createElement(X, { className: "h-5 w-5" }) : /* @__PURE__ */ React21.createElement(Menu, { className: "h-5 w-5" })
    )
  ), /* @__PURE__ */ React21.createElement(
    "aside",
    {
      "data-app-chrome": true,
      className: "hidden md:flex sidebar-surface fixed inset-y-0 left-0 w-64 flex-col z-20"
    },
    /* @__PURE__ */ React21.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-teal-500/35 to-transparent"
      }
    ),
    /* @__PURE__ */ React21.createElement("div", { className: "flex h-16 items-center px-5 border-b border-white/5" }, brand),
    /* @__PURE__ */ React21.createElement(
      SidebarNav,
      {
        items: navItems,
        groupOrder,
        groupLabels
      }
    ),
    userFooter && /* @__PURE__ */ React21.createElement("div", { className: "border-t border-white/5" }, userFooter)
  ), open && /* @__PURE__ */ React21.createElement("div", { className: "md:hidden fixed inset-0 z-40" }, /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: "absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in-soft",
      onClick: close,
      "aria-hidden": true
    }
  ), /* @__PURE__ */ React21.createElement("aside", { className: "absolute inset-y-0 left-0 w-72 max-w-[85%] sidebar-surface flex flex-col shadow-paper-lg" }, /* @__PURE__ */ React21.createElement("div", { className: "flex h-16 items-center justify-between px-5 border-b border-white/5" }, brand, /* @__PURE__ */ React21.createElement(
    "button",
    {
      type: "button",
      onClick: close,
      "aria-label": "Close menu",
      className: "inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5"
    },
    /* @__PURE__ */ React21.createElement(X, { className: "h-5 w-5" })
  )), /* @__PURE__ */ React21.createElement(
    SidebarNav,
    {
      items: navItems,
      onNavigate: close,
      groupOrder,
      groupLabels
    }
  ), userFooter && /* @__PURE__ */ React21.createElement("div", { className: "border-t border-white/5" }, userFooter))), /* @__PURE__ */ React21.createElement("main", { className: "md:ml-64 relative z-[2]" }, /* @__PURE__ */ React21.createElement(
    "div",
    {
      key: pathname,
      className: "px-4 py-7 sm:px-7 lg:px-10 animate-fade-in-soft"
    },
    children
  )));
}

// src/cards/form-card.tsx
function FormCard({
  children,
  className
}) {
  return /* @__PURE__ */ React.createElement("div", { className: `card p-6 space-y-6 ${className ?? ""}` }, children);
}
function FormSplitBody({
  left,
  right
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8 gap-y-6 items-start" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, left), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "hidden lg:block w-px bg-ink/10 self-stretch my-6",
      "aria-hidden": true
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, right));
}
function FormSection({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ React.createElement("section", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h3", { className: "flex items-center gap-1.5 text-[11px] font-bold text-brand-indigo-700 uppercase tracking-[0.08em] mb-4 pb-2 border-b border-ink/10" }, icon && /* @__PURE__ */ React.createElement("span", { className: "text-brand-indigo-700" }, icon), title), children);
}
function FormActions({
  primary,
  destructive
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 pt-4 border-t border-ink/10" }, destructive && /* @__PURE__ */ React.createElement("div", { className: "mr-auto" }, destructive), /* @__PURE__ */ React.createElement("div", { className: "ml-auto" }, primary));
}
function FormError({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" }, children);
}

// src/cards/detail-card.tsx
function DetailSection({
  title,
  icon,
  action,
  children,
  className
}) {
  return /* @__PURE__ */ React.createElement("section", { className: "card p-6 " + (className ?? "") }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: action ? "flex items-center justify-between gap-4 mb-4" : "mb-4"
    },
    /* @__PURE__ */ React.createElement("h2", { className: "eyebrow text-brand-indigo-700 flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-brand-indigo-700 inline-flex" }, icon), title),
    action
  ), children);
}
function DetailGrid({
  children,
  cols = 2
}) {
  return /* @__PURE__ */ React.createElement(
    "dl",
    {
      className: "grid grid-cols-1 gap-x-8 gap-y-4 text-sm " + (cols === 2 ? "sm:grid-cols-2" : "")
    },
    children
  );
}
function DetailRow({
  icon,
  label,
  value,
  span
}) {
  return /* @__PURE__ */ React.createElement("div", { className: span === 2 ? "sm:col-span-2" : void 0 }, /* @__PURE__ */ React.createElement("dt", { className: "field-label flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-ink/40 inline-flex shrink-0" }, icon), label), /* @__PURE__ */ React.createElement("dd", { className: "mt-1 text-ink/85 leading-relaxed" }, value ?? /* @__PURE__ */ React.createElement("span", { className: "text-ink/40" }, "\u2014")));
}
var ICON_TONE = {
  teal: "bg-brand-teal-50 text-brand-teal-700 ring-1 ring-brand-teal-100/70",
  indigo: "bg-brand-indigo-50 text-brand-indigo-700 ring-1 ring-brand-indigo-100/70",
  warn: "bg-amber-50 text-amber-700 ring-1 ring-amber-100/70",
  neutral: "bg-paper-200 text-ink/60 ring-1 ring-ink/5"
};
var SPARK_TONE = {
  teal: "text-brand-teal-500",
  indigo: "text-brand-indigo-500",
  warn: "text-amber-500",
  neutral: "text-neutral-400"
};
function KpiTile({
  icon,
  label,
  value,
  tone = "neutral",
  delta,
  deltaLabel,
  upIsGood = true,
  href,
  caption,
  sparkline
}) {
  const body = /* @__PURE__ */ React21.createElement("div", { className: "card-interactive p-5 h-full flex flex-col" }, /* @__PURE__ */ React21.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React21.createElement(
    "span",
    {
      className: "inline-flex h-7 w-7 items-center justify-center rounded-md shrink-0 " + ICON_TONE[tone]
    },
    icon
  ), /* @__PURE__ */ React21.createElement("span", { className: "text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55" }, label)), /* @__PURE__ */ React21.createElement("div", { className: "mt-4 flex items-baseline gap-2" }, /* @__PURE__ */ React21.createElement("div", { className: "font-display font-semibold tabular-nums text-[34px] leading-[1] tracking-[-0.024em] text-ink-900" }, value), delta !== void 0 && deltaLabel && /* @__PURE__ */ React21.createElement(DeltaBadge, { delta, label: deltaLabel, upIsGood })), caption && /* @__PURE__ */ React21.createElement("div", { className: "mt-2 text-[11.5px] text-ink/55 font-mono tracking-tight" }, caption), sparkline && sparkline.length > 1 && /* @__PURE__ */ React21.createElement(Sparkline, { points: sparkline, className: SPARK_TONE[tone] }));
  if (href) {
    return /* @__PURE__ */ React21.createElement(Link6, { href, className: "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400 rounded-lg" }, body);
  }
  return body;
}
function Sparkline({
  points,
  className
}) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = 100 / (points.length - 1);
  const coords = points.map((v, i) => {
    const x = i * stepX;
    const y = 22 - (v - min) / range * 20;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  return /* @__PURE__ */ React21.createElement(
    "svg",
    {
      viewBox: "0 0 100 24",
      preserveAspectRatio: "none",
      className: "mt-3 h-6 w-full " + className,
      "aria-hidden": "true"
    },
    /* @__PURE__ */ React21.createElement(
      "polyline",
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: coords
      }
    )
  );
}
function DeltaBadge({
  delta,
  label,
  upIsGood
}) {
  if (delta === 0) {
    return /* @__PURE__ */ React21.createElement(
      "span",
      {
        className: "inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 tabular-nums",
        "aria-label": `No change (${label}) compared to previous period`
      },
      /* @__PURE__ */ React21.createElement(Minus, { className: "h-3 w-3", "aria-hidden": "true" }),
      label
    );
  }
  const isUp = delta > 0;
  const good = isUp === upIsGood;
  const direction = isUp ? "up" : "down";
  const sentiment = good ? "better than" : "worse than";
  const cls = good ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700";
  return /* @__PURE__ */ React21.createElement(
    "span",
    {
      className: "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium tabular-nums " + cls,
      "aria-label": `${direction} ${Math.abs(delta)} (${label}), ${sentiment} previous period`
    },
    isUp ? /* @__PURE__ */ React21.createElement(TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }) : /* @__PURE__ */ React21.createElement(TrendingDown, { className: "h-3 w-3", "aria-hidden": "true" }),
    label
  );
}
function TipCard({
  title,
  children,
  footer,
  sticky = false,
  icon,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "aside",
    {
      className: [
        sticky ? "lg:sticky lg:top-7 lg:h-fit" : "",
        className ?? ""
      ].filter(Boolean).join(" ")
    },
    /* @__PURE__ */ React.createElement("div", { className: "card p-5 space-y-3 bg-paper-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-ink-900" }, /* @__PURE__ */ React.createElement("span", { className: "text-brand-teal-700 shrink-0" }, icon ?? /* @__PURE__ */ React.createElement(Info, { className: "h-4 w-4", "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("span", { className: "eyebrow text-brand-indigo-700" }, title)), /* @__PURE__ */ React.createElement("p", { className: "text-[13px] leading-relaxed text-ink/70" }, children), footer && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "border-t border-ink/10" }), /* @__PURE__ */ React.createElement("p", { className: "text-[12px] leading-relaxed text-ink/55" }, footer)))
  );
}
function TipStrip({
  title,
  children,
  icon,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "rounded-lg border border-ink/10 bg-paper-100 px-4 py-3 flex items-start gap-3 " + (className ?? "")
    },
    /* @__PURE__ */ React.createElement("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-teal-700 ring-1 ring-ink/10 shrink-0 mt-0.5" }, icon ?? /* @__PURE__ */ React.createElement(Info, { className: "h-3.5 w-3.5", "aria-hidden": "true" })),
    /* @__PURE__ */ React.createElement("div", { className: "min-w-0 flex-1" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow text-brand-indigo-700" }, title), /* @__PURE__ */ React.createElement("p", { className: "mt-1.5 text-[13px] leading-relaxed text-ink/70" }, children))
  );
}

// src/lib/daily-quote.ts
var QUOTES = [
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Approach each tenant with the idea of helping them solve a problem.", author: "Brian Tracy" },
  { text: "The most effective property managers know that listening is the most important part of the job.", author: "Roy Bartell" },
  { text: "Treat objections as requests for further information.", author: "Brian Tracy" },
  { text: "If you are not taking care of your customer, your competitor will.", author: "Bob Hooey" },
  { text: "Sell the outcome, not the property.", author: "Sales adage" },
  { text: "People don't buy what you do; they buy why you do it.", author: "Simon Sinek" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Slow is smooth, smooth is fast.", author: "U.S. Navy SEALs" },
  { text: "Continuous improvement is better than delayed perfection.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy" },
  { text: "What gets measured gets managed.", author: "Peter Drucker" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "Great things in business are never done by one person; they are done by a team.", author: "Steve Jobs" },
  { text: "Trust is built with consistency.", author: "Lincoln Chafee" },
  { text: "An ounce of action is worth a ton of theory.", author: "Friedrich Engels" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Begin where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "Persistence is the twin sister of excellence.", author: "Marabel Morgan" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "You can't connect the dots looking forward; you can only connect them looking backward.", author: "Steve Jobs" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" }
];
function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 864e5);
}
function dailyQuote(now = /* @__PURE__ */ new Date()) {
  return QUOTES[dayOfYear(now) % QUOTES.length];
}

// src/cards/zen-strip.tsx
var ZEN_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop",
    alt: "Mountain lake at sunset"
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80&auto=format&fit=crop",
    alt: "Winding road through misty mountains"
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
    alt: "Sunlight through a foggy forest"
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80&auto=format&fit=crop",
    alt: "Rolling green hills"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop",
    alt: "Mountain panorama at dawn"
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&q=80&auto=format&fit=crop",
    alt: "Autumn forest path"
  },
  {
    url: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1600&q=80&auto=format&fit=crop",
    alt: "Calm lake with wooden pier"
  }
];
function dayOfYear2(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 864e5);
}
function ZenStrip({ variant = "strip" }) {
  const today = /* @__PURE__ */ new Date();
  const idx = dayOfYear2(today) % ZEN_IMAGES.length;
  const pick = ZEN_IMAGES[idx];
  const quote = dailyQuote(today);
  const isCard = variant === "card";
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "relative w-full overflow-hidden rounded-xl border border-ink/10 shadow-paper " + (isCard ? "h-full min-h-[320px]" : "h-[200px] sm:h-[240px]")
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: pick.url,
        alt: "",
        loading: "lazy",
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-x-0 bottom-0 px-5 pb-5 text-white " + (isCard ? "sm:px-6 sm:pb-6" : "sm:px-7 sm:pb-6")
      },
      /* @__PURE__ */ React.createElement(
        "blockquote",
        {
          className: "italic font-medium leading-snug drop-shadow-sm " + (isCard ? "text-[15px] sm:text-[16px]" : "text-[15px] sm:text-[17px]")
        },
        "\u201C",
        quote.text,
        "\u201D"
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "mt-2 text-white " + (isCard ? "text-xs" : "text-[12px]")
        },
        "\u2014 ",
        quote.author
      )
    )
  );
}

// src/lib/greeting.ts
function getGreeting(now, fullName) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dubai",
      hour: "numeric",
      hour12: false
    }).format(now)
  );
  const firstName = fullName.trim().split(/\s+/)[0] || "there";
  if (hour >= 5 && hour < 12) {
    return { greeting: `Good morning, ${firstName}`, timeOfDay: "morning", emoji: "\u2600\uFE0F" };
  }
  if (hour >= 12 && hour < 18) {
    return { greeting: `Good afternoon, ${firstName}`, timeOfDay: "afternoon", emoji: "\u2615" };
  }
  if (hour >= 18 && hour < 24) {
    return { greeting: `Good evening, ${firstName}`, timeOfDay: "evening", emoji: "\u{1F319}" };
  }
  return { greeting: `Working late, ${firstName}`, timeOfDay: "late_night", emoji: "\u{1F319}" };
}

// src/cards/manager-hero.tsx
function formatAedShort(value) {
  if (!Number.isFinite(value) || value === 0) return "AED 0";
  const abs = Math.abs(value);
  if (abs >= 1e6) return `AED ${(value / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `AED ${Math.round(value / 1e3)}k`;
  return `AED ${Math.round(value)}`;
}
function ManagerHero({
  userName,
  openRequests,
  activeWorkOrders,
  outstandingAed,
  propertyCount,
  now = /* @__PURE__ */ new Date(),
  briefingLabel = "Properties \xB7 Briefing"
}) {
  const { greeting, emoji } = getGreeting(now, userName);
  const weekday = format(now, "EEEE, MMMM d, yyyy");
  const issueDate = format(now, "yyyy.MM.dd");
  const overdue = openRequests > 0 || activeWorkOrders > 0;
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      "aria-label": "Operations overview",
      className: "relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-paper"
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 top-0 h-px",
        style: {
          background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.6) 35%, rgba(46,49,145,0.6) 65%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-[1.15fr_1fr]" }, /* @__PURE__ */ React.createElement("div", { className: "relative px-7 py-8 sm:px-9 sm:py-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink/55 font-mono" }, /* @__PURE__ */ React.createElement("span", null, "Issue ", issueDate), /* @__PURE__ */ React.createElement("span", { className: "vrule" }), /* @__PURE__ */ React.createElement("span", null, briefingLabel)), /* @__PURE__ */ React.createElement("h1", { className: "mt-5 font-display font-semibold text-[36px] sm:text-[44px] leading-[1.06] tracking-[-0.022em] text-ink-900" }, greeting.split(",")[0], ",", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "display-em" }, userName.split(" ")[0] ?? "there"), ".", " ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", className: "text-[30px] align-middle" }, emoji)), /* @__PURE__ */ React.createElement("p", { className: "mt-3 text-sm text-ink/65" }, /* @__PURE__ */ React.createElement("span", { className: "text-ink/80" }, weekday), !overdue && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "vrule" }), "Nothing pressing \u2014 clear deck")), /* @__PURE__ */ React.createElement("div", { className: "mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-100 px-3 py-1.5 text-[11.5px] font-medium text-ink/75" }, /* @__PURE__ */ React.createElement("span", { className: "relative flex h-1.5 w-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }), /* @__PURE__ */ React.createElement("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "font-mono tabular-nums" }, propertyCount), /* @__PURE__ */ React.createElement("span", { className: "text-ink/50" }, " properties under management"))), /* @__PURE__ */ React.createElement("div", { className: "mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm" }, /* @__PURE__ */ React.createElement(HeroLink, { href: "/service-requests", label: "Open service requests" }), /* @__PURE__ */ React.createElement(HeroLink, { href: "/work-orders", label: "View work orders" }), /* @__PURE__ */ React.createElement(HeroLink, { href: "/properties", label: "Properties register" }))), /* @__PURE__ */ React.createElement("div", { className: "relative bg-hero-gradient overflow-hidden" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -inset-32 motion-safe:animate-aurora-drift",
        style: {
          background: "radial-gradient(40% 50% at 30% 35%, rgba(1,182,173,0.32), transparent 65%), radial-gradient(35% 45% at 75% 70%, rgba(46,49,145,0.28), transparent 70%)"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full",
        style: {
          background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full",
        style: {
          background: "radial-gradient(circle, rgba(1,182,173,0.18), transparent 70%)"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 opacity-[0.07]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "relative p-7 sm:p-9 h-full flex flex-col justify-between gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/70 font-mono" }, /* @__PURE__ */ React.createElement("span", null, "The Ledger"), /* @__PURE__ */ React.createElement("span", { className: "inline-block h-px w-6 bg-white/35" }), /* @__PURE__ */ React.createElement("span", null, "Live")), /* @__PURE__ */ React.createElement("dl", { className: "stagger grid grid-cols-3 gap-5 sm:gap-7" }, /* @__PURE__ */ React.createElement(
      HeroStat,
      {
        label: "Open requests",
        value: openRequests.toString(),
        urgent: openRequests > 0
      }
    ), /* @__PURE__ */ React.createElement(
      HeroStat,
      {
        label: "Work orders",
        value: activeWorkOrders.toString()
      }
    ), /* @__PURE__ */ React.createElement(
      HeroStat,
      {
        label: "Outstanding",
        value: formatAedShort(outstandingAed),
        urgent: outstandingAed > 0
      }
    )))))
  );
}
function HeroLink({ href, label }) {
  return /* @__PURE__ */ React.createElement(
    Link6,
    {
      href,
      className: "group inline-flex items-center gap-1.5 text-ink/85 hover:text-ink transition-colors"
    },
    /* @__PURE__ */ React.createElement("span", { className: "underline-draw" }, label),
    /* @__PURE__ */ React.createElement(
      ArrowUpRight,
      {
        className: "h-3.5 w-3.5 text-brand-teal-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        "aria-hidden": "true"
      }
    )
  );
}
function HeroStat({
  label,
  value,
  urgent
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "dd",
    {
      className: "font-display font-semibold tabular-nums text-[44px] sm:text-[56px] leading-none tracking-[-0.028em] " + (urgent ? "text-amber-200" : "text-white")
    },
    value
  ), /* @__PURE__ */ React.createElement("dt", { className: "mt-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/65 font-mono" }, label));
}
function buildHref(baseHref, page, searchParams) {
  const params = new URLSearchParams();
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      if (v !== void 0 && k !== "page") params.set(k, v);
    }
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${baseHref}?${qs}` : baseHref;
}
function Pagination({
  currentPage,
  totalPages,
  totalCount,
  pageSize,
  baseHref,
  searchParams
}) {
  if (totalPages <= 1) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-end px-4 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/55 border-t border-ink/10 tabular-nums" }, totalCount, " ", totalCount === 1 ? "row" : "rows");
  }
  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalCount);
  const prevHref = buildHref(baseHref, currentPage - 1, searchParams);
  const nextHref = buildHref(baseHref, currentPage + 1, searchParams);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const baseBtn = "inline-flex items-center gap-1 rounded-md border border-ink/10 bg-white px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/80 transition-colors hover:bg-paper-100 hover:text-brand-teal-700 hover:border-ink/20";
  const disabled = "opacity-40 pointer-events-none cursor-not-allowed";
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-3 flex-wrap px-4 py-3 border-t border-ink/10" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/65 tabular-nums" }, "Showing ", /* @__PURE__ */ React.createElement("span", { className: "font-medium text-ink-900" }, from), "\u2013", /* @__PURE__ */ React.createElement("span", { className: "font-medium text-ink-900" }, to), " of", " ", /* @__PURE__ */ React.createElement("span", { className: "font-medium text-ink-900" }, totalCount)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(
    Link6,
    {
      href: hasPrev ? prevHref : "#",
      "aria-disabled": !hasPrev,
      "aria-label": "Previous page",
      className: `${baseBtn} ${hasPrev ? "" : disabled}`,
      tabIndex: hasPrev ? 0 : -1
    },
    /* @__PURE__ */ React.createElement(ChevronLeft, { className: "h-3.5 w-3.5" }),
    "Prev"
  ), /* @__PURE__ */ React.createElement("span", { className: "px-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 tabular-nums" }, "Page ", /* @__PURE__ */ React.createElement("span", { className: "font-medium text-ink-900" }, currentPage), " of", " ", /* @__PURE__ */ React.createElement("span", { className: "font-medium text-ink-900" }, totalPages)), /* @__PURE__ */ React.createElement(
    Link6,
    {
      href: hasNext ? nextHref : "#",
      "aria-disabled": !hasNext,
      "aria-label": "Next page",
      className: `${baseBtn} ${hasNext ? "" : disabled}`,
      tabIndex: hasNext ? 0 : -1
    },
    "Next",
    /* @__PURE__ */ React.createElement(ChevronRight, { className: "h-3.5 w-3.5" })
  )));
}
var Table = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("div", { className: "relative w-full overflow-auto" }, /* @__PURE__ */ React21.createElement("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }))
);
Table.displayName = "Table";
var TableHeader = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
var TableRow = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "th",
    {
      ref,
      className: cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
var TableCell = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
    "td",
    {
      ref,
      className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", className),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
var TableCaption = React21.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
function KanbanBoard({
  stages,
  items,
  stageKey,
  renderCard,
  onMove,
  canMove = false,
  cardHref
}) {
  const [, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic(
    items,
    (state, change) => {
      return state.map(
        (it) => it.id === change.id ? { ...it, __optimisticStage: change.stage } : it
      );
    }
  );
  const resolveStage = (it) => {
    const override = it.__optimisticStage;
    return override ?? stageKey(it);
  };
  const byStage = {};
  for (const s of stages) byStage[s.key] = [];
  for (const it of optimistic) {
    const key = resolveStage(it);
    (byStage[key] ??= []).push(it);
  }
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: "stagger flex md:grid md:grid-cols-3 xl:grid-cols-6 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0"
    },
    stages.map((stage) => /* @__PURE__ */ React21.createElement(
      Column,
      {
        key: stage.key,
        stage,
        cards: byStage[stage.key] ?? [],
        canDrop: canMove,
        renderCard,
        cardHref,
        onDrop: (id) => {
          if (!canMove || !onMove) return;
          startTransition(async () => {
            setOptimistic({ id, stage: stage.key });
            await onMove(id, stage.key);
          });
        }
      }
    ))
  );
}
function Column({
  stage,
  cards,
  canDrop,
  onDrop,
  renderCard,
  cardHref
}) {
  const [over, setOver] = useState(false);
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      onDragOver: (e) => {
        if (!canDrop) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (!over) setOver(true);
      },
      onDragLeave: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOver(false);
      },
      onDrop: (e) => {
        if (!canDrop) return;
        e.preventDefault();
        setOver(false);
        const id = e.dataTransfer.getData("text/plain");
        if (id) onDrop(id);
      },
      className: "shrink-0 md:shrink min-w-[280px] md:min-w-0 snap-start md:snap-align-none rounded-lg border p-3 min-h-[220px] transition-colors " + (over ? "border-brand-indigo-400 bg-brand-indigo-50/60 ring-2 ring-brand-indigo-200" : "border-ink/10 bg-paper-100/70")
    },
    /* @__PURE__ */ React21.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ React21.createElement("h3", { className: "eyebrow text-brand-indigo-700" }, stage.label), /* @__PURE__ */ React21.createElement("span", { className: "text-[11px] font-mono tabular-nums text-ink/55" }, cards.length)),
    /* @__PURE__ */ React21.createElement("ul", { className: "space-y-2" }, cards.map((item) => /* @__PURE__ */ React21.createElement("li", { key: item.id }, /* @__PURE__ */ React21.createElement(
      CardWrapper,
      {
        item,
        draggable: canDrop,
        cardHref
      },
      renderCard(item)
    ))), cards.length === 0 && /* @__PURE__ */ React21.createElement("li", { className: "text-[11px] text-ink/40 italic px-1 py-2" }, "No items"))
  );
}
function CardWrapper({
  item,
  draggable,
  cardHref,
  children
}) {
  const className = "card-interactive block p-3 text-sm select-none " + (draggable ? "cursor-grab active:cursor-grabbing" : "");
  const onDragStart = (e) => {
    if (!draggable) return;
    e.dataTransfer.setData("text/plain", item.id);
    e.dataTransfer.effectAllowed = "move";
  };
  if (cardHref) {
    return /* @__PURE__ */ React21.createElement(
      Link6,
      {
        href: cardHref(item),
        draggable,
        onDragStart,
        className
      },
      children
    );
  }
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      draggable,
      onDragStart,
      className
    },
    children
  );
}
function useUnsavedChangesGuard(active) {
  const router = useRouter();
  const [pendingHref, setPendingHref] = useState(null);
  const activeRef = useRef(active);
  const suppressedRef = useRef(false);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const isGuardingNow = () => activeRef.current && !suppressedRef.current;
  useEffect(() => {
    const handler = (e) => {
      if (!isGuardingNow()) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (!isGuardingNow()) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const target = e.target;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self")
        return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setPendingHref(url.pathname + url.search + url.hash);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  const disable = useCallback(() => {
    suppressedRef.current = true;
  }, []);
  const onConfirmLeave = useCallback(() => {
    if (!pendingHref) return;
    suppressedRef.current = true;
    const target = pendingHref;
    setPendingHref(null);
    router.push(target);
  }, [pendingHref, router]);
  const onCancelLeave = useCallback(() => {
    setPendingHref(null);
  }, []);
  return {
    dialog: /* @__PURE__ */ React.createElement(
      UnsavedChangesDialog,
      {
        open: pendingHref !== null,
        onLeave: onConfirmLeave,
        onStay: onCancelLeave
      }
    ),
    disable
  };
}
function UnsavedChangesDialog({
  open,
  onLeave,
  onStay
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onStay();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onStay]);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "unsaved-changes-title",
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute inset-0 bg-ink/45 backdrop-blur-sm animate-fade-in-soft",
        onClick: onStay,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-md rounded-xl border border-ink/12 bg-white shadow-paper-lg overflow-hidden animate-stagger-up" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 top-0 h-px",
        style: {
          background: "linear-gradient(90deg, transparent, rgba(0,142,134,0.55) 35%, rgba(46,49,145,0.55) 65%, transparent)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal-50 ring-1 ring-brand-teal-200/70 text-brand-teal-700" }, /* @__PURE__ */ React.createElement(AlertTriangle, { className: "h-5 w-5", "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "min-w-0 flex-1" }, /* @__PURE__ */ React.createElement(
      "h2",
      {
        id: "unsaved-changes-title",
        className: "font-display font-semibold text-[22px] leading-tight tracking-[-0.018em] text-ink-900"
      },
      "Leave with ",
      /* @__PURE__ */ React.createElement("span", { className: "display-em" }, "unsaved"),
      " changes?"
    ), /* @__PURE__ */ React.createElement("p", { className: "mt-2 text-[14px] text-ink/70 leading-relaxed" }, "You've made edits that haven't been saved. If you navigate away now, those changes will be discarded.")), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onStay,
        "aria-label": "Close",
        className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink/55 hover:text-ink hover:bg-ink/5 transition-colors"
      },
      /* @__PURE__ */ React.createElement(X, { className: "h-4 w-4", "aria-hidden": "true" })
    )), /* @__PURE__ */ React.createElement("div", { className: "mt-6 flex items-center justify-end gap-2.5" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onLeave,
        className: "inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-white px-3 py-2 text-[13px] font-medium text-ink/75 hover:text-ink hover:border-ink/30 hover:bg-paper-50 transition-all"
      },
      /* @__PURE__ */ React.createElement(ArrowLeftRight, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
      "Discard & leave"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onStay,
        autoFocus: true,
        className: "btn-primary text-[13px] px-4 py-2"
      },
      "Keep editing"
    ))))
  );
}

// src/form-helpers/form-submit-ribbon.tsx
function FormSubmitRibbon({
  submitLabel,
  /** Override the dirty-detection. Most forms should leave this alone
   *  and let the ribbon track FormData snapshots; pass `true` for
   *  forms whose initial state is intentionally "dirty" (e.g. a
   *  Create flow where the empty form should still show an enabled
   *  submit button). */
  alwaysDirty = false
}) {
  const ref = useRef(null);
  const [dirty, setDirty] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setSubmitting(false);
    snapshotInitial();
  }, [pathname, searchParams]);
  const initialRef = useRef("");
  function snapshotInitial() {
    const form = ref.current?.closest("form");
    if (!form) return;
    initialRef.current = serializeForm(form);
    setDirty(false);
  }
  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    snapshotInitial();
    const recheck = () => {
      const current = serializeForm(form);
      setDirty(current !== initialRef.current);
    };
    const onAny = () => requestAnimationFrame(recheck);
    const onSubmit = () => setSubmitting(true);
    form.addEventListener("input", onAny, true);
    form.addEventListener("change", onAny, true);
    form.addEventListener("click", onAny, true);
    form.addEventListener("submit", onSubmit);
    return () => {
      form.removeEventListener("input", onAny, true);
      form.removeEventListener("change", onAny, true);
      form.removeEventListener("click", onAny, true);
      form.removeEventListener("submit", onSubmit);
    };
  }, []);
  const isDirty = alwaysDirty || dirty;
  const guard = useUnsavedChangesGuard(isDirty && !submitting);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { ref, "aria-hidden": "true", className: "h-24" }), /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "region",
      "aria-label": "Save changes",
      className: "fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper-100/95 backdrop-blur shadow-paper-lg md:ml-64"
    },
    /* @__PURE__ */ React.createElement("div", { className: "px-4 sm:px-7 lg:px-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-4 py-3 max-w-6xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "text-[12.5px] font-mono uppercase tracking-[0.18em] text-ink/55" }, submitting ? /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }), "Saving\u2026") : isDirty ? /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }), "Unsaved changes") : /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), "No changes")), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: submitting || !isDirty && !alwaysDirty,
        className: "btn-primary"
      },
      submitting ? "Saving\u2026" : submitLabel
    )))
  ), guard.dialog);
}
function serializeForm(form) {
  const data = new FormData(form);
  const entries = [];
  for (const [k, v] of data.entries()) {
    if (typeof v === "string") {
      entries.push([k, v]);
    } else {
      entries.push([k, `__file:${v.name ?? ""}:${v.size ?? 0}`]);
    }
  }
  entries.sort(
    (a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])
  );
  return JSON.stringify(entries);
}

// src/form-helpers/confirm-form.tsx
function ConfirmForm({
  message,
  children,
  className,
  ...formProps
}) {
  return /* @__PURE__ */ React.createElement(
    "form",
    {
      ...formProps,
      className,
      onSubmit: (e) => {
        if (!window.confirm(message)) {
          e.preventDefault();
        }
      }
    },
    children
  );
}
function fmt(d) {
  const time = d.toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const date = d.toLocaleDateString(void 0, {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });
  return { time, date };
}
function LocalClock() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-[10.5px] text-white/40 font-mono tabular-nums" }, "\xA0");
  }
  const { time, date } = fmt(now);
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-[10.5px] text-white/55 font-mono tabular-nums" }, /* @__PURE__ */ React.createElement(Clock, { className: "h-3 w-3 text-white/40", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "text-white/80" }, time), /* @__PURE__ */ React.createElement("span", { className: "h-2.5 w-px bg-white/15", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", null, date));
}

// src/lib/format.ts
function formatCurrencyShort(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "$0";
  const abs = Math.abs(n);
  if (abs >= 1e6) {
    return `$${(n / 1e6).toFixed(1)}M`;
  }
  if (abs >= 1e3) {
    return `$${Math.round(n / 1e3)}k`;
  }
  return `$${Math.round(n)}`;
}
function formatAedShort2(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "AED 0";
  const abs = Math.abs(n);
  if (abs >= 1e6) return `AED ${(n / 1e6).toFixed(1)}M`;
  if (abs >= 1e4) return `AED ${Math.round(n / 1e3)}k`;
  if (abs >= 1e3) return `AED ${(n / 1e3).toFixed(1)}k`;
  return `AED ${Math.round(n)}`;
}
function formatAed(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return "AED \u2014";
  return `AED ${n.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export { AVATAR_PALETTE, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, Avatar, AvatarFallback, AvatarImage, Badge, BrandedAvatar, Breadcrumbs, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, ConfirmForm, DatePicker, DetailSection as DetailCard, DetailGrid, DetailRow, DetailSection, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuTrigger, EmptyState, FormActions, FormCard, FormError, FormSection, FormSplitBody, FormSubmitRibbon, HiddenFormSelect, Input, KanbanBoard, KpiTile, Label, LocalClock, ManagerHero, MobileMenuButton, OwnerCell, PageHeader, PageHero, Pagination, PillButtons, PillGroup, Popover, PopoverContent, PopoverTrigger, SegmentedControlLinks, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Separator, ShellLayout, SidebarNav, Skeleton, StatusBadge, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TipCard, TipStrip, ZenStrip, activeTone, assetConditionTone, auditActionTone, avatarColorClass, badgeVariants, buttonVariants, cn, communicationDirectionTone, communicationTypeTone, contractStatusTone, dailyQuote, formatAed, formatAedShort2 as formatAedShort, formatCurrencyShort, getGreeting, invoiceStatusTone, leadStageTone, maintenanceFrequencyTone, maintenanceStatusTone, priorityTone, srStatusTone, stakeholderTypeTone, useUnsavedChangesGuard, workOrderStatusTone };
