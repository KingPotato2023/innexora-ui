"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../overlays/popover";
import { cn } from "../lib/utils";
function pad2(n) {
  return String(n).padStart(2, "0");
}
function parseHHMM(s) {
  if (!s) return null;
  const m = s.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const h = Number(m[1]);
  const mm = Number(m[2]);
  if (!Number.isFinite(h) || !Number.isFinite(mm)) return null;
  if (h < 0 || h > 23 || mm < 0 || mm > 59) return null;
  return { h, m: mm };
}
function TimePicker({
  name,
  defaultValue,
  required,
  placeholder,
  className,
  id,
  disabled,
  onChange
}) {
  const initial = parseHHMM(defaultValue);
  const [hour, setHour] = useState(initial ? initial.h : null);
  const [minute, setMinute] = useState(initial ? initial.m : null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const next = parseHHMM(defaultValue);
    setHour(next ? next.h : null);
    setMinute(next ? next.m : null);
  }, [defaultValue]);
  const value = hour !== null && minute !== null ? `${pad2(hour)}:${pad2(minute)}` : "";
  const triggerLabel = value || placeholder || "Pick a time";
  const commit = useCallback(
    (h, m) => {
      setHour(h);
      setMinute(m);
      if (onChange) {
        onChange(h !== null && m !== null ? `${pad2(h)}:${pad2(m)}` : "");
      }
    },
    [onChange]
  );
  const setH = (h) => {
    const clamped = Math.max(0, Math.min(23, h));
    commit(clamped, minute ?? 0);
  };
  const setM = (m) => {
    const clamped = Math.max(0, Math.min(59, m));
    commit(hour ?? 0, clamped);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs(Popover, { open: disabled ? false : open, onOpenChange: disabled ? void 0 : setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          id,
          disabled,
          className: cn(
            "input flex items-center justify-between gap-2 text-left",
            !value && "text-ink/45",
            disabled && "cursor-not-allowed opacity-60"
          ),
          children: [
            /* @__PURE__ */ jsx("span", { className: "truncate", children: triggerLabel }),
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-ink/45 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs(PopoverContent, { align: "start", className: "p-3 w-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-ink/45" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.14em] text-ink/55 font-mono mr-1", children: "Time" }),
          /* @__PURE__ */ jsx(
            TimeSpinner,
            {
              value: hour ?? 0,
              max: 23,
              onChange: setH,
              ariaLabel: "Hours"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-ink/55 font-mono", children: ":" }),
          /* @__PURE__ */ jsx(
            TimeSpinner,
            {
              value: minute ?? 0,
              max: 59,
              onChange: setM,
              ariaLabel: "Minutes"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-ink/10 pt-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 hover:text-brand-teal-700",
              onClick: () => commit(null, null),
              children: "Clear"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-teal-700 hover:text-brand-teal-800",
              onClick: () => {
                const now = /* @__PURE__ */ new Date();
                commit(now.getHours(), now.getMinutes());
              },
              children: "Now"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-brand-indigo-700 hover:text-brand-indigo-800",
              onClick: () => setOpen(false),
              children: "Done"
            }
          )
        ] })
      ] })
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
  TimePicker
};
