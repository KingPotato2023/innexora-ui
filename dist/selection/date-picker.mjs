"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarDays, Clock, X } from "lucide-react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../overlays/popover";
import { cn } from "../lib/utils";
function pad2(n) {
  return String(n).padStart(2, "0");
}
function toIsoDate(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}
function toIsoDateTime(d) {
  return `${toIsoDate(d)}T${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
function parseIso(s) {
  if (!s) return void 0;
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2}))?/);
  if (!m) return void 0;
  const d = new Date(
    Number(m[1]),
    Number(m[2]) - 1,
    Number(m[3]),
    m[4] ? Number(m[4]) : 0,
    m[5] ? Number(m[5]) : 0
  );
  if (Number.isNaN(d.getTime())) return void 0;
  return d;
}
function formatDateDisplay(d) {
  return d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function formatTimeDisplay(d) {
  return d.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
}
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function formatDateStable(d) {
  return `${d.getDate()} ${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}
function formatTimeStable(d) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
const FOOTER_BTN = "-mx-2 rounded-md px-2 py-1.5 text-[11.5px] font-mono uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500/35 [@media(pointer:coarse)]:min-h-[44px]";
function DatePicker({
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
  formatLabel
}) {
  const [date, setDate] = useState(parseIso(defaultValue));
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setDate(parseIso(defaultValue));
  }, [defaultValue]);
  const value = !date ? "" : withTime ? toIsoDateTime(date) : toIsoDate(date);
  const commit = useCallback(
    (next) => {
      setDate(next);
      if (onChange) {
        const v = !next ? "" : withTime ? toIsoDateTime(next) : toIsoDate(next);
        onChange(v);
      }
    },
    [onChange, withTime]
  );
  const fmtDate = mounted ? formatDateDisplay : formatDateStable;
  const fmtTime = mounted ? formatTimeDisplay : formatTimeStable;
  const triggerLabel = !date ? placeholder ?? (withTime ? "Pick a date and time" : "Pick a date") : formatLabel ? formatLabel(date) : withTime ? `${fmtDate(date)} \xB7 ${fmtTime(date)}` : fmtDate(date);
  const clearable = !!date && !disabled && !required;
  const minDay = parseIso(min);
  const maxDay = parseIso(max);
  const disabledDays = [
    ...minDay ? [{ before: minDay }] : [],
    ...maxDay ? [{ after: maxDay }] : []
  ];
  const dayKey = (d) => d.getFullYear() * 1e4 + (d.getMonth() + 1) * 100 + d.getDate();
  const todayKey = dayKey(/* @__PURE__ */ new Date());
  const todayInRange = (!minDay || todayKey >= dayKey(minDay)) && (!maxDay || todayKey <= dayKey(maxDay));
  const clear = () => {
    commit(void 0);
    triggerRef.current?.focus();
  };
  const setCalendarDay = (d) => {
    if (!d) {
      if (!withTime) setOpen(false);
      return;
    }
    if (withTime) {
      const base = date ?? /* @__PURE__ */ new Date();
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
  const setHour = (h) => {
    const base = date ?? (() => {
      const n = /* @__PURE__ */ new Date();
      n.setSeconds(0, 0);
      return n;
    })();
    const next = new Date(base);
    next.setHours(Math.max(0, Math.min(23, h)));
    commit(next);
  };
  const setMinute = (m) => {
    const base = date ?? (() => {
      const n = /* @__PURE__ */ new Date();
      n.setSeconds(0, 0);
      return n;
    })();
    const next = new Date(base);
    next.setMinutes(Math.max(0, Math.min(59, m)));
    commit(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
          "button",
          {
            ref: triggerRef,
            type: "button",
            id,
            disabled,
            "aria-label": ariaLabel ? `${ariaLabel}: ${triggerLabel}` : void 0,
            className: cn(
              "input flex items-center justify-between gap-2 text-left",
              !date && "text-ink/45",
              disabled && "cursor-not-allowed opacity-60",
              triggerClassName
            ),
            children: [
              /* @__PURE__ */ jsx("span", { dir: "auto", className: "min-w-0 truncate", children: triggerLabel }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "flex shrink-0 items-center text-ink/45", children: clearable ? /* @__PURE__ */ jsx("span", { className: "block h-4 w-8" }) : withTime ? /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(CalendarDays, { className: "h-4 w-4" }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(PopoverContent, { align: "start", collisionPadding: 12, className: "p-3", children: [
          /* @__PURE__ */ jsx(
            Calendar,
            {
              mode: "single",
              selected: date,
              onSelect: setCalendarDay,
              captionLayout: "dropdown",
              startMonth: new Date(fromYear ?? (/* @__PURE__ */ new Date()).getFullYear() - 10, 0),
              endMonth: new Date(toYear ?? (/* @__PURE__ */ new Date()).getFullYear() + 10, 11),
              defaultMonth: date ?? maxDay ?? /* @__PURE__ */ new Date(),
              disabled: disabledDays.length ? disabledDays : void 0
            }
          ),
          withTime && /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-center gap-2 border-t border-ink/10 pt-3", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-ink/45" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1", children: "Time" }),
            /* @__PURE__ */ jsx(
              TimeSpinner,
              {
                value: date?.getHours() ?? 0,
                max: 23,
                onChange: setHour,
                ariaLabel: "Hours"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-ink/55 font-mono", children: ":" }),
            /* @__PURE__ */ jsx(
              TimeSpinner,
              {
                value: date?.getMinutes() ?? 0,
                max: 59,
                onChange: setMinute,
                ariaLabel: "Minutes"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3", children: [
            !required ? /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: FOOTER_BTN + " text-ink/65 hover:text-brand-teal-700",
                onClick: () => {
                  commit(void 0);
                  if (!withTime) setOpen(false);
                },
                children: "Clear"
              }
            ) : /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                disabled: !todayInRange,
                className: FOOTER_BTN + " text-brand-teal-700 hover:text-brand-teal-800 disabled:cursor-not-allowed disabled:text-ink/35",
                onClick: () => {
                  const t = /* @__PURE__ */ new Date();
                  if (!withTime) t.setHours(0, 0, 0, 0);
                  else t.setSeconds(0, 0);
                  commit(t);
                  if (!withTime) setOpen(false);
                },
                children: withTime ? "Now" : "Today"
              }
            ),
            withTime && /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: FOOTER_BTN + " text-brand-indigo-700 hover:text-brand-indigo-800",
                onClick: () => setOpen(false),
                children: "Done"
              }
            )
          ] })
        ] })
      ] }),
      clearable && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": ariaLabel ? `Clear ${ariaLabel}` : "Clear date",
          className: "group absolute inset-y-0 end-0 flex w-11 items-center justify-center rounded-e-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal-500/35",
          onClick: clear,
          children: /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-md text-ink/60 transition-colors group-hover:bg-ink/[0.06] group-hover:text-ink-900", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "hidden",
        name,
        value,
        required
      }
    )
  ] });
}
function TimeSpinner({
  value,
  max,
  onChange,
  ariaLabel
}) {
  const [draft, setDraft] = useState(pad2(value));
  useEffect(() => setDraft(pad2(value)), [value]);
  const commit = (raw) => {
    const n = Number(raw.replace(/\D/g, ""));
    if (Number.isFinite(n)) {
      const clamped = Math.max(0, Math.min(max, n));
      onChange(clamped);
      setDraft(pad2(clamped));
    } else {
      setDraft(pad2(value));
    }
  };
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      inputMode: "numeric",
      maxLength: 2,
      "aria-label": ariaLabel,
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onBlur: (e) => commit(e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commit(e.target.value);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          onChange(Math.min(max, value + 1));
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.max(0, value - 1));
        }
      },
      onFocus: (e) => e.currentTarget.select(),
      className: "w-11 h-8 rounded-md border border-ink/15 bg-white text-center font-mono tabular-nums text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo-400 focus:border-brand-indigo-400 transition-colors"
    }
  );
}
export {
  DatePicker
};
