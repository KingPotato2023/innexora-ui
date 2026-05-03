import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Info } from "lucide-react";
function TipCard({
  title,
  children,
  footer,
  sticky = false,
  icon,
  className
}) {
  return /* @__PURE__ */ jsx(
    "aside",
    {
      className: [
        sticky ? "lg:sticky lg:top-7 lg:h-fit" : "",
        className ?? ""
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ jsxs("div", { className: "card p-5 space-y-3 bg-paper-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-ink-900", children: [
          /* @__PURE__ */ jsx("span", { className: "text-brand-teal-700 shrink-0", children: icon ?? /* @__PURE__ */ jsx(Info, { className: "h-4 w-4", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-brand-indigo-700", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] leading-relaxed text-ink/70", children }),
        footer && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "border-t border-ink/10" }),
          /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-relaxed text-ink/55", children: footer })
        ] })
      ] })
    }
  );
}
function TipStrip({
  title,
  children,
  icon,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "rounded-lg border border-ink/10 bg-paper-100 px-4 py-3 flex items-start gap-3 " + (className ?? ""),
      children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-teal-700 ring-1 ring-ink/10 shrink-0 mt-0.5", children: icon ?? /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-brand-indigo-700", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[13px] leading-relaxed text-ink/70", children })
        ] })
      ]
    }
  );
}
export {
  TipCard,
  TipStrip
};
