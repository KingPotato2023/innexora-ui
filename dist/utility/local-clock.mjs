"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
function fmt(d) {
  const time = d.toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const date = d.toLocaleDateString(void 0, {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });
  return { time, date };
}
function LocalClock() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(/* @__PURE__ */ new Date());
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-[10.5px] text-white/40 font-mono tabular-nums", children: "\xA0" });
  }
  const { time, date } = fmt(now);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[10.5px] text-white/55 font-mono tabular-nums", children: [
    /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 text-white/40", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "text-white/80", children: time }),
    /* @__PURE__ */ jsx("span", { className: "h-2.5 w-px bg-white/15", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { children: date })
  ] });
}
export {
  LocalClock
};
