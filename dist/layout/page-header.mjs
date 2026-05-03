import { jsx, jsxs } from "react/jsx-runtime";
function PageHero({
  icon,
  title,
  description,
  meta,
  actions,
  kicker
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "absolute inset-x-0 -top-1 h-px",
        style: {
          background: "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.5) 35%, rgba(46,49,145,0.5) 65%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-5 flex-wrap pt-4 pb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-paper-200 text-ink-900 ring-1 ring-ink/10 shadow-paper", children: /* @__PURE__ */ jsx("span", { className: "text-ink/80", children: icon }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        kicker && /* @__PURE__ */ jsx("div", { className: "eyebrow mb-2 text-brand-indigo-700", children: kicker }),
        /* @__PURE__ */ jsx("h1", { className: "page-title", children: title }),
        meta && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: meta }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[14.5px] text-ink/65 max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 flex-wrap pt-1", children: actions })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rule-fade" })
  ] });
}
function PageHeader({
  title,
  description,
  actions,
  kicker
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 pb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        kicker && /* @__PURE__ */ jsx("div", { className: "eyebrow mb-2", children: kicker }),
        /* @__PURE__ */ jsx("h1", { className: "page-title", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-[14px] text-ink/65 max-w-2xl", children: description })
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 flex-wrap", children: actions })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rule-fade" })
  ] });
}
export {
  PageHeader,
  PageHero
};
