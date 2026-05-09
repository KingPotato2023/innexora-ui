import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
const ICON_TONE = {
  teal: "bg-brand-teal-50 text-brand-teal-700 ring-1 ring-brand-teal-100/70",
  indigo: "bg-brand-indigo-50 text-brand-indigo-700 ring-1 ring-brand-indigo-100/70",
  warn: "bg-amber-50 text-amber-700 ring-1 ring-amber-100/70",
  neutral: "bg-paper-200 text-ink/60 ring-1 ring-ink/5"
};
const SPARK_TONE = {
  teal: "text-brand-teal-500",
  indigo: "text-brand-indigo-500",
  warn: "text-amber-500",
  neutral: "text-neutral-400"
};
function KpiTile({
  icon,
  label,
  value,
  tone = "neutral",
  delta,
  deltaLabel,
  upIsGood = true,
  href,
  caption,
  sparkline
}) {
  const core = /* @__PURE__ */ jsxs("div", { className: "kpi-bezel__core flex h-full flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx("span", { className: "kpi-bezel__icon " + ICON_TONE[tone], children: icon }),
      /* @__PURE__ */ jsx("span", { className: "text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55", children: label })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display font-semibold tabular-nums text-[34px] leading-[1] tracking-[-0.024em] text-ink-900", children: value }),
      delta !== void 0 && deltaLabel && /* @__PURE__ */ jsx(DeltaBadge, { delta, label: deltaLabel, upIsGood })
    ] }),
    caption && /* @__PURE__ */ jsx("div", { className: "mt-2 text-[11.5px] text-ink/55 font-mono tracking-tight", children: caption }),
    sparkline && sparkline.length > 1 && /* @__PURE__ */ jsx(Sparkline, { points: sparkline, className: SPARK_TONE[tone] })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx(Link, { href, className: "kpi-bezel", "data-pressable": "", children: core });
  }
  return /* @__PURE__ */ jsx("div", { className: "kpi-bezel", children: core });
}
function Sparkline({
  points,
  className
}) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = 100 / (points.length - 1);
  const linePoints = points.map((v, i) => {
    const x = i * stepX;
    const y = 22 - (v - min) / range * 20;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  const areaPoints = `0,24 ${linePoints} 100,24`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 100 24",
      preserveAspectRatio: "none",
      className: "mt-3 h-7 w-full " + className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "kpi-spark-fill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "0.22" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        /* @__PURE__ */ jsx("polygon", { points: areaPoints, fill: "url(#kpi-spark-fill)" }),
        /* @__PURE__ */ jsx(
          "polyline",
          {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            points: linePoints
          }
        )
      ]
    }
  );
}
function DeltaBadge({
  delta,
  label,
  upIsGood
}) {
  if (delta === 0) {
    return /* @__PURE__ */ jsxs(
      "span",
      {
        className: "inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 tabular-nums",
        "aria-label": `No change (${label}) compared to previous period`,
        children: [
          /* @__PURE__ */ jsx(Minus, { className: "h-3 w-3", "aria-hidden": "true" }),
          label
        ]
      }
    );
  }
  const isUp = delta > 0;
  const good = isUp === upIsGood;
  const direction = isUp ? "up" : "down";
  const sentiment = good ? "better than" : "worse than";
  const cls = good ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700";
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium tabular-nums " + cls,
      "aria-label": `${direction} ${Math.abs(delta)} (${label}), ${sentiment} previous period`,
      children: [
        isUp ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3", "aria-hidden": "true" }),
        label
      ]
    }
  );
}
export {
  KpiTile
};
