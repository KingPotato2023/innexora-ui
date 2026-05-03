"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../overlays/select";
import { cn } from "../lib/utils";
function weekStart(d) {
  const dt = new Date(d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function NavChevron({ orientation }) {
  if (orientation === "right") return /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" });
  if (orientation === "down") return /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" });
  return /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" });
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
  return /* @__PURE__ */ jsxs(Select, { value: currentValue, onValueChange: handleChange, disabled: props.disabled, children: [
    /* @__PURE__ */ jsx(
      SelectTrigger,
      {
        "aria-label": props["aria-label"],
        className: "h-7 min-w-[88px] gap-1 rounded-md border border-ink/12 bg-white px-2 text-[13px] font-semibold text-ink-900 hover:border-ink/25 focus:ring-2 focus:ring-brand-indigo-400/35 focus:border-brand-indigo-500",
        children: /* @__PURE__ */ jsx(SelectValue, {})
      }
    ),
    /* @__PURE__ */ jsx(
      SelectContent,
      {
        className: "max-h-[260px]",
        position: "popper",
        sideOffset: 4,
        children: props.options?.map((opt) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
export {
  Calendar
};
