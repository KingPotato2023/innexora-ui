"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUnsavedChangesGuard } from "./unsaved-changes-guard";
function FormSubmitRibbon({
  submitLabel,
  /** Override the dirty-detection. Most forms should leave this alone
   *  and let the ribbon track FormData snapshots; pass `true` for
   *  forms whose initial state is intentionally "dirty" (e.g. a
   *  Create flow where the empty form should still show an enabled
   *  submit button). */
  alwaysDirty = false
}) {
  const ref = useRef(null);
  const [dirty, setDirty] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setSubmitting(false);
    snapshotInitial();
  }, [pathname, searchParams]);
  const initialRef = useRef("");
  function snapshotInitial() {
    const form = ref.current?.closest("form");
    if (!form) return;
    initialRef.current = serializeForm(form);
    setDirty(false);
  }
  useEffect(() => {
    const form = ref.current?.closest("form");
    if (!form) return;
    snapshotInitial();
    const recheck = () => {
      const current = serializeForm(form);
      setDirty(current !== initialRef.current);
    };
    const onAny = () => requestAnimationFrame(recheck);
    const onSubmit = () => setSubmitting(true);
    form.addEventListener("input", onAny, true);
    form.addEventListener("change", onAny, true);
    form.addEventListener("click", onAny, true);
    form.addEventListener("submit", onSubmit);
    return () => {
      form.removeEventListener("input", onAny, true);
      form.removeEventListener("change", onAny, true);
      form.removeEventListener("click", onAny, true);
      form.removeEventListener("submit", onSubmit);
    };
  }, []);
  const isDirty = alwaysDirty || dirty;
  const guard = useUnsavedChangesGuard(isDirty && !submitting);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref, "aria-hidden": "true", className: "h-24" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        role: "region",
        "aria-label": "Save changes",
        className: "fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper-100/95 backdrop-blur shadow-paper-lg md:ml-64",
        children: /* @__PURE__ */ jsx("div", { className: "px-4 sm:px-7 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 py-3 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[12.5px] font-mono uppercase tracking-[0.18em] text-ink/55", children: submitting ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }),
            "Saving\u2026"
          ] }) : isDirty ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" }),
            "Unsaved changes"
          ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }),
            "No changes"
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: submitting || !isDirty && !alwaysDirty,
              className: "btn-primary",
              children: submitting ? "Saving\u2026" : submitLabel
            }
          )
        ] }) })
      }
    ),
    guard.dialog
  ] });
}
function serializeForm(form) {
  const data = new FormData(form);
  const entries = [];
  for (const [k, v] of data.entries()) {
    if (typeof v === "string") {
      entries.push([k, v]);
    } else {
      entries.push([k, `__file:${v.name ?? ""}:${v.size ?? 0}`]);
    }
  }
  entries.sort(
    (a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0])
  );
  return JSON.stringify(entries);
}
export {
  FormSubmitRibbon
};
