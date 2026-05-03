import { jsx, jsxs } from "react/jsx-runtime";
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxs("div", { className: "card p-10 flex flex-col items-center text-center gap-4", children: [
    icon && /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-paper-200 ring-1 ring-ink/10 text-ink/55 inline-flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 max-w-md", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-[18px] leading-tight text-ink-900 tracking-[-0.015em]", children: title }),
      description && /* @__PURE__ */ jsx("div", { className: "text-sm text-ink/60", children: description })
    ] }),
    action && /* @__PURE__ */ jsx("div", { className: "mt-1", children: action })
  ] });
}
export {
  EmptyState
};
