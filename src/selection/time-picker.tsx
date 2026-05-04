// Time-only counterpart to <DatePicker>. Renders an `.input`-class trigger
// button + a popover with two TimeSpinner inputs (hours / minutes). Writes
// a hidden <input> with a "HH:MM" 24-hour string so server-action forms
// can `formData.get(name)` and parse it directly. Same shape as the
// time-spinner panel inside <DatePicker withTime />, but standalone — for
// surfaces where date and time live in separate columns (e.g. PM's
// `plannedDate` + `plannedTime` pair).

"use client";

import { useCallback, useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../overlays/popover";
import { cn } from "../lib/utils";

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function parseHHMM(s: string | null | undefined): { h: number; m: number } | null {
  if (!s) return null;
  const m = s.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const h = Number(m[1]);
  const mm = Number(m[2]);
  if (!Number.isFinite(h) || !Number.isFinite(mm)) return null;
  if (h < 0 || h > 23 || mm < 0 || mm > 59) return null;
  return { h, m: mm };
}

export function TimePicker({
  name,
  defaultValue,
  required,
  placeholder,
  className,
  id,
  disabled,
  onChange,
}: {
  name: string;
  /** "HH:MM" 24-hour string, or empty / null. */
  defaultValue?: string | null;
  required?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  /** Optional notification channel — fires with "HH:MM" (or "" when cleared). */
  onChange?: (value: string) => void;
}) {
  const initial = parseHHMM(defaultValue);
  const [hour, setHour] = useState<number | null>(initial ? initial.h : null);
  const [minute, setMinute] = useState<number | null>(initial ? initial.m : null);
  const [open, setOpen] = useState(false);

  // Sync controlled-ish defaultValue changes (e.g. RHF reset).
  useEffect(() => {
    const next = parseHHMM(defaultValue);
    setHour(next ? next.h : null);
    setMinute(next ? next.m : null);
  }, [defaultValue]);

  const value =
    hour !== null && minute !== null ? `${pad2(hour)}:${pad2(minute)}` : "";
  const triggerLabel = value || placeholder || "Pick a time";

  const commit = useCallback(
    (h: number | null, m: number | null) => {
      setHour(h);
      setMinute(m);
      if (onChange) {
        onChange(h !== null && m !== null ? `${pad2(h)}:${pad2(m)}` : "");
      }
    },
    [onChange],
  );

  const setH = (h: number) => {
    const clamped = Math.max(0, Math.min(23, h));
    commit(clamped, minute ?? 0);
  };
  const setM = (m: number) => {
    const clamped = Math.max(0, Math.min(59, m));
    commit(hour ?? 0, clamped);
  };

  return (
    <div className={cn("relative", className)}>
      <Popover open={disabled ? false : open} onOpenChange={disabled ? undefined : setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            id={id}
            disabled={disabled}
            className={cn(
              "input flex items-center justify-between gap-2 text-left",
              !value && "text-ink/45",
              disabled && "cursor-not-allowed opacity-60",
            )}
          >
            <span className="truncate">{triggerLabel}</span>
            <Clock className="h-4 w-4 text-ink/45 shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3 w-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-3.5 w-3.5 text-ink/45" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1">
              Time
            </span>
            <TimeSpinner
              value={hour ?? 0}
              max={23}
              onChange={setH}
              ariaLabel="Hours"
            />
            <span className="text-ink/55 font-mono">:</span>
            <TimeSpinner
              value={minute ?? 0}
              max={59}
              onChange={setM}
              ariaLabel="Minutes"
            />
          </div>
          <div className="mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3">
            <button
              type="button"
              className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 hover:text-brand-teal-700"
              onClick={() => commit(null, null)}
            >
              Clear
            </button>
            <button
              type="button"
              className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-teal-700 hover:text-brand-teal-800"
              onClick={() => {
                const now = new Date();
                commit(now.getHours(), now.getMinutes());
              }}
            >
              Now
            </button>
            <button
              type="button"
              className="text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-indigo-700 hover:text-brand-indigo-800"
              onClick={() => setOpen(false)}
            >
              Done
            </button>
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
