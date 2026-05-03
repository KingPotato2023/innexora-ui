"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var kpi_tile_exports = {};
__export(kpi_tile_exports, {
  KpiTile: () => KpiTile
});
module.exports = __toCommonJS(kpi_tile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_link = __toESM(require("next/link"));
var import_lucide_react = require("lucide-react");
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
  const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-interactive p-5 h-full flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "span",
        {
          className: "inline-flex h-7 w-7 items-center justify-center rounded-md shrink-0 " + ICON_TONE[tone],
          children: icon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55", children: label })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 flex items-baseline gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "font-display font-semibold tabular-nums text-[34px] leading-[1] tracking-[-0.024em] text-ink-900", children: value }),
      delta !== void 0 && deltaLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeltaBadge, { delta, label: deltaLabel, upIsGood })
    ] }),
    caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 text-[11.5px] text-ink/55 font-mono tracking-tight", children: caption }),
    sparkline && sparkline.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, { points: sparkline, className: SPARK_TONE[tone] })
  ] });
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href, className: "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400 rounded-lg", children: body });
  }
  return body;
}
function Sparkline({
  points,
  className
}) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = 100 / (points.length - 1);
  const coords = points.map((v, i) => {
    const x = i * stepX;
    const y = 22 - (v - min) / range * 20;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "0 0 100 24",
      preserveAspectRatio: "none",
      className: "mt-3 h-6 w-full " + className,
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "polyline",
        {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          points: coords
        }
      )
    }
  );
}
function DeltaBadge({
  delta,
  label,
  upIsGood
}) {
  if (delta === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "span",
      {
        className: "inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 tabular-nums",
        "aria-label": `No change (${label}) compared to previous period`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Minus, { className: "h-3 w-3", "aria-hidden": "true" }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      className: "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium tabular-nums " + cls,
      "aria-label": `${direction} ${Math.abs(delta)} (${label}), ${sentiment} previous period`,
      children: [
        isUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.TrendingDown, { className: "h-3 w-3", "aria-hidden": "true" }),
        label
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KpiTile
});
