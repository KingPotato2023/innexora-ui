// Dashboard KPI tile with optional trend delta and href. Pure presentational —
// callers compute the delta vs. prior period and pass it in.

import * as React from "react";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export type KpiTone = "teal" | "indigo" | "warn" | "neutral";

const ICON_TONE: Record<KpiTone, string> = {
  teal: "bg-brand-teal-50 text-brand-teal-700 ring-1 ring-brand-teal-100/70",
  indigo: "bg-brand-indigo-50 text-brand-indigo-700 ring-1 ring-brand-indigo-100/70",
  warn: "bg-amber-50 text-amber-700 ring-1 ring-amber-100/70",
  neutral: "bg-paper-200 text-ink/60 ring-1 ring-ink/5",
};

export interface KpiTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: KpiTone;
  delta?: number;
  deltaLabel?: string;
  upIsGood?: boolean;
  href?: string;
  caption?: string;
  sparkline?: number[];
}

const SPARK_TONE: Record<KpiTone, string> = {
  teal: "text-brand-teal-500",
  indigo: "text-brand-indigo-500",
  warn: "text-amber-500",
  neutral: "text-neutral-400",
};

export function KpiTile({
  icon,
  label,
  value,
  tone = "neutral",
  delta,
  deltaLabel,
  upIsGood = true,
  href,
  caption,
  sparkline,
}: KpiTileProps) {
  const body = (
    <div className="card-interactive p-5 h-full flex flex-col">
      <div className="flex items-center gap-2.5">
        <span
          className={
            "inline-flex h-7 w-7 items-center justify-center rounded-md shrink-0 " +
            ICON_TONE[tone]
          }
        >
          {icon}
        </span>
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/55">
          {label}
        </span>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <div className="font-display font-semibold tabular-nums text-[34px] leading-[1] tracking-[-0.024em] text-ink-900">
          {value}
        </div>
        {delta !== undefined && deltaLabel && (
          <DeltaBadge delta={delta} label={deltaLabel} upIsGood={upIsGood} />
        )}
      </div>

      {caption && (
        <div className="mt-2 text-[11.5px] text-ink/55 font-mono tracking-tight">
          {caption}
        </div>
      )}

      {sparkline && sparkline.length > 1 && (
        <Sparkline points={sparkline} className={SPARK_TONE[tone]} />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400 rounded-lg">
        {body}
      </Link>
    );
  }
  return body;
}

function Sparkline({
  points,
  className,
}: {
  points: number[];
  className: string;
}) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = 100 / (points.length - 1);
  const coords = points
    .map((v, i) => {
      const x = i * stepX;
      const y = 22 - ((v - min) / range) * 20;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className={"mt-3 h-6 w-full " + className}
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={coords}
      />
    </svg>
  );
}

function DeltaBadge({
  delta,
  label,
  upIsGood,
}: {
  delta: number;
  label: string;
  upIsGood: boolean;
}) {
  if (delta === 0) {
    return (
      <span
        className="inline-flex items-center gap-0.5 rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-600 tabular-nums"
        aria-label={`No change (${label}) compared to previous period`}
      >
        <Minus className="h-3 w-3" aria-hidden="true" />
        {label}
      </span>
    );
  }
  const isUp = delta > 0;
  const good = isUp === upIsGood;
  const direction = isUp ? "up" : "down";
  const sentiment = good ? "better than" : "worse than";
  const cls = good
    ? "bg-emerald-50 text-emerald-700"
    : "bg-rose-50 text-rose-700";
  return (
    <span
      className={
        "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium tabular-nums " +
        cls
      }
      aria-label={`${direction} ${Math.abs(delta)} (${label}), ${sentiment} previous period`}
    >
      {isUp ? (
        <TrendingUp className="h-3 w-3" aria-hidden="true" />
      ) : (
        <TrendingDown className="h-3 w-3" aria-hidden="true" />
      )}
      {label}
    </span>
  );
}
