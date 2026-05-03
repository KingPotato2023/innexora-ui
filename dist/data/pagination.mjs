import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end px-4 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/55 border-t border-ink/10 tabular-nums", children: [
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
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap px-4 py-3 border-t border-ink/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/65 tabular-nums", children: [
      "Showing ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900", children: from }),
      "\u2013",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900", children: to }),
      " of",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900", children: totalCount })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: hasPrev ? prevHref : "#",
          "aria-disabled": !hasPrev,
          "aria-label": "Previous page",
          className: `${baseBtn} ${hasPrev ? "" : disabled}`,
          tabIndex: hasPrev ? 0 : -1,
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" }),
            "Prev"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "px-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 tabular-nums", children: [
        "Page ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900", children: currentPage }),
        " of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-900", children: totalPages })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: hasNext ? nextHref : "#",
          "aria-disabled": !hasNext,
          "aria-label": "Next page",
          className: `${baseBtn} ${hasNext ? "" : disabled}`,
          tabIndex: hasNext ? 0 : -1,
          children: [
            "Next",
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
export {
  Pagination
};
