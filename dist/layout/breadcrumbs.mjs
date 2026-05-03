import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
const SEGMENT_BASE = "text-[10.5px] font-mono font-semibold uppercase tracking-[0.18em] transition-colors max-w-[24ch] truncate";
const SEGMENT_LINK = SEGMENT_BASE + " text-ink/55 hover:text-ink-900";
const SEGMENT_CURRENT = SEGMENT_BASE + " text-ink-900";
function Breadcrumbs({ items }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "mb-3", children: /* @__PURE__ */ jsx("ol", { className: "flex items-center gap-1.5 flex-wrap", children: items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const hasHref = Boolean(item.href);
    const labelEl = hasHref && !isLast ? /* @__PURE__ */ jsxs(
      Link,
      {
        href: item.href,
        className: "inline-flex items-center gap-1.5 " + SEGMENT_LINK,
        children: [
          isFirst && /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3 shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: item.label })
        ]
      }
    ) : /* @__PURE__ */ jsxs(
      "span",
      {
        "aria-current": isLast ? "page" : void 0,
        className: "inline-flex items-center gap-1.5 " + (isLast ? SEGMENT_CURRENT : SEGMENT_LINK),
        children: [
          isFirst && /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3 shrink-0 opacity-70", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: item.label })
        ]
      }
    );
    return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5 min-w-0", children: [
      !isFirst && /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 shrink-0 text-ink/30", "aria-hidden": "true" }),
      labelEl
    ] }, i);
  }) }) });
}
export {
  Breadcrumbs
};
