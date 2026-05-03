"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var status_badge_exports = {};
__export(status_badge_exports, {
  StatusBadge: () => StatusBadge,
  activeTone: () => activeTone,
  assetConditionTone: () => assetConditionTone,
  auditActionTone: () => auditActionTone,
  communicationDirectionTone: () => communicationDirectionTone,
  communicationTypeTone: () => communicationTypeTone,
  contractStatusTone: () => contractStatusTone,
  invoiceStatusTone: () => invoiceStatusTone,
  leadStageTone: () => leadStageTone,
  maintenanceFrequencyTone: () => maintenanceFrequencyTone,
  maintenanceStatusTone: () => maintenanceStatusTone,
  priorityTone: () => priorityTone,
  srStatusTone: () => srStatusTone,
  stakeholderTypeTone: () => stakeholderTypeTone,
  workOrderStatusTone: () => workOrderStatusTone
});
module.exports = __toCommonJS(status_badge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
const TONE_CLASS = {
  neutral: "bg-ink/[0.06] text-ink/80 ring-ink/12",
  muted: "bg-ink/[0.04] text-ink/55 ring-ink/10",
  positive: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
  warning: "bg-amber-50 text-amber-700 ring-amber-200/70",
  negative: "bg-red-50 text-red-700 ring-red-200/70",
  info: "bg-sky-50 text-sky-700 ring-sky-200/70",
  brand: "bg-brand-teal-50 text-brand-teal-800 ring-brand-teal-200/70"
};
function StatusBadge({
  children,
  tone = "neutral",
  dot = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ring-1 ring-inset ${TONE_CLASS[tone]}`,
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${dotColor(tone)}`, "aria-hidden": "true" }),
        children
      ]
    }
  );
}
function dotColor(tone) {
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
function leadStageTone(stage) {
  switch (stage) {
    case "won":
      return "positive";
    case "lost":
      return "negative";
    case "proposal":
      return "info";
    case "opportunity":
      return "brand";
    case "qualified":
      return "info";
    default:
      return "muted";
  }
}
function workOrderStatusTone(status) {
  switch (status) {
    case "closed":
      return "positive";
    case "cancelled":
      return "muted";
    case "in_progress":
      return "info";
    case "on_hold":
      return "warning";
    case "assigned":
    case "triaged":
      return "brand";
    default:
      return "neutral";
  }
}
function priorityTone(priority) {
  switch (priority) {
    case "urgent":
      return "negative";
    case "high":
      return "warning";
    case "medium":
      return "neutral";
    case "low":
      return "muted";
    default:
      return "neutral";
  }
}
function contractStatusTone(status) {
  switch (status) {
    case "active":
      return "positive";
    case "draft":
      return "muted";
    case "expired":
      return "warning";
    case "terminated":
      return "negative";
    default:
      return "neutral";
  }
}
function invoiceStatusTone(status) {
  switch (status) {
    case "paid":
      return "positive";
    case "sent":
      return "info";
    case "overdue":
      return "negative";
    case "draft":
      return "muted";
    case "cancelled":
      return "muted";
    default:
      return "neutral";
  }
}
function srStatusTone(status) {
  switch (status) {
    case "converted_to_work_order":
      return "info";
    case "acknowledged":
      return "brand";
    case "closed_no_action":
      return "muted";
    default:
      return "neutral";
  }
}
function stakeholderTypeTone(type) {
  switch (type) {
    case "developer":
      return "brand";
    case "owner":
      return "info";
    case "tenant":
      return "neutral";
    case "vendor":
      return "warning";
    case "investor":
      return "positive";
    case "lead":
      return "muted";
    default:
      return "neutral";
  }
}
function assetConditionTone(condition) {
  switch (condition) {
    case "excellent":
    case "good":
      return "positive";
    case "fair":
      return "warning";
    case "poor":
      return "negative";
    case "needs_replacement":
      return "negative";
    default:
      return "neutral";
  }
}
function activeTone(active) {
  return active ? "positive" : "muted";
}
function communicationTypeTone(type) {
  switch (type) {
    case "complaint":
      return "negative";
    case "meeting":
      return "info";
    case "email":
      return "info";
    case "call":
      return "brand";
    case "note":
      return "neutral";
    default:
      return "neutral";
  }
}
function communicationDirectionTone(direction) {
  return direction === "inbound" ? "info" : "neutral";
}
function maintenanceFrequencyTone(_freq) {
  return "info";
}
function maintenanceStatusTone(status) {
  switch (status) {
    case "active":
      return "positive";
    case "paused":
      return "warning";
    case "ended":
      return "muted";
    default:
      return "neutral";
  }
}
function auditActionTone(action) {
  switch (action) {
    case "create":
      return "positive";
    case "update":
      return "info";
    case "delete":
      return "negative";
    case "login":
    case "signin":
      return "brand";
    case "signout":
      return "muted";
    default:
      return "neutral";
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StatusBadge,
  activeTone,
  assetConditionTone,
  auditActionTone,
  communicationDirectionTone,
  communicationTypeTone,
  contractStatusTone,
  invoiceStatusTone,
  leadStageTone,
  maintenanceFrequencyTone,
  maintenanceStatusTone,
  priorityTone,
  srStatusTone,
  stakeholderTypeTone,
  workOrderStatusTone
});
