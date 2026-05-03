// Multi-level navigation chain.
//
// Editorial breadcrumb primitive used at the top of every detail and
// edit page. Three rules:
//
//   1. The FIRST item carries the ArrowLeft icon — the user's primary
//      "get me out of here" affordance. It always points at the parent
//      list (e.g. "Properties").
//   2. EVERY intermediate item is its own clickable link, so the user
//      can jump up the chain by any number of levels in one click.
//   3. The LAST item is the current page. It renders as ink-900
//      semibold text with no link (aria-current="page").

import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  /** Omit to render the item as the current page (no link). */
  href?: string;
};

const SEGMENT_BASE =
  "text-[10.5px] font-mono font-semibold uppercase tracking-[0.18em] " +
  "transition-colors max-w-[24ch] truncate";

const SEGMENT_LINK =
  SEGMENT_BASE + " text-ink/55 hover:text-ink-900";
const SEGMENT_CURRENT =
  SEGMENT_BASE + " text-ink-900";

export function Breadcrumbs({ items }: { items: ReadonlyArray<BreadcrumbItem> }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => {
          const isFirst = i === 0;
          const isLast = i === items.length - 1;
          const hasHref = Boolean(item.href);
          const labelEl = hasHref && !isLast ? (
            <Link
              href={item.href!}
              className={"inline-flex items-center gap-1.5 " + SEGMENT_LINK}
            >
              {isFirst && <ArrowLeft className="h-3 w-3 shrink-0" aria-hidden="true" />}
              <span className="truncate">{item.label}</span>
            </Link>
          ) : (
            <span
              aria-current={isLast ? "page" : undefined}
              className={"inline-flex items-center gap-1.5 " + (isLast ? SEGMENT_CURRENT : SEGMENT_LINK)}
            >
              {isFirst && <ArrowLeft className="h-3 w-3 shrink-0 opacity-70" aria-hidden="true" />}
              <span className="truncate">{item.label}</span>
            </span>
          );

          return (
            <li key={i} className="flex items-center gap-1.5 min-w-0">
              {!isFirst && (
                <ChevronRight className="h-3 w-3 shrink-0 text-ink/30" aria-hidden="true" />
              )}
              {labelEl}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
