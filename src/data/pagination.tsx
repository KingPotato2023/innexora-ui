// Server-rendered pagination control. Renders a "Showing X–Y of Z"
// counter on the left and Prev / Next links on the right. Pure
// server component — no JS shipped to the browser, navigation is
// just `<Link>` clicks that re-fetch the page.

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  /** 1-based page number currently being shown. */
  currentPage: number;
  /** Total page count (computed: ceil(totalCount / pageSize)). */
  totalPages: number;
  /** Total row count across all pages — shown in the "X of Z" counter. */
  totalCount: number;
  /** Items per page — used for the "showing X–Y" range label. */
  pageSize: number;
  /** Path the page lives at, e.g. "/audit-log". Query string appended. */
  baseHref: string;
  /**
   * Other query params currently in effect (filters, search, etc.).
   * They're preserved across page-link clicks so navigating doesn't
   * drop the user's filter state.
   */
  searchParams?: Record<string, string | undefined>;
}

function buildHref(
  baseHref: string,
  page: number,
  searchParams?: Record<string, string | undefined>,
): string {
  const params = new URLSearchParams();
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      if (v !== undefined && k !== "page") params.set(k, v);
    }
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${baseHref}?${qs}` : baseHref;
}

export function Pagination({
  currentPage,
  totalPages,
  totalCount,
  pageSize,
  baseHref,
  searchParams,
}: PaginationProps) {
  if (totalPages <= 1) {
    return (
      <div className="flex items-center justify-end px-4 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/55 border-t border-ink/10 tabular-nums">
        {totalCount} {totalCount === 1 ? "row" : "rows"}
      </div>
    );
  }

  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalCount);
  const prevHref = buildHref(baseHref, currentPage - 1, searchParams);
  const nextHref = buildHref(baseHref, currentPage + 1, searchParams);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const baseBtn =
    "inline-flex items-center gap-1 rounded-md border border-ink/10 bg-white px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/80 transition-colors hover:bg-paper-100 hover:text-brand-teal-700 hover:border-ink/20";
  const disabled = "opacity-40 pointer-events-none cursor-not-allowed";

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap px-4 py-3 border-t border-ink/10">
      <div className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/65 tabular-nums">
        Showing <span className="font-medium text-ink-900">{from}</span>–
        <span className="font-medium text-ink-900">{to}</span> of{" "}
        <span className="font-medium text-ink-900">{totalCount}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Link
          href={hasPrev ? prevHref : "#"}
          aria-disabled={!hasPrev}
          aria-label="Previous page"
          className={`${baseBtn} ${hasPrev ? "" : disabled}`}
          tabIndex={hasPrev ? 0 : -1}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Prev
        </Link>
        <span className="px-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 tabular-nums">
          Page <span className="font-medium text-ink-900">{currentPage}</span> of{" "}
          <span className="font-medium text-ink-900">{totalPages}</span>
        </span>
        <Link
          href={hasNext ? nextHref : "#"}
          aria-disabled={!hasNext}
          aria-label="Next page"
          className={`${baseBtn} ${hasNext ? "" : disabled}`}
          tabIndex={hasNext ? 0 : -1}
        >
          Next
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
