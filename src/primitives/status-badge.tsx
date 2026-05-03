// Pill chip for status / type / stage values across the app. Tone is opt-in;
// default tone reads neutral.
import type { ReactNode } from "react";

export type StatusBadgeTone =
  | "neutral"
  | "muted"
  | "positive"
  | "warning"
  | "negative"
  | "info"
  | "brand";

const TONE_CLASS: Record<StatusBadgeTone, string> = {
  neutral: "bg-ink/[0.06] text-ink/80 ring-ink/12",
  muted: "bg-ink/[0.04] text-ink/55 ring-ink/10",
  positive: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  warning: "bg-amber-50 text-amber-700 ring-amber-200/70",
  negative: "bg-red-50 text-red-700 ring-red-200/70",
  info: "bg-sky-50 text-sky-700 ring-sky-200/70",
  brand: "bg-brand-teal-50 text-brand-teal-800 ring-brand-teal-200/70",
};

export function StatusBadge({
  children,
  tone = "neutral",
  dot = false,
}: {
  children: ReactNode;
  tone?: StatusBadgeTone;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ring-1 ring-inset ${TONE_CLASS[tone]}`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotColor(tone)}`} aria-hidden="true" />}
      {children}
    </span>
  );
}

function dotColor(tone: StatusBadgeTone): string {
  switch (tone) {
    case "positive":
      return "bg-emerald-500";
    case "warning":
      return "bg-amber-500";
    case "negative":
      return "bg-red-500";
    case "info":
      return "bg-sky-500";
    case "brand":
      return "bg-brand-teal-500";
    case "muted":
      return "bg-ink/30";
    case "neutral":
    default:
      return "bg-ink/40";
  }
}

// Convenience tone-mappers for the domain enums most pages use. Importing
// these from a single place keeps colours consistent across screens.

export function leadStageTone(stage: string): StatusBadgeTone {
  switch (stage) {
    case "won": return "positive";
    case "lost": return "negative";
    case "proposal": return "info";
    case "opportunity": return "brand";
    case "qualified": return "info";
    default: return "muted";
  }
}

export function workOrderStatusTone(status: string): StatusBadgeTone {
  switch (status) {
    case "closed": return "positive";
    case "cancelled": return "muted";
    case "in_progress": return "info";
    case "on_hold": return "warning";
    case "assigned":
    case "triaged": return "brand";
    default: return "neutral";
  }
}

export function priorityTone(priority: string): StatusBadgeTone {
  switch (priority) {
    case "urgent": return "negative";
    case "high": return "warning";
    case "medium": return "neutral";
    case "low": return "muted";
    default: return "neutral";
  }
}

export function contractStatusTone(status: string): StatusBadgeTone {
  switch (status) {
    case "active": return "positive";
    case "draft": return "muted";
    case "expired": return "warning";
    case "terminated": return "negative";
    default: return "neutral";
  }
}

export function invoiceStatusTone(status: string): StatusBadgeTone {
  switch (status) {
    case "paid": return "positive";
    case "sent": return "info";
    case "overdue": return "negative";
    case "draft": return "muted";
    case "cancelled": return "muted";
    default: return "neutral";
  }
}

export function srStatusTone(status: string): StatusBadgeTone {
  switch (status) {
    case "converted_to_work_order": return "info";
    case "acknowledged": return "brand";
    case "closed_no_action": return "muted";
    default: return "neutral";
  }
}

export function stakeholderTypeTone(type: string): StatusBadgeTone {
  switch (type) {
    case "developer": return "brand";
    case "owner": return "info";
    case "tenant": return "neutral";
    case "vendor": return "warning";
    case "investor": return "positive";
    case "lead": return "muted";
    default: return "neutral";
  }
}

export function assetConditionTone(condition: string): StatusBadgeTone {
  switch (condition) {
    case "excellent":
    case "good": return "positive";
    case "fair": return "warning";
    case "poor": return "negative";
    case "needs_replacement": return "negative";
    default: return "neutral";
  }
}

export function activeTone(active: boolean): StatusBadgeTone {
  return active ? "positive" : "muted";
}

export function communicationTypeTone(type: string): StatusBadgeTone {
  switch (type) {
    case "complaint": return "negative";
    case "meeting": return "info";
    case "email": return "info";
    case "call": return "brand";
    case "note": return "neutral";
    default: return "neutral";
  }
}

export function communicationDirectionTone(direction: string): StatusBadgeTone {
  return direction === "inbound" ? "info" : "neutral";
}

export function maintenanceFrequencyTone(_freq: string): StatusBadgeTone {
  return "info";
}

export function maintenanceStatusTone(status: string): StatusBadgeTone {
  switch (status) {
    case "active": return "positive";
    case "paused": return "warning";
    case "ended": return "muted";
    default: return "neutral";
  }
}

// Audit-log action → tone. Used on /audit-log so a creation reads
// emerald-positive at a glance, an update reads sky-info, and a
// destructive deletion reads red-negative.
export function auditActionTone(action: string): StatusBadgeTone {
  switch (action) {
    case "create": return "positive";
    case "update": return "info";
    case "delete": return "negative";
    case "login":
    case "signin": return "brand";
    case "signout": return "muted";
    default: return "neutral";
  }
}
