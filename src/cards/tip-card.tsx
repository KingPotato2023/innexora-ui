// Small contextual aside card — explains "what this page is for" or
// surfaces non-obvious affordances. The signature treatment:
//   – Paper-100 background (slightly warmer than card-default white).
//   – Brand-teal info icon + brand-indigo eyebrow at the top.
//   – Optional secondary paragraph separated by a hairline rule.
//   – Sticky-positioning is opt-in via the `sticky` prop.

import type { ReactNode } from "react";
import { Info } from "lucide-react";

export function TipCard({
  title,
  children,
  footer,
  sticky = false,
  icon,
  className,
}: {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  sticky?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={[
        sticky ? "lg:sticky lg:top-7 lg:h-fit" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="card p-5 space-y-3 bg-paper-100">
        <div className="flex items-center gap-2 text-ink-900">
          <span className="text-brand-teal-700 shrink-0">
            {icon ?? <Info className="h-4 w-4" aria-hidden="true" />}
          </span>
          <span className="eyebrow text-brand-indigo-700">{title}</span>
        </div>
        <p className="text-[13px] leading-relaxed text-ink/70">{children}</p>
        {footer && (
          <>
            <div className="border-t border-ink/10" />
            <p className="text-[12px] leading-relaxed text-ink/55">{footer}</p>
          </>
        )}
      </div>
    </aside>
  );
}

// Horizontal variant — same content language as TipCard, laid out as a
// single row instead of a vertical aside.
export function TipStrip({
  title,
  children,
  icon,
  className,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-lg border border-ink/10 bg-paper-100 px-4 py-3 flex items-start gap-3 " +
        (className ?? "")
      }
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-teal-700 ring-1 ring-ink/10 shrink-0 mt-0.5">
        {icon ?? <Info className="h-3.5 w-3.5" aria-hidden="true" />}
      </span>
      <div className="min-w-0 flex-1">
        <span className="eyebrow text-brand-indigo-700">{title}</span>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink/70">
          {children}
        </p>
      </div>
    </div>
  );
}
