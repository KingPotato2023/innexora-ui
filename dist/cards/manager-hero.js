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
var manager_hero_exports = {};
__export(manager_hero_exports, {
  ManagerHero: () => ManagerHero
});
module.exports = __toCommonJS(manager_hero_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_date_fns = require("date-fns");
var import_link = __toESM(require("next/link"));
var import_lucide_react = require("lucide-react");
var import_greeting = require("../lib/greeting");
function formatAedShort(value) {
  if (!Number.isFinite(value) || value === 0) return "AED 0";
  const abs = Math.abs(value);
  if (abs >= 1e6) return `AED ${(value / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `AED ${Math.round(value / 1e3)}k`;
  return `AED ${Math.round(value)}`;
}
function ManagerHero({
  userName,
  openRequests,
  activeWorkOrders,
  outstandingAed,
  propertyCount,
  now = /* @__PURE__ */ new Date(),
  briefingLabel = "Properties \xB7 Briefing"
}) {
  const { greeting } = (0, import_greeting.getGreeting)(now, userName);
  const weekday = (0, import_date_fns.format)(now, "EEEE, MMMM d, yyyy");
  const issueDate = (0, import_date_fns.format)(now, "yyyy.MM.dd");
  const overdue = openRequests > 0 || activeWorkOrders > 0;
  const firstName = userName.split(" ")[0] ?? "there";
  const initials = userName.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]?.toUpperCase() ?? "").join("") || "?";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "section",
    {
      "aria-label": "Operations overview",
      className: "relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-paper",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute inset-x-0 top-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.6) 35%, rgba(46,49,145,0.6) 65%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "grid lg:grid-cols-[1.15fr_1fr]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative px-7 py-8 sm:px-9 sm:py-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink/55 font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                "Issue ",
                issueDate
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "vrule" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: briefingLabel })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { className: "mt-5 font-display font-semibold text-[36px] sm:text-[44px] leading-[1.06] tracking-[-0.022em] text-ink-900", children: [
              greeting.split(",")[0],
              ",",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-avatar-pill", "aria-hidden": "true", children: initials }),
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "display-em", children: firstName }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "mt-3 text-sm text-ink/65", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-ink/80", children: weekday }),
              !overdue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "vrule" }),
                "Nothing pressing \u2014 clear deck"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-100 px-3 py-1.5 text-[11.5px] font-medium text-ink/75", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "live-beacon", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-beacon__ring", "aria-hidden": "true" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-beacon__core", "aria-hidden": "true" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-mono tabular-nums", children: propertyCount }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-ink/50", children: " properties under management" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-7 flex flex-wrap items-center gap-3 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaPill, { href: "/service-requests", primary: true, children: "Open service requests" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaPill, { href: "/work-orders", children: "View work orders" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaPill, { href: "/properties", children: "Properties register" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative bg-hero-gradient overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -inset-32 motion-safe:animate-aurora-drift",
                style: {
                  background: "radial-gradient(40% 50% at 30% 35%, rgba(1,182,173,0.32), transparent 65%), radial-gradient(35% 45% at 75% 70%, rgba(46,49,145,0.28), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full",
                style: {
                  background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full",
                style: {
                  background: "radial-gradient(circle, rgba(1,182,173,0.18), transparent 70%)"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                "aria-hidden": "true",
                className: "absolute inset-0 opacity-[0.07]",
                style: {
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "32px 32px"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative p-7 sm:p-9 h-full flex flex-col justify-between gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/70 font-mono", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Ledger" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-6 bg-white/35" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { className: "stagger grid grid-cols-3 gap-5 sm:gap-7", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  HeroStat,
                  {
                    label: "Open requests",
                    value: openRequests.toString(),
                    urgent: openRequests > 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  HeroStat,
                  {
                    label: "Work orders",
                    value: activeWorkOrders.toString()
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  HeroStat,
                  {
                    label: "Outstanding",
                    value: formatAedShort(outstandingAed),
                    urgent: outstandingAed > 0
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CtaPill({
  href,
  primary,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_link.default,
    {
      href,
      className: "cta-pill " + (primary ? "cta-pill--primary" : "cta-pill--ghost"),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", className: "cta-pill__arrow", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowUpRight, { className: "h-3.5 w-3.5" }) })
      ]
    }
  );
}
function HeroStat({
  label,
  value,
  urgent
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "dd",
      {
        className: "font-display font-semibold tabular-nums text-[44px] sm:text-[56px] leading-none tracking-[-0.028em] " + (urgent ? "text-amber-200" : "text-white"),
        children: value
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { className: "mt-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/65 font-mono", children: label })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ManagerHero
});
