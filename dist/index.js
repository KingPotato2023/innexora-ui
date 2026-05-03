"use client";
'use strict';

var React16 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var LabelPrimitive = require('@radix-ui/react-label');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var lucideReact = require('lucide-react');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var SelectPrimitive = require('@radix-ui/react-select');
var Link6 = require('next/link');
var reactDayPicker = require('react-day-picker');
var PopoverPrimitive = require('@radix-ui/react-popover');
var DialogPrimitive = require('@radix-ui/react-dialog');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var TabsPrimitive = require('@radix-ui/react-tabs');
var navigation = require('next/navigation');
var dateFns = require('date-fns');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React16__namespace = /*#__PURE__*/_interopNamespace(React16);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var Link6__default = /*#__PURE__*/_interopDefault(Link6);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);

// src/primitives/button.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
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
var Button = React16__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
var Input = React16__namespace.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var Textarea = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(LabelPrimitive__namespace.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Checkbox = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CheckboxPrimitive__namespace.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3 w-3" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;

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
var Avatar = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AvatarPrimitive__namespace.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: `relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold text-white ${fallbackBg}`,
      style: { width: size, height: size },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: initials }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
      ]
    }
  );
}
function OwnerCell({
  name,
  imageUrl
}) {
  if (!name || name === "\u2014") {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-neutral-400", children: "\u2014" });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
    /* @__PURE__ */ jsxRuntime.jsx(BrandedAvatar, { name, imageUrl }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate", children: name })
  ] });
}
var badgeVariants = classVarianceAuthority.cva(
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Separator = React16__namespace.forwardRef(({ className, orientation = "horizontal", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-neutral-200", className),
      ...props
    }
  );
}
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "card p-10 flex flex-col items-center text-center gap-4", children: [
    icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-12 w-12 rounded-full bg-paper-200 ring-1 ring-ink/10 text-ink/55 inline-flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1.5 max-w-md", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-display font-semibold text-[18px] leading-tight text-ink-900 tracking-[-0.015em]", children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm text-ink/60", children: description })
    ] }),
    action && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-1", children: action })
  ] });
}
var Card = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ring-1 ring-inset ${TONE_CLASS[tone]}`,
      children: [
        dot && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${dotColor(tone)}`, "aria-hidden": "true" }),
        children
      ]
    }
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
var basePillClass = "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all bg-white text-neutral-500 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-brand-indigo-400 peer-checked:shadow-sm peer-checked:ring-2 ";
function PillGroup({
  name,
  options,
  defaultValue,
  disabled,
  required,
  onValueChange
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": name,
      className: "flex flex-wrap gap-2 mt-1",
      children: options.map((opt, i) => /* @__PURE__ */ jsxRuntime.jsxs(
        "label",
        {
          className: "select-none " + (disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
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
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: basePillClass + opt.selectedClass, children: opt.label })
          ]
        },
        opt.value
      ))
    }
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": ariaLabel,
      className: "flex flex-wrap gap-1.5",
      children: options.map((opt) => {
        const selected = opt.value === value;
        const activeClass = variant === "filter" ? selected ? FILTER_SELECTED : FILTER_UNSELECTED : selected ? COLOR_SELECTED : COLOR_UNSELECTED;
        return /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": selected,
            onClick: () => onChange(opt.value),
            className: buttonPillBase + activeClass,
            children: opt.label
          },
          opt.value
        );
      })
    }
  );
}
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React16__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "group flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-ink/15 bg-white/90 px-3 text-sm text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-ink/40 transition-all duration-200 hover:border-ink/25 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/35 focus:border-brand-teal-600 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 text-ink/55 transition-transform duration-200 group-data-[state=open]:rotate-180" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectContent = React16__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[10rem] overflow-hidden rounded-md border border-ink/12 bg-white text-ink shadow-paper-lg before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(0,142,134,0.45)_35%,rgba(46,49,145,0.45)_65%,transparent)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
      position === "popper" && "data-[side=bottom]:translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SelectPrimitive__namespace.Viewport,
      {
        className: cn(
          "p-1.5",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectItem = React16__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-ink/85 outline-none transition-colors focus:bg-brand-teal-500/[0.06] focus:text-ink data-[state=checked]:text-ink data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-brand-teal-600", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3.5 w-3.5" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
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
  const [value, setValue] = React16.useState(defaultValue);
  React16.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const internal = value === "" ? EMPTY_SENTINEL : value;
  const handleChange = (next) => {
    const real = next === EMPTY_SENTINEL ? "" : next;
    setValue(real);
    onChange?.(real);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Select, { value: internal, onValueChange: handleChange, disabled, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        SelectTrigger,
        {
          className,
          "aria-invalid": ariaInvalid ? true : void 0,
          children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, { placeholder })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { children: options.map((opt) => /* @__PURE__ */ jsxRuntime.jsx(
        SelectItem,
        {
          value: opt.value === "" ? EMPTY_SENTINEL : opt.value,
          children: opt.label
        },
        opt.value === "" ? EMPTY_SENTINEL : opt.value
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("input", { type: "hidden", name, value })
  ] });
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { role: "tablist", "aria-label": ariaLabel, className: wrapperClass, children: options.map((opt) => {
    const selected = opt.value === value;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Link6__default.default,
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
function weekStart(d) {
  const dt = new Date(d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function NavChevron({ orientation }) {
  if (orientation === "right") return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3.5 w-3.5" });
  if (orientation === "down") return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-3.5 w-3.5" });
  return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-3.5 w-3.5" });
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Select, { value: currentValue, onValueChange: handleChange, disabled: props.disabled, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      SelectTrigger,
      {
        "aria-label": props["aria-label"],
        className: "h-7 min-w-[88px] gap-1 rounded-md border border-ink/12 bg-white px-2 text-[13px] font-semibold text-ink-900 hover:border-ink/25 focus:ring-2 focus:ring-brand-indigo-400/35 focus:border-brand-indigo-500",
        children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, {})
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      SelectContent,
      {
        className: "max-h-[260px]",
        position: "popper",
        sideOffset: 4,
        children: props.options?.map((opt) => /* @__PURE__ */ jsxRuntime.jsx(
          SelectItem,
          {
            value: String(opt.value),
            disabled: opt.disabled,
            className: "text-[13px]",
            children: opt.label
          },
          opt.value
        ))
      }
    )
  ] });
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
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
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React16__namespace.forwardRef(({ className, align = "start", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
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
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
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
  const [date, setDate] = React16.useState(parseIso(defaultValue));
  const [open, setOpen] = React16.useState(false);
  React16.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          type: "button",
          id,
          disabled,
          className: cn(
            "input flex items-center justify-between gap-2 text-left",
            !date && "text-ink/45",
            disabled && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate", children: triggerLabel }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex items-center gap-1 shrink-0 text-ink/45", children: [
              date && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Clear",
                  className: "rounded p-0.5 hover:bg-ink/[0.06] hover:text-ink/80",
                  onClick: (e) => {
                    e.stopPropagation();
                    setDate(void 0);
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3.5 w-3.5" })
                }
              ),
              withTime ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Clock, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarDays, { className: "h-4 w-4" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsxs(PopoverContent, { align: "start", className: "p-3", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
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
        ),
        withTime && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2 border-t border-ink/10 pt-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Clock, { className: "h-3.5 w-3.5 text-ink/45" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1", children: "Time" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            TimeSpinner,
            {
              value: date?.getHours() ?? 0,
              max: 23,
              onChange: setHour,
              ariaLabel: "Hours"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/55 font-mono", children: ":" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            TimeSpinner,
            {
              value: date?.getMinutes() ?? 0,
              max: 59,
              onChange: setMinute,
              ariaLabel: "Minutes"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 hover:text-brand-teal-700",
              onClick: () => setDate(void 0),
              children: "Clear"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
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
              },
              children: withTime ? "Now" : "Today"
            }
          ),
          withTime && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-indigo-700 hover:text-brand-indigo-800",
              onClick: () => setOpen(false),
              children: "Done"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type: "hidden",
        name,
        value,
        required
      }
    )
  ] });
}
function TimeSpinner({
  value,
  max,
  onChange,
  ariaLabel
}) {
  const [draft, setDraft] = React16.useState(pad2(value));
  React16.useEffect(() => setDraft(pad2(value)), [value]);
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React16__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    DialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
    ...props
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Action, { ref, className: cn(className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Cancel, { ref, className: cn(className), ...props }));
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var alertVariants = classVarianceAuthority.cva(
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
var Alert = React16__namespace.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props })
);
Alert.displayName = "Alert";
var AlertTitle = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h5", { ref, className: cn("mb-1 font-medium leading-none tracking-tight", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuContent = React16__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React16__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
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
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuLabel = React16__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
    ...props
  }
));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React16__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
function PageHero({
  icon,
  title,
  description,
  meta,
  actions,
  kicker
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 -top-1 h-px",
        style: {
          background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.5) 35%, rgba(46,49,145,0.5) 65%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-5 flex-wrap pt-4 pb-5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-paper-200 text-ink-900 ring-1 ring-ink/10 shadow-paper", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/80", children: icon }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
        kicker && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "eyebrow mb-2 text-brand-indigo-700", children: kicker }),
        /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "page-title", children: title }),
        meta && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: meta }),
        description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-3 text-[14.5px] text-ink/65 max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 flex-wrap pt-1", children: actions })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rule-fade" })
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  kicker
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 pb-5", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
      kicker && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "eyebrow mb-2", children: kicker }),
      /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "page-title", children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-2 text-[14px] text-ink/65 max-w-2xl", children: description })
    ] }),
    actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: actions })
  ] });
}
var SEGMENT_BASE = "text-[10.5px] font-mono font-semibold uppercase tracking-[0.18em] transition-colors max-w-[24ch] truncate";
var SEGMENT_LINK = SEGMENT_BASE + " text-ink/55 hover:text-ink-900";
var SEGMENT_CURRENT = SEGMENT_BASE + " text-ink-900";
function Breadcrumbs({ items }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-3", children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: "flex items-center gap-1.5 flex-wrap", children: items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const hasHref = Boolean(item.href);
    const labelEl = hasHref && !isLast ? /* @__PURE__ */ jsxRuntime.jsxs(
      Link6__default.default,
      {
        href: item.href,
        className: "inline-flex items-center gap-1.5 " + SEGMENT_LINK,
        children: [
          isFirst && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate", children: item.label })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        "aria-current": isLast ? "page" : void 0,
        className: "inline-flex items-center gap-1.5 " + (isLast ? SEGMENT_CURRENT : SEGMENT_LINK),
        children: [
          isFirst && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, { className: "h-3 w-3 shrink-0 opacity-70", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate", children: item.label })
        ]
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-center gap-1.5 min-w-0", children: [
      !isFirst && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3 w-3 shrink-0 text-ink/30", "aria-hidden": "true" }),
      labelEl
    ] }, i);
  }) }) });
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
  const pathname = navigation.usePathname();
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
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-6", children: finalOrder.map((key) => {
    const list = buckets.get(key);
    if (!list || list.length === 0) return null;
    const label = key === "" ? void 0 : groupLabels?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
    return /* @__PURE__ */ jsxRuntime.jsx(
      SidebarGroup,
      {
        label,
        items: list,
        pathname,
        onNavigate
      },
      key || "__ungrouped"
    );
  }) });
}
function SidebarGroup({
  label,
  items,
  pathname,
  onNavigate
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-3 pb-2 eyebrow text-white/55", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-0.5", children: items.map((i) => {
      const Icon2 = i.icon;
      const active = isActive(pathname, i.href);
      return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
        Link6__default.default,
        {
          href: i.href,
          onClick: onNavigate,
          "aria-current": active ? "page" : void 0,
          className: [
            "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
            active ? "bg-white/[0.07] text-white font-medium" : "text-white/65 hover:bg-white/[0.04] hover:text-white"
          ].join(" "),
          children: [
            active && /* @__PURE__ */ jsxRuntime.jsxs(
              "span",
              {
                "aria-hidden": "true",
                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 flex h-1.5 w-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Icon2,
              {
                className: [
                  "h-[15px] w-[15px] shrink-0 transition-colors",
                  active ? "text-brand-teal-300" : "text-white/45 group-hover:text-white/85"
                ].join(" ")
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "truncate tracking-[-0.005em]", children: i.label })
          ]
        }
      ) }, i.href);
    }) })
  ] });
}
function MobileMenuButton({
  open,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100",
      "aria-label": open ? "Close menu" : "Open menu",
      children: open ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-5 w-5" })
    }
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
  const [open, setOpen] = React16.useState(false);
  const close = () => setOpen(false);
  const pathname = navigation.usePathname();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        "data-app-chrome": true,
        className: "md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-ink/10 bg-paper-100/85 backdrop-blur px-4 py-2.5",
        children: [
          brand,
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen((v) => !v),
              "aria-label": open ? "Close menu" : "Open menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-ink/80 hover:bg-ink/5",
              children: open ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-5 w-5" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "aside",
      {
        "data-app-chrome": true,
        className: "hidden md:flex sidebar-surface fixed inset-y-0 left-0 w-64 flex-col z-20",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-teal-500/35 to-transparent"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-16 items-center px-5 border-b border-white/5", children: brand }),
          /* @__PURE__ */ jsxRuntime.jsx(
            SidebarNav,
            {
              items: navItems,
              groupOrder,
              groupLabels
            }
          ),
          userFooter && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-white/5", children: userFooter })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "md:hidden fixed inset-0 z-40", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: "absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in-soft",
          onClick: close,
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("aside", { className: "absolute inset-y-0 left-0 w-72 max-w-[85%] sidebar-surface flex flex-col shadow-paper-lg", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-16 items-center justify-between px-5 border-b border-white/5", children: [
          brand,
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": "Close menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          SidebarNav,
          {
            items: navItems,
            onNavigate: close,
            groupOrder,
            groupLabels
          }
        ),
        userFooter && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-white/5", children: userFooter })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("main", { className: "md:ml-64 relative z-[2]", children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "px-4 py-7 sm:px-7 lg:px-10 animate-fade-in-soft",
        children
      },
      pathname
    ) })
  ] });
}
function FormCard({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: `card p-6 space-y-6 ${className ?? ""}`, children });
}
function FormSplitBody({
  left,
  right
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8 gap-y-6 items-start", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-8", children: left }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "hidden lg:block w-px bg-ink/10 self-stretch my-6",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "space-y-8", children: right })
  ] });
}
function FormSection({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("section", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("h3", { className: "flex items-center gap-1.5 text-[11px] font-bold text-brand-indigo-700 uppercase tracking-[0.08em] mb-4 pb-2 border-b border-ink/10", children: [
      icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-brand-indigo-700", children: icon }),
      title
    ] }),
    children
  ] });
}
function FormActions({
  primary,
  destructive
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 pt-4 border-t border-ink/10", children: [
    destructive && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mr-auto", children: destructive }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "ml-auto", children: primary })
  ] });
}
function FormError({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700", children });
}
function DetailSection({
  title,
  icon,
  action,
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("section", { className: "card p-6 " + (className ?? ""), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: action ? "flex items-center justify-between gap-4 mb-4" : "mb-4",
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("h2", { className: "eyebrow text-brand-indigo-700 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-brand-indigo-700 inline-flex", children: icon }),
            title
          ] }),
          action
        ]
      }
    ),
    children
  ] });
}
function DetailGrid({
  children,
  cols = 2
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "dl",
    {
      className: "grid grid-cols-1 gap-x-8 gap-y-4 text-sm " + (cols === 2 ? "sm:grid-cols-2" : ""),
      children
    }
  );
}
function DetailRow({
  icon,
  label,
  value,
  span
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: span === 2 ? "sm:col-span-2" : void 0, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("dt", { className: "field-label flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/40 inline-flex shrink-0", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("dd", { className: "mt-1 text-ink/85 leading-relaxed", children: value ?? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/40", children: "\u2014" }) })
  ] });
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
  const body = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "card-interactive p-5 h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: "inline-flex h-7 w-7 items-center justify-center rounded-md shrink-0 " + ICON_TONE[tone],
          children: icon
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-4 flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-display font-semibold tabular-nums text-[34px] leading-[1] tracking-[-0.024em] text-ink-900", children: value }),
      delta !== void 0 && deltaLabel && /* @__PURE__ */ jsxRuntime.jsx(DeltaBadge, { delta, label: deltaLabel, upIsGood })
    ] }),
    caption && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-2 text-[11.5px] text-ink/55 font-mono tracking-tight", children: caption }),
    sparkline && sparkline.length > 1 && /* @__PURE__ */ jsxRuntime.jsx(Sparkline, { points: sparkline, className: SPARK_TONE[tone] })
  ] });
  if (href) {
    return /* @__PURE__ */ jsxRuntime.jsx(Link6__default.default, { href, className: "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400 rounded-lg", children: body });
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      viewBox: "0 0 100 24",
      preserveAspectRatio: "none",
      className: "mt-3 h-6 w-full " + className,
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntime.jsx(
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
    }
  );
}
function DeltaBadge({
  delta,
  label,
  upIsGood
}) {
  if (delta === 0) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 tabular-nums",
        "aria-label": `No change (${label}) compared to previous period`,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: "h-3 w-3", "aria-hidden": "true" }),
          label
        ]
      }
    );
  }
  const isUp = delta > 0;
  const good = isUp === upIsGood;
  const direction = isUp ? "up" : "down";
  const sentiment = good ? "better than" : "worse than";
  const cls = good ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium tabular-nums " + cls,
      "aria-label": `${direction} ${Math.abs(delta)} (${label}), ${sentiment} previous period`,
      children: [
        isUp ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TrendingDown, { className: "h-3 w-3", "aria-hidden": "true" }),
        label
      ]
    }
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "aside",
    {
      className: [
        sticky ? "lg:sticky lg:top-7 lg:h-fit" : "",
        className ?? ""
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "card p-5 space-y-3 bg-paper-100", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-ink-900", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-brand-teal-700 shrink-0", children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "h-4 w-4", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "eyebrow text-brand-indigo-700", children: title })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[13px] leading-relaxed text-ink/70", children }),
        footer && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-ink/10" }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[12px] leading-relaxed text-ink/55", children: footer })
        ] })
      ] })
    }
  );
}
function TipStrip({
  title,
  children,
  icon,
  className
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "rounded-lg border border-ink/10 bg-paper-100 px-4 py-3 flex items-start gap-3 " + (className ?? ""),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-teal-700 ring-1 ring-ink/10 shrink-0 mt-0.5", children: icon ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "eyebrow text-brand-indigo-700", children: title }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-1.5 text-[13px] leading-relaxed text-ink/70", children })
        ] })
      ]
    }
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden rounded-xl border border-ink/10 shadow-paper " + (isCard ? "h-full min-h-[320px]" : "h-[200px] sm:h-[240px]"),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: pick.url,
            alt: "",
            loading: "lazy",
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: "absolute inset-x-0 bottom-0 px-5 pb-5 text-white " + (isCard ? "sm:px-6 sm:pb-6" : "sm:px-7 sm:pb-6"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "blockquote",
                {
                  className: "italic font-medium leading-snug drop-shadow-sm " + (isCard ? "text-[15px] sm:text-[16px]" : "text-[15px] sm:text-[17px]"),
                  children: [
                    "\u201C",
                    quote.text,
                    "\u201D"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  className: "mt-2 text-white " + (isCard ? "text-xs" : "text-[12px]"),
                  children: [
                    "\u2014 ",
                    quote.author
                  ]
                }
              )
            ]
          }
        )
      ]
    }
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
  const weekday = dateFns.format(now, "EEEE, MMMM d, yyyy");
  const issueDate = dateFns.format(now, "yyyy.MM.dd");
  const overdue = openRequests > 0 || activeWorkOrders > 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "section",
    {
      "aria-label": "Operations overview",
      className: "relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-paper",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute inset-x-0 top-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.6) 35%, rgba(46,49,145,0.6) 65%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid lg:grid-cols-[1.15fr_1fr]", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative px-7 py-8 sm:px-9 sm:py-10", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink/55 font-mono", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                "Issue ",
                issueDate
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "vrule" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: briefingLabel })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("h1", { className: "mt-5 font-display font-semibold text-[36px] sm:text-[44px] leading-[1.06] tracking-[-0.022em] text-ink-900", children: [
              greeting.split(",")[0],
              ",",
              /* @__PURE__ */ jsxRuntime.jsx("br", {}),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "display-em", children: userName.split(" ")[0] ?? "there" }),
              ".",
              " ",
              /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", className: "text-[30px] align-middle", children: emoji })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "mt-3 text-sm text-ink/65", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/80", children: weekday }),
              !overdue && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "vrule" }),
                "Nothing pressing \u2014 clear deck"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-100 px-3 py-1.5 text-[11.5px] font-medium text-ink/75", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono tabular-nums", children: propertyCount }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-ink/50", children: " properties under management" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntime.jsx(HeroLink, { href: "/service-requests", label: "Open service requests" }),
              /* @__PURE__ */ jsxRuntime.jsx(HeroLink, { href: "/work-orders", label: "View work orders" }),
              /* @__PURE__ */ jsxRuntime.jsx(HeroLink, { href: "/properties", label: "Properties register" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative bg-hero-gradient overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -inset-32 motion-safe:animate-aurora-drift",
                style: {
                  background: "radial-gradient(40% 50% at 30% 35%, rgba(1,182,173,0.32), transparent 65%), radial-gradient(35% 45% at 75% 70%, rgba(46,49,145,0.28), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full",
                style: {
                  background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full",
                style: {
                  background: "radial-gradient(circle, rgba(1,182,173,0.18), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "absolute inset-0 opacity-[0.07]",
                style: {
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative p-7 sm:p-9 h-full flex flex-col justify-between gap-8", children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/70 font-mono", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: "The Ledger" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block h-px w-6 bg-white/35" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Live" })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsxs("dl", { className: "stagger grid grid-cols-3 gap-5 sm:gap-7", children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  HeroStat,
                  {
                    label: "Open requests",
                    value: openRequests.toString(),
                    urgent: openRequests > 0
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  HeroStat,
                  {
                    label: "Work orders",
                    value: activeWorkOrders.toString()
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  HeroStat,
                  {
                    label: "Outstanding",
                    value: formatAedShort(outstandingAed),
                    urgent: outstandingAed > 0
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function HeroLink({ href, label }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Link6__default.default,
    {
      href,
      className: "group inline-flex items-center gap-1.5 text-ink/85 hover:text-ink transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "underline-draw", children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ArrowUpRight,
          {
            className: "h-3.5 w-3.5 text-brand-teal-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function HeroStat({
  label,
  value,
  urgent
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "dd",
      {
        className: "font-display font-semibold tabular-nums text-[44px] sm:text-[56px] leading-none tracking-[-0.028em] " + (urgent ? "text-amber-200" : "text-white"),
        children: value
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("dt", { className: "mt-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/65 font-mono", children: label })
  ] });
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-end px-4 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/55 border-t border-ink/10 tabular-nums", children: [
      totalCount,
      " ",
      totalCount === 1 ? "row" : "rows"
    ] });
  }
  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalCount);
  const prevHref = buildHref(baseHref, currentPage - 1, searchParams);
  const nextHref = buildHref(baseHref, currentPage + 1, searchParams);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const baseBtn = "inline-flex items-center gap-1 rounded-md border border-ink/10 bg-white px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/80 transition-colors hover:bg-paper-100 hover:text-brand-teal-700 hover:border-ink/20";
  const disabled = "opacity-40 pointer-events-none cursor-not-allowed";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap px-4 py-3 border-t border-ink/10", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/65 tabular-nums", children: [
      "Showing ",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-ink-900", children: from }),
      "\u2013",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-ink-900", children: to }),
      " of",
      " ",
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-ink-900", children: totalCount })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        Link6__default.default,
        {
          href: hasPrev ? prevHref : "#",
          "aria-disabled": !hasPrev,
          "aria-label": "Previous page",
          className: `${baseBtn} ${hasPrev ? "" : disabled}`,
          tabIndex: hasPrev ? 0 : -1,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-3.5 w-3.5" }),
            "Prev"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "px-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 tabular-nums", children: [
        "Page ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-ink-900", children: currentPage }),
        " of",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-medium text-ink-900", children: totalPages })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        Link6__default.default,
        {
          href: hasNext ? nextHref : "#",
          "aria-disabled": !hasNext,
          "aria-label": "Next page",
          className: `${baseBtn} ${hasNext ? "" : disabled}`,
          tabIndex: hasNext ? 0 : -1,
          children: [
            "Next",
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
var Table = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
var TableHeader = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
var TableRow = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCell = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    {
      ref,
      className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", className),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
var TableCaption = React16__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
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
  const [, startTransition] = React16.useTransition();
  const [optimistic, setOptimistic] = React16.useOptimistic(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: "stagger flex md:grid md:grid-cols-3 xl:grid-cols-6 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0",
      children: stages.map((stage) => /* @__PURE__ */ jsxRuntime.jsx(
        Column,
        {
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
        },
        stage.key
      ))
    }
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
  const [over, setOver] = React16.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
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
      className: "shrink-0 md:shrink min-w-[280px] md:min-w-0 snap-start md:snap-align-none rounded-lg border p-3 min-h-[220px] transition-colors " + (over ? "border-brand-indigo-400 bg-brand-indigo-50/60 ring-2 ring-brand-indigo-200" : "border-ink/10 bg-paper-100/70"),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "eyebrow text-brand-indigo-700", children: stage.label }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[11px] font-mono tabular-nums text-ink/55", children: cards.length })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: "space-y-2", children: [
          cards.map((item) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
            CardWrapper,
            {
              item,
              draggable: canDrop,
              cardHref,
              children: renderCard(item)
            }
          ) }, item.id)),
          cards.length === 0 && /* @__PURE__ */ jsxRuntime.jsx("li", { className: "text-[11px] text-ink/40 italic px-1 py-2", children: "No items" })
        ] })
      ]
    }
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      Link6__default.default,
      {
        href: cardHref(item),
        draggable,
        onDragStart,
        className,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      draggable,
      onDragStart,
      className,
      children
    }
  );
}
function useUnsavedChangesGuard(active) {
  const router = navigation.useRouter();
  const [pendingHref, setPendingHref] = React16.useState(null);
  const activeRef = React16.useRef(active);
  const suppressedRef = React16.useRef(false);
  React16.useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const isGuardingNow = () => activeRef.current && !suppressedRef.current;
  React16.useEffect(() => {
    const handler = (e) => {
      if (!isGuardingNow()) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);
  React16.useEffect(() => {
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
  const disable = React16.useCallback(() => {
    suppressedRef.current = true;
  }, []);
  const onConfirmLeave = React16.useCallback(() => {
    if (!pendingHref) return;
    suppressedRef.current = true;
    const target = pendingHref;
    setPendingHref(null);
    router.push(target);
  }, [pendingHref, router]);
  const onCancelLeave = React16.useCallback(() => {
    setPendingHref(null);
  }, []);
  return {
    dialog: /* @__PURE__ */ jsxRuntime.jsx(
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
  React16.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  React16.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onStay();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onStay]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "unsaved-changes-title",
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "absolute inset-0 bg-ink/45 backdrop-blur-sm animate-fade-in-soft",
            onClick: onStay,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full max-w-md rounded-xl border border-ink/12 bg-white shadow-paper-lg overflow-hidden animate-stagger-up", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-x-0 top-0 h-px",
              style: {
                background: "linear-gradient(90deg, transparent, rgba(0,142,134,0.55) 35%, rgba(46,49,145,0.55) 65%, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal-50 ring-1 ring-brand-teal-200/70 text-brand-teal-700", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertTriangle, { className: "h-5 w-5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntime.jsxs(
                  "h2",
                  {
                    id: "unsaved-changes-title",
                    className: "font-display font-semibold text-[22px] leading-tight tracking-[-0.018em] text-ink-900",
                    children: [
                      "Leave with ",
                      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "display-em", children: "unsaved" }),
                      " changes?"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-2 text-[14px] text-ink/70 leading-relaxed", children: "You've made edits that haven't been saved. If you navigate away now, those changes will be discarded." })
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onStay,
                  "aria-label": "Close",
                  className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink/55 hover:text-ink hover:bg-ink/5 transition-colors",
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4", "aria-hidden": "true" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mt-6 flex items-center justify-end gap-2.5", children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onLeave,
                  className: "inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-white px-3 py-2 text-[13px] font-medium text-ink/75 hover:text-ink hover:border-ink/30 hover:bg-paper-50 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeftRight, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                    "Discard & leave"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  onClick: onStay,
                  autoFocus: true,
                  className: "btn-primary text-[13px] px-4 py-2",
                  children: "Keep editing"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function FormSubmitRibbon({
  submitLabel,
  /** Override the dirty-detection. Most forms should leave this alone
   *  and let the ribbon track FormData snapshots; pass `true` for
   *  forms whose initial state is intentionally "dirty" (e.g. a
   *  Create flow where the empty form should still show an enabled
   *  submit button). */
  alwaysDirty = false
}) {
  const ref = React16.useRef(null);
  const [dirty, setDirty] = React16.useState(false);
  const [submitting, setSubmitting] = React16.useState(false);
  const pathname = navigation.usePathname();
  const searchParams = navigation.useSearchParams();
  React16.useEffect(() => {
    setSubmitting(false);
    snapshotInitial();
  }, [pathname, searchParams]);
  const initialRef = React16.useRef("");
  function snapshotInitial() {
    const form = ref.current?.closest("form");
    if (!form) return;
    initialRef.current = serializeForm(form);
    setDirty(false);
  }
  React16.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref, "aria-hidden": "true", className: "h-24" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        role: "region",
        "aria-label": "Save changes",
        className: "fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper-100/95 backdrop-blur shadow-paper-lg md:ml-64",
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-4 sm:px-7 lg:px-10", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4 py-3 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[12.5px] font-mono uppercase tracking-[0.18em] text-ink/55", children: submitting ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }),
            "Saving\u2026"
          ] }) : isDirty ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }),
            "Unsaved changes"
          ] }) : /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }),
            "No changes"
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "submit",
              disabled: submitting || !isDirty && !alwaysDirty,
              className: "btn-primary",
              children: submitting ? "Saving\u2026" : submitLabel
            }
          )
        ] }) })
      }
    ),
    guard.dialog
  ] });
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
function ConfirmForm({
  message,
  children,
  className,
  ...formProps
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "form",
    {
      ...formProps,
      className,
      onSubmit: (e) => {
        if (!window.confirm(message)) {
          e.preventDefault();
        }
      },
      children
    }
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
  const [now, setNow] = React16.useState(null);
  React16.useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 text-[10.5px] text-white/40 font-mono tabular-nums", children: "\xA0" });
  }
  const { time, date } = fmt(now);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 text-[10.5px] text-white/55 font-mono tabular-nums", children: [
    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Clock, { className: "h-3 w-3 text-white/40", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-white/80", children: time }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "h-2.5 w-px bg-white/15", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntime.jsx("span", { children: date })
  ] });
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

exports.AVATAR_PALETTE = AVATAR_PALETTE;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogPortal = AlertDialogPortal;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertTitle = AlertTitle;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.BrandedAvatar = BrandedAvatar;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.ConfirmForm = ConfirmForm;
exports.DatePicker = DatePicker;
exports.DetailCard = DetailSection;
exports.DetailGrid = DetailGrid;
exports.DetailRow = DetailRow;
exports.DetailSection = DetailSection;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.EmptyState = EmptyState;
exports.FormActions = FormActions;
exports.FormCard = FormCard;
exports.FormError = FormError;
exports.FormSection = FormSection;
exports.FormSplitBody = FormSplitBody;
exports.FormSubmitRibbon = FormSubmitRibbon;
exports.HiddenFormSelect = HiddenFormSelect;
exports.Input = Input;
exports.KanbanBoard = KanbanBoard;
exports.KpiTile = KpiTile;
exports.Label = Label;
exports.LocalClock = LocalClock;
exports.ManagerHero = ManagerHero;
exports.MobileMenuButton = MobileMenuButton;
exports.OwnerCell = OwnerCell;
exports.PageHeader = PageHeader;
exports.PageHero = PageHero;
exports.Pagination = Pagination;
exports.PillButtons = PillButtons;
exports.PillGroup = PillGroup;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.SegmentedControlLinks = SegmentedControlLinks;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator;
exports.ShellLayout = ShellLayout;
exports.SidebarNav = SidebarNav;
exports.Skeleton = Skeleton;
exports.StatusBadge = StatusBadge;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.TipCard = TipCard;
exports.TipStrip = TipStrip;
exports.ZenStrip = ZenStrip;
exports.activeTone = activeTone;
exports.assetConditionTone = assetConditionTone;
exports.auditActionTone = auditActionTone;
exports.avatarColorClass = avatarColorClass;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.communicationDirectionTone = communicationDirectionTone;
exports.communicationTypeTone = communicationTypeTone;
exports.contractStatusTone = contractStatusTone;
exports.dailyQuote = dailyQuote;
exports.formatAed = formatAed;
exports.formatAedShort = formatAedShort2;
exports.formatCurrencyShort = formatCurrencyShort;
exports.getGreeting = getGreeting;
exports.invoiceStatusTone = invoiceStatusTone;
exports.leadStageTone = leadStageTone;
exports.maintenanceFrequencyTone = maintenanceFrequencyTone;
exports.maintenanceStatusTone = maintenanceStatusTone;
exports.priorityTone = priorityTone;
exports.srStatusTone = srStatusTone;
exports.stakeholderTypeTone = stakeholderTypeTone;
exports.useUnsavedChangesGuard = useUnsavedChangesGuard;
exports.workOrderStatusTone = workOrderStatusTone;
