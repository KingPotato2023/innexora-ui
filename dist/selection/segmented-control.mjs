import { jsx } from "react/jsx-runtime";
import Link from "next/link";
const wrapperClass = "inline-flex items-center gap-0.5 rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm";
const segmentBase = "px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400";
const segmentActive = "bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-sm";
const segmentInactive = "text-neutral-600 hover:text-brand-indigo-700";
function SegmentedControlLinks({
  options,
  value,
  hrefFor,
  ariaLabel
}) {
  return /* @__PURE__ */ jsx("div", { role: "tablist", "aria-label": ariaLabel, className: wrapperClass, children: options.map((opt) => {
    const selected = opt.value === value;
    return /* @__PURE__ */ jsx(
      Link,
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
export {
  SegmentedControlLinks
};
