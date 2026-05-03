import type { ReactNode } from "react";

// Page chrome —
//
// Page titles use Bricolage Grotesque (display sans) at heavy weight,
// tracked tight. <em> tags inside titles render in a teal→indigo brand
// gradient (defined globally as `.page-title em` / `.display-em`),
// giving emphasis a brand-tinted colour shift rather than typographic
// italicisation. Optional `kicker` renders as a small uppercase
// eyebrow above the title.
//
// PageHero adds a visual icon stamp on the left for secondary pages
// where you want a recognisable category mark — flattened into a
// paper square ringed in ink with a brand-gradient inner keyline.

export function PageHero({
  icon,
  title,
  description,
  meta,
  actions,
  kicker,
}: {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  /** Optional eyebrow above the title, e.g. "Sales · Master Tracker". */
  kicker?: ReactNode;
}) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.5) 35%, rgba(46,49,145,0.5) 65%, transparent 100%)",
        }}
      />
      <div className="flex items-start gap-5 flex-wrap pt-4 pb-5">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-paper-200 text-ink-900 ring-1 ring-ink/10 shadow-paper">
          <span className="text-ink/80">{icon}</span>
        </span>
        <div className="flex-1 min-w-0">
          {kicker && <div className="eyebrow mb-2 text-brand-indigo-700">{kicker}</div>}
          <h1 className="page-title">{title}</h1>
          {meta && (
            <div className="mt-3 flex flex-wrap items-center gap-2">{meta}</div>
          )}
          {description && (
            <p className="mt-3 text-[14.5px] text-ink/65 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2 flex-wrap pt-1">{actions}</div>
        )}
      </div>
      <div className="rule-fade" />
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
  kicker,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  /** Optional eyebrow above the title. */
  kicker?: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-4 pb-5">
        <div className="min-w-0">
          {kicker && <div className="eyebrow mb-2">{kicker}</div>}
          <h1 className="page-title">{title}</h1>
          {description && (
            <p className="mt-2 text-[14px] text-ink/65 max-w-2xl">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2 flex-wrap">{actions}</div>
        )}
      </div>
      <div className="rule-fade" />
    </div>
  );
}
