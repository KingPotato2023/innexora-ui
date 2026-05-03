// Two sibling components for rendering a definitive-list picker as colored
// pills instead of a <select>. Use:
//   - PillGroup      — radio-based, for server-action form submissions
//   - PillButtons    — controlled, for React-state filters / client handlers

"use client";

export type PillOption = {
  value: string;
  label: string;
  /** Pre-baked "peer-checked:bg-X peer-checked:text-Y peer-checked:ring-Z" */
  selectedClass: string;
};

const basePillClass =
  "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all " +
  "bg-white text-neutral-500 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700 " +
  "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-brand-indigo-400 " +
  "peer-checked:shadow-sm peer-checked:ring-2 ";

export function PillGroup({
  name,
  options,
  defaultValue,
  disabled,
  required,
  onValueChange,
}: {
  name: string;
  options: readonly PillOption[];
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  onValueChange?: (next: string) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className="flex flex-wrap gap-2 mt-1"
    >
      {options.map((opt, i) => (
        <label
          key={opt.value}
          className={
            "select-none " +
            (disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer")
          }
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            defaultChecked={defaultValue === opt.value}
            disabled={disabled}
            required={required && i === 0}
            onChange={(e) => {
              if (e.currentTarget.checked) onValueChange?.(opt.value);
            }}
            className="peer sr-only"
          />
          <span className={basePillClass + opt.selectedClass}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

const buttonPillBase =
  "relative inline-flex items-center rounded-full px-3 h-7 text-[11.5px] font-medium transition-all cursor-pointer select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-paper-100 focus-visible:ring-brand-teal-500/45 ";

const FILTER_UNSELECTED =
  "bg-white text-ink/65 ring-1 ring-inset ring-ink/12 hover:text-ink hover:ring-ink/25 hover:bg-paper-50";
const FILTER_SELECTED =
  "bg-brand-gradient text-white ring-0 shadow-paper";

const COLOR_SELECTED =
  "bg-brand-indigo-700 text-white ring-2 ring-brand-indigo-700 shadow-sm";
const COLOR_UNSELECTED =
  "bg-white text-neutral-500 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:text-neutral-700";

export function PillButtons<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  variant = "color",
}: {
  options: readonly PillOption[];
  value: T;
  onChange: (next: T) => void;
  ariaLabel?: string;
  variant?: "color" | "filter";
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="flex flex-wrap gap-1.5"
    >
      {options.map((opt) => {
        const selected = opt.value === value;
        const activeClass =
          variant === "filter"
            ? selected ? FILTER_SELECTED : FILTER_UNSELECTED
            : selected ? COLOR_SELECTED : COLOR_UNSELECTED;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(opt.value as T)}
            className={buttonPillBase + activeClass}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
