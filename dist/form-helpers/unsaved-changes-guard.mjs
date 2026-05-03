"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeftRight,
  X
} from "lucide-react";
function useUnsavedChangesGuard(active) {
  const router = useRouter();
  const [pendingHref, setPendingHref] = useState(null);
  const activeRef = useRef(active);
  const suppressedRef = useRef(false);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const isGuardingNow = () => activeRef.current && !suppressedRef.current;
  useEffect(() => {
    const handler = (e) => {
      if (!isGuardingNow()) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (!isGuardingNow()) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const target = e.target;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self")
        return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setPendingHref(url.pathname + url.search + url.hash);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);
  const disable = useCallback(() => {
    suppressedRef.current = true;
  }, []);
  const onConfirmLeave = useCallback(() => {
    if (!pendingHref) return;
    suppressedRef.current = true;
    const target = pendingHref;
    setPendingHref(null);
    router.push(target);
  }, [pendingHref, router]);
  const onCancelLeave = useCallback(() => {
    setPendingHref(null);
  }, []);
  return {
    dialog: /* @__PURE__ */ jsx(
      UnsavedChangesDialog,
      {
        open: pendingHref !== null,
        onLeave: onConfirmLeave,
        onStay: onCancelLeave
      }
    ),
    disable
  };
}
function UnsavedChangesDialog({
  open,
  onLeave,
  onStay
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onStay();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onStay]);
  if (!open) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "unsaved-changes-title",
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-ink/45 backdrop-blur-sm animate-fade-in-soft",
            onClick: onStay,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md rounded-xl border border-ink/12 bg-white shadow-paper-lg overflow-hidden animate-stagger-up", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-x-0 top-0 h-px",
              style: {
                background: "linear-gradient(90deg, transparent, rgba(0,142,134,0.55) 35%, rgba(46,49,145,0.55) 65%, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal-50 ring-1 ring-brand-teal-200/70 text-brand-teal-700", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxs(
                  "h2",
                  {
                    id: "unsaved-changes-title",
                    className: "font-display font-semibold text-[22px] leading-tight tracking-[-0.018em] text-ink-900",
                    children: [
                      "Leave with ",
                      /* @__PURE__ */ jsx("span", { className: "display-em", children: "unsaved" }),
                      " changes?"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-[14px] text-ink/70 leading-relaxed", children: "You've made edits that haven't been saved. If you navigate away now, those changes will be discarded." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onStay,
                  "aria-label": "Close",
                  className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink/55 hover:text-ink hover:bg-ink/5 transition-colors",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4", "aria-hidden": "true" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-end gap-2.5", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: onLeave,
                  className: "inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-white px-3 py-2 text-[13px] font-medium text-ink/75 hover:text-ink hover:border-ink/30 hover:bg-paper-50 transition-all",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeftRight, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                    "Discard & leave"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onStay,
                  autoFocus: true,
                  className: "btn-primary text-[13px] px-4 py-2",
                  children: "Keep editing"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  useUnsavedChangesGuard
};
