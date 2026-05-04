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

import { useCallback, useEffect, useState } from "react";
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
}) {
  const [date, setDate] = useState<Date | undefined>(parseIso(defaultValue));
  const [open, setOpen] = useState(false);

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

  const triggerLabel = !date
    ? placeholder ?? (withTime ? "Pick a date and time" : "Pick a date")
    : withTime
    ? `${formatDateDisplay(date)} · ${formatTimeDisplay(date)}`
    : formatDateDisplay(date);

  const setCalendarDay = (d: Date | undefined) => {
    if (!d) {
      commit(undefined);
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            id={id}
            disabled={disabled}
            className={cn(
              "input flex items-center justify-between gap-2 text-left",
              !date && "text-ink/45",
              disabled && "cursor-not-allowed opacity-60",
            )}
          >
            <span className="truncate">{triggerLabel}</span>
            <span className="flex items-center gap-1 shrink-0 text-ink/45">
              {date && (
                <button
                  type="button"
                  aria-label="Clear"
                  className="rounded p-0.5 hover:bg-ink/[0.06] hover:text-ink/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    commit(undefined);
                  }}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              {withTime ? <Clock className="h-4 w-4" /> : <CalendarDays className="h-4 w-4" />}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setCalendarDay}
            captionLayout="dropdown"
            startMonth={new Date(fromYear ?? new Date().getFullYear() - 10, 0)}
            endMonth={new Date(toYear ?? new Date().getFullYear() + 10, 11)}
            defaultMonth={date ?? new Date()}
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
            <button
              type="button"
              className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 hover:text-brand-teal-700"
              onClick={() => commit(undefined)}
            >
              Clear
            </button>
            <button
              type="button"
              className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-teal-700 hover:text-brand-teal-800"
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
                className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-indigo-700 hover:text-brand-indigo-800"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            )}
          </div>
        </PopoverContent>
      </Popover>
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
