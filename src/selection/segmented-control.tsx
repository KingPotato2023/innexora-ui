// Shared segmented-control used for periodicity, view-mode toggles, etc.
// Two flavors: link-based (for SSR-driven state in URL) and button-based
// (for client-state filters). Visually identical so the app feels coherent.

import Link from "next/link";

type Option<T extends string> = {
  value: T;
  label: string;
};

const wrapperClass =
  "inline-flex items-center gap-0.5 rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm";
const segmentBase =
  "px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400";
const segmentActive =
  "bg-gradient-to-br from-brand-teal-500 to-brand-indigo-700 text-white shadow-sm";
const segmentInactive = "text-neutral-600 hover:text-brand-indigo-700";

export function SegmentedControlLinks<T extends string>({
  options,
  value,
  hrefFor,
  ariaLabel,
}: {
  options: readonly Option<T>[];
  value: T;
  hrefFor: (value: T) => string;
  ariaLabel?: string;
}) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={wrapperClass}>
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <Link
            key={opt.value}
            href={hrefFor(opt.value)}
            role="tab"
            aria-selected={selected}
            className={[
              segmentBase,
              selected ? segmentActive : segmentInactive,
            ].join(" ")}
          >
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
}
