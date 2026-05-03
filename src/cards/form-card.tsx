// Editorial form scaffold — the white-card pattern used by every "New X"
// and "Edit X" page. Five primitives:
//
//   - <FormCard>      The outer .card p-6 plate the whole form lives on.
//   - <FormSplitBody> Two-column body with a 1px vertical divider between
//                     left (structured fields) and right (notes column).
//                     Stacks on mobile.
//   - <FormSection>   A bordered eyebrow header (icon + uppercase indigo
//                     title + hairline underline) followed by its fields.
//   - <FormActions>   The submit/delete row at the bottom with a hairline
//                     top border and ml-auto / mr-auto positioning.
//   - <FormError>     Inline red banner. Renders nothing when children empty.

import type { ReactNode } from "react";

export function FormCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`card p-6 space-y-6 ${className ?? ""}`}>{children}</div>
  );
}

export function FormSplitBody({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8 gap-y-6 items-start">
      <div className="space-y-8">{left}</div>
      <div
        className="hidden lg:block w-px bg-ink/10 self-stretch my-6"
        aria-hidden
      />
      <div className="space-y-8">{right}</div>
    </div>
  );
}

export function FormSection({
  title,
  icon,
  children,
}: {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-brand-indigo-700 uppercase tracking-[0.08em] mb-4 pb-2 border-b border-ink/10">
        {icon && <span className="text-brand-indigo-700">{icon}</span>}
        {title}
      </h3>
      {children}
    </section>
  );
}

export function FormActions({
  primary,
  destructive,
}: {
  /** The Save / Submit button — gets pushed to the right via ml-auto. */
  primary: ReactNode;
  /** Optional Delete (or other destructive) button — sits on the left. */
  destructive?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 pt-4 border-t border-ink/10">
      {destructive && <div className="mr-auto">{destructive}</div>}
      <div className="ml-auto">{primary}</div>
    </div>
  );
}

export function FormError({ children }: { children: ReactNode }) {
  if (!children) return null;
  return (
    <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
      {children}
    </div>
  );
}
