"use client";
import { jsx, jsxs } from "react/jsx-runtime";
const basePillClass = "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all bg-white text-neutral-500 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-brand-indigo-400 peer-checked:shadow-sm peer-checked:ring-2 ";
function PillGroup({
  name,
  options,
  defaultValue,
  disabled,
  required,
  onValueChange
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": name,
      className: "flex flex-wrap gap-2 mt-1",
      children: options.map((opt, i) => /* @__PURE__ */ jsxs(
        "label",
        {
          className: "select-none " + (disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"),
          children: [
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsx("span", { className: basePillClass + opt.selectedClass, children: opt.label })
          ]
        },
        opt.value
      ))
    }
  );
}
const buttonPillBase = "relative inline-flex items-center rounded-full px-3 h-7 text-[11.5px] font-medium transition-all cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-paper-100 focus-visible:ring-brand-teal-500/45 ";
const FILTER_UNSELECTED = "bg-white text-ink/65 ring-1 ring-inset ring-ink/12 hover:text-ink hover:ring-ink/25 hover:bg-paper-50";
const FILTER_SELECTED = "bg-brand-gradient text-white ring-0 shadow-paper";
const COLOR_SELECTED = "bg-brand-indigo-700 text-white ring-2 ring-brand-indigo-700 shadow-sm";
const COLOR_UNSELECTED = "bg-white text-neutral-500 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700";
function PillButtons({
  options,
  value,
  onChange,
  ariaLabel,
  variant = "color"
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": ariaLabel,
      className: "flex flex-wrap gap-1.5",
      children: options.map((opt) => {
        const selected = opt.value === value;
        const activeClass = variant === "filter" ? selected ? FILTER_SELECTED : FILTER_UNSELECTED : selected ? COLOR_SELECTED : COLOR_UNSELECTED;
        return /* @__PURE__ */ jsx(
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
export {
  PillButtons,
  PillGroup
};
