import { jsx, jsxs } from "react/jsx-runtime";
function DetailSection({
  title,
  icon,
  action,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs("section", { className: "card p-6 " + (className ?? ""), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: action ? "flex items-center justify-between gap-4 mb-4" : "mb-4",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "eyebrow text-brand-indigo-700 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-brand-indigo-700 inline-flex", children: icon }),
            title
          ] }),
          action
        ]
      }
    ),
    children
  ] });
}
function DetailGrid({
  children,
  cols = 2
}) {
  return /* @__PURE__ */ jsx(
    "dl",
    {
      className: "grid grid-cols-1 gap-x-8 gap-y-4 text-sm " + (cols === 2 ? "sm:grid-cols-2" : ""),
      children
    }
  );
}
function DetailRow({
  icon,
  label,
  value,
  span
}) {
  return /* @__PURE__ */ jsxs("div", { className: span === 2 ? "sm:col-span-2" : void 0, children: [
    /* @__PURE__ */ jsxs("dt", { className: "field-label flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-ink/40 inline-flex shrink-0", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsx("dd", { className: "mt-1 text-ink/85 leading-relaxed", children: value ?? /* @__PURE__ */ jsx("span", { className: "text-ink/40", children: "\u2014" }) })
  ] });
}
export {
  DetailGrid,
  DetailRow,
  DetailSection
};
