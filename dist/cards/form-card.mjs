import { jsx, jsxs } from "react/jsx-runtime";
function FormCard({
  children,
  className
}) {
  return /* @__PURE__ */ jsx("div", { className: `card p-6 space-y-6 ${className ?? ""}`, children });
}
function FormSplitBody({
  left,
  right
}) {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-x-8 gap-y-6 items-start", children: [
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: left }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden lg:block w-px bg-ink/10 self-stretch my-6",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: right })
  ] });
}
function FormSection({
  title,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-1.5 text-[11px] font-bold text-brand-indigo-700 uppercase tracking-[0.08em] mb-4 pb-2 border-b border-ink/10", children: [
      icon && /* @__PURE__ */ jsx("span", { className: "text-brand-indigo-700", children: icon }),
      title
    ] }),
    children
  ] });
}
function FormActions({
  primary,
  destructive
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-4 border-t border-ink/10", children: [
    destructive && /* @__PURE__ */ jsx("div", { className: "mr-auto", children: destructive }),
    /* @__PURE__ */ jsx("div", { className: "ml-auto", children: primary })
  ] });
}
function FormError({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsx("div", { className: "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700", children });
}
export {
  FormActions,
  FormCard,
  FormError,
  FormSection,
  FormSplitBody
};
