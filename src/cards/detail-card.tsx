// Read-only detail-page section primitives. Sibling to form-card.tsx.
// Three primitives:
//
//   <DetailSection title icon action>{children}</DetailSection>
//     White card plate. Eyebrow header carries the icon + uppercase
//     indigo-700 title; optional `action` floats to the right.
//
//   <DetailGrid>{rows}</DetailGrid>
//     Two-column grid for label/value rows. Collapses to one column on
//     mobile.
//
//   <DetailRow icon label value span>
//     One field. Icon prefixes the label. Use `span={2}` for full-width
//     fields like Notes / Description / Address.

import type { ReactNode } from "react";

export function DetailSection({
  title,
  icon,
  action,
  children,
  className,
}: {
  title: string;
  icon: ReactNode;
  /** Optional right-aligned slot — typically a Button (Add child, Edit, …). */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={"card p-6 " + (className ?? "")}>
      <div
        className={
          action
            ? "flex items-center justify-between gap-4 mb-4"
            : "mb-4"
        }
      >
        <h2 className="eyebrow text-brand-indigo-700 flex items-center gap-1.5">
          <span className="text-brand-indigo-700 inline-flex">{icon}</span>
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export function DetailGrid({
  children,
  cols = 2,
}: {
  children: ReactNode;
  /** 2 (default) or 1 — single-column for narrow surfaces. */
  cols?: 1 | 2;
}) {
  return (
    <dl
      className={
        "grid grid-cols-1 gap-x-8 gap-y-4 text-sm " +
        (cols === 2 ? "sm:grid-cols-2" : "")
      }
    >
      {children}
    </dl>
  );
}

export function DetailRow({
  icon,
  label,
  value,
  span,
}: {
  /** Lucide icon — usually `<Mail className="h-3.5 w-3.5" />` etc. */
  icon: ReactNode;
  label: string;
  value: ReactNode;
  /** Set to 2 to make the row span both columns of a DetailGrid. */
  span?: 1 | 2;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : undefined}>
      <dt className="field-label flex items-center gap-1.5">
        <span className="text-ink/40 inline-flex shrink-0">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-ink/85 leading-relaxed">
        {value ?? <span className="text-ink/40">—</span>}
      </dd>
    </div>
  );
}
