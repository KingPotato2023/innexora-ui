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
var calendar_exports = {};
__export(calendar_exports, {
  Calendar: () => Calendar
});
module.exports = __toCommonJS(calendar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_day_picker = require("react-day-picker");
var import_lucide_react = require("lucide-react");
var import_select = require("../overlays/select");
var import_utils = require("../lib/utils");
function weekStart(d) {
  const dt = new Date(d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function NavChevron({ orientation }) {
  if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-3.5 w-3.5" });
  if (orientation === "down") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "h-3.5 w-3.5" });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-3.5 w-3.5" });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_select.Select, { value: currentValue, onValueChange: handleChange, disabled: props.disabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_select.SelectTrigger,
      {
        "aria-label": props["aria-label"],
        className: "h-7 min-w-[88px] gap-1 rounded-md border border-ink/12 bg-white px-2 text-[13px] font-semibold text-ink-900 hover:border-ink/25 focus:ring-2 focus:ring-brand-indigo-400/35 focus:border-brand-indigo-500",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.SelectValue, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_select.SelectContent,
      {
        className: "max-h-[260px]",
        position: "popper",
        sideOffset: 4,
        children: props.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_select.SelectItem,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: (0, import_utils.cn)("p-0", className),
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Calendar
});
