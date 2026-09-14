// Bridge between react-day-picker (which manages a Date in state) and
// HTML server-action forms (which read string values from the DOM at
// submit time). Renders a styled trigger button + a popover holding the
// branded Calendar. The hidden <input name=…> carries an ISO string so
// server actions can `formData.get(name)` and feed it to `new Date()`
// without client-side wiring.
//
//   withTime=false (default) → emits "yyyy-mm-dd"          (replaces <input type="date">)
//   withTime=true            → emits "yyyy-mm-ddThh:mm"    (replaces <input type="datetime-local">)

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarDays, Clock, X } from "lucide-react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../overlays/popover";
import { cn } from "../lib/utils";

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function toIsoDate(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function toIsoDateTime(d: Date): string {
  return `${toIsoDate(d)}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

function parseIso(s: string | undefined | null): Date | undefined {
  if (!s) return undefined;
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2}))?/);
  if (!m) return undefined;
  const d = new Date(
    Number(m[1]),
    Number(m[2]) - 1,
    Number(m[3]),
    m[4] ? Number(m[4]) : 0,
    m[5] ? Number(m[5]) : 0,
  );
  if (Number.isNaN(d.getTime())) return undefined;
  return d;
}

function formatDateDisplay(d: Date): string {
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function formatTimeDisplay(d: Date): string {
  return d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

// Server and browser carry different locale data (Node rendered "1 Sep 2026",
// Chrome en-GB "1 Sept 2026"), so a pre-filled picker failed hydration. The
// first render uses this fixed format; the viewer's locale takes over on mount.
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDateStable(d: Date): string {
  return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}

function formatTimeStable(d: Date): string {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

// Popover footer actions. At least 44px tall on a touch screen.
const FOOTER_BTN =
  "-mx-2 rounded-md px-2 py-1.5 text-[11.5px] font-mono uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500/35 [@media(pointer:coarse)]:min-h-[44px]";

export function DatePicker({
  name,
  defaultValue,
  required,
  placeholder,
  className,
  id,
  disabled,
  fromYear,
  toYear,
  withTime = false,
  onChange,
  min,
  max,
  triggerClassName,
  ariaLabel,
  formatLabel,
}: {
  name: string;
  /** ISO string. Date-only mode: "yyyy-mm-dd". DateTime mode: "yyyy-mm-ddThh:mm". */
  defaultValue?: string | null;
  required?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  fromYear?: number;
  toYear?: number;
  withTime?: boolean;
  /**
   * Optional notification channel — fires with the formatted ISO string
   * (or "" when cleared) on every value change. The picker still owns
   * its own state and writes the hidden <input>; consumers (e.g. RHF
   * `<Controller>`) pass `onChange` only to mirror the value into their
   * own state for dirty / validation tracking.
   */
  onChange?: (value: string) => void;
  /** Earliest selectable day, "yyyy-mm-dd". Earlier days are struck out. */
  min?: string;
  /** Latest selectable day, "yyyy-mm-dd". */
  max?: string;
  /** Classes for the trigger button itself (height, text size). `className` styles the wrapper. */
  triggerClassName?: string;
  /** The field's name for assistive tech; the trigger is announced as "<ariaLabel>: <value>". */
  ariaLabel?: string;
  /**
   * Formats the trigger label. Pass one that prints the same text on server and
   * browser (e.g. built from date parts) to match the rest of an app; without it
   * the label is "d Mon yyyy" until mount, then the viewer's locale.
   */
  formatLabel?: (date: Date) => string;
}) {
  const [date, setDate] = useState<Date | undefined>(parseIso(defaultValue));
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setDate(parseIso(defaultValue));
  }, [defaultValue]);

  const value = !date
    ? ""
    : withTime
    ? toIsoDateTime(date)
    : toIsoDate(date);

  // Wrap setDate so every state-changing path also notifies a parent
  // listener (when one is supplied). Memoised so identity-stable
  // callbacks downstream don't churn.
  const commit = useCallback(
    (next: Date | undefined) => {
      setDate(next);
      if (onChange) {
        const v = !next
          ? ""
          : withTime
          ? toIsoDateTime(next)
          : toIsoDate(next);
        onChange(v);
      }
    },
    [onChange, withTime],
  );

  const fmtDate = mounted ? formatDateDisplay : formatDateStable;
  const fmtTime = mounted ? formatTimeDisplay : formatTimeStable;
  const triggerLabel = !date
    ? placeholder ?? (withTime ? "Pick a date and time" : "Pick a date")
    : formatLabel
    ? formatLabel(date)
    : withTime
    ? `${fmtDate(date)} · ${fmtTime(date)}`
    : fmtDate(date);

  // A required field offers no way back to empty; a disabled one offers nothing.
  const clearable = !!date && !disabled && !required;

  const minDay = parseIso(min);
  const maxDay = parseIso(max);
  const disabledDays = [
    ...(minDay ? [{ before: minDay }] : []),
    ...(maxDay ? [{ after: maxDay }] : []),
  ];

  const clear = () => {
    commit(undefined);
    // the clear button unmounts with the value: keep focus in the field
    triggerRef.current?.focus();
  };

  const setCalendarDay = (d: Date | undefined) => {
    if (!d) {
      // react-day-picker reports a tap on the selected day as a deselect. That
      // tap means "this one", not "clear": clearing has its own buttons.
      if (!withTime) setOpen(false);
      return;
    }
    if (withTime) {
      const base = date ?? new Date();
      const next = new Date(d);
      next.setHours(base.getHours(), base.getMinutes(), 0, 0);
      commit(next);
    } else {
      const next = new Date(d);
      next.setHours(0, 0, 0, 0);
      commit(next);
      setOpen(false);
    }
  };

  const setHour = (h: number) => {
    const base = date ?? (() => { const n = new Date(); n.setSeconds(0, 0); return n; })();
    const next = new Date(base);
    next.setHours(Math.max(0, Math.min(23, h)));
    commit(next);
  };
  const setMinute = (m: number) => {
    const base = date ?? (() => { const n = new Date(); n.setSeconds(0, 0); return n; })();
    const next = new Date(base);
    next.setMinutes(Math.max(0, Math.min(59, m)));
    commit(next);
  };

  return (
    <div className={cn("relative", className)}>
      {/* The trigger and its clear button share this box, so padding a consumer
          puts on the wrapper cannot move the button off its spot. */}
      <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={triggerRef}
            type="button"
            id={id}
            disabled={disabled}
            aria-label={ariaLabel ? `${ariaLabel}: ${triggerLabel}` : undefined}
            className={cn(
              "input flex items-center justify-between gap-2 text-left",
              !date && "text-ink/45",
              disabled && "cursor-not-allowed opacity-60",
              triggerClassName,
            )}
          >
            {/* dir="auto": a Latin date inside a right-to-left page kept its
                words but lost their order ("Sept 2026 14") */}
            <span dir="auto" className="min-w-0 truncate">{triggerLabel}</span>
            <span aria-hidden="true" className="flex shrink-0 items-center text-ink/45">
              {/* With a value, the clear button stands here OVER the trigger: a
                  <button> inside the trigger <button> is invalid HTML, and the
                  parser split it apart and broke hydration. The spacer keeps the
                  label clear of it (12px padding + 32px = the button's 44px). */}
              {clearable ? (
                <span className="block h-4 w-8" />
              ) : withTime ? (
                <Clock className="h-4 w-4" />
              ) : (
                <CalendarDays className="h-4 w-4" />
              )}
            </span>
          </button>
        </PopoverTrigger>
        {/* collisionPadding: a calendar near the screen edge stops 12px short of it */}
        <PopoverContent align="start" collisionPadding={12} className="p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setCalendarDay}
            captionLayout="dropdown"
            startMonth={new Date(fromYear ?? new Date().getFullYear() - 10, 0)}
            endMonth={new Date(toYear ?? new Date().getFullYear() + 10, 11)}
            defaultMonth={date ?? maxDay ?? new Date()}
            disabled={disabledDays.length ? disabledDays : undefined}
          />

          {withTime && (
            <div className="mt-3 flex items-center justify-center gap-2 border-t border-ink/10 pt-3">
              <Clock className="h-3.5 w-3.5 text-ink/45" />
              <span className="text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1">
                Time
              </span>
              <TimeSpinner
                value={date?.getHours() ?? 0}
                max={23}
                onChange={setHour}
                ariaLabel="Hours"
              />
              <span className="text-ink/55 font-mono">:</span>
              <TimeSpinner
                value={date?.getMinutes() ?? 0}
                max={59}
                onChange={setMinute}
                ariaLabel="Minutes"
              />
            </div>
          )}

          <div className="mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3">
            {!required ? (
              <button
                type="button"
                className={FOOTER_BTN + " text-ink/65 hover:text-brand-teal-700"}
                onClick={() => {
                  commit(undefined);
                  if (!withTime) setOpen(false);
                }}
              >
                Clear
              </button>
            ) : (
              <span />
            )}
            <button
              type="button"
              className={FOOTER_BTN + " text-brand-teal-700 hover:text-brand-teal-800"}
              onClick={() => {
                const t = new Date();
                if (!withTime) t.setHours(0, 0, 0, 0);
                else t.setSeconds(0, 0);
                commit(t);
                if (!withTime) setOpen(false);
              }}
            >
              {withTime ? "Now" : "Today"}
            </button>
            {withTime && (
              <button
                type="button"
                className={FOOTER_BTN + " text-brand-indigo-700 hover:text-brand-indigo-800"}
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            )}
          </div>
        </PopoverContent>
      </Popover>
      {clearable && (
        <button
          type="button"
          aria-label={ariaLabel ? `Clear ${ariaLabel}` : "Clear date"}
          // A 44px-wide, full-height target at the trigger's inline end, so a tap
          // anywhere on the right of the field clears instead of opening the
          // calendar; inset-inline-end keeps it there in right-to-left pages.
          className="group absolute inset-y-0 end-0 flex w-11 items-center justify-center rounded-e-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal-500/35"
          onClick={clear}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md text-ink/60 transition-colors group-hover:bg-ink/[0.06] group-hover:text-ink-900">
            <X className="h-4 w-4" />
          </span>
        </button>
      )}
      </div>
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />
    </div>
  );
}

function TimeSpinner({
  value,
  max,
  onChange,
  ariaLabel,
}: {
  value: number;
  max: number;
  onChange: (n: number) => void;
  ariaLabel: string;
}) {
  const [draft, setDraft] = useState(pad2(value));
  useEffect(() => setDraft(pad2(value)), [value]);

  const commit = (raw: string) => {
    const n = Number(raw.replace(/\D/g, ""));
    if (Number.isFinite(n)) {
      const clamped = Math.max(0, Math.min(max, n));
      onChange(clamped);
      setDraft(pad2(clamped));
    } else {
      setDraft(pad2(value));
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      maxLength={2}
      aria-label={ariaLabel}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={(e) => commit(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit((e.target as HTMLInputElement).value);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          onChange(Math.min(max, value + 1));
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.max(0, value - 1));
        }
      }}
      onFocus={(e) => e.currentTarget.select()}
      className="w-11 h-8 rounded-md border border-ink/15 bg-white text-center font-mono tabular-nums text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo-400 focus:border-brand-indigo-400 transition-colors"
    />
  );
}
