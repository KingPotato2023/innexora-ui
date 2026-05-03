// Two-part safety net for forms with dirty state:
//
//   1. `beforeunload` — the only way to intercept a tab close, browser
//      back from an external URL, or hard refresh. Browsers force their
//      OWN dialog here for security; we can't restyle it.
//   2. In-app navigation (clicking any <a> / <Link>) — fully under our
//      control. We register a capture-phase click listener that
//      intercepts internal anchor clicks while the form is dirty, then
//      shows the styled UnsavedChangesDialog.

"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeftRight,
  X,
} from "lucide-react";

export interface UnsavedChangesGuard {
  /** Render this anywhere inside the form's tree — the dialog itself
   *  uses portal-style fixed positioning so its DOM location doesn't
   *  matter. */
  dialog: ReactNode;
  /** Suppress the guard for the next navigation. Call this before
   *  programmatic redirects from a successful submit so the success
   *  path isn't confirmed. */
  disable: () => void;
}

export function useUnsavedChangesGuard(
  active: boolean,
): UnsavedChangesGuard {
  const router = useRouter();
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const activeRef = useRef(active);
  const suppressedRef = useRef(false);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const isGuardingNow = () => activeRef.current && !suppressedRef.current;

  // ── beforeunload ────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (!isGuardingNow()) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  // ── In-app link interception ─────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!isGuardingNow()) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "" && anchor.target !== "_self")
        return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
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
    dialog: (
      <UnsavedChangesDialog
        open={pendingHref !== null}
        onLeave={onConfirmLeave}
        onStay={onCancelLeave}
      />
    ),
    disable,
  };
}

// On-theme confirmation. Paper plate, ink hairline ring, brand-teal
// accent on the "Stay" CTA, ink-900 on "Leave" so leaving feels final.
function UnsavedChangesDialog({
  open,
  onLeave,
  onStay,
}: {
  open: boolean;
  onLeave: () => void;
  onStay: () => void;
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onStay();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onStay]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="unsaved-changes-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-ink/45 backdrop-blur-sm animate-fade-in-soft"
        onClick={onStay}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md rounded-xl border border-ink/12 bg-white shadow-paper-lg overflow-hidden animate-stagger-up">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,142,134,0.55) 35%, rgba(46,49,145,0.55) 65%, transparent)",
          }}
        />

        <div className="p-6">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal-50 ring-1 ring-brand-teal-200/70 text-brand-teal-700">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2
                id="unsaved-changes-title"
                className="font-display font-semibold text-[22px] leading-tight tracking-[-0.018em] text-ink-900"
              >
                Leave with <span className="display-em">unsaved</span> changes?
              </h2>
              <p className="mt-2 text-[14px] text-ink/70 leading-relaxed">
                You&apos;ve made edits that haven&apos;t been saved. If you
                navigate away now, those changes will be discarded.
              </p>
            </div>
            <button
              type="button"
              onClick={onStay}
              aria-label="Close"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink/55 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onLeave}
              className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-white px-3 py-2 text-[13px] font-medium text-ink/75 hover:text-ink hover:border-ink/30 hover:bg-paper-50 transition-all"
            >
              <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden="true" />
              Discard &amp; leave
            </button>
            <button
              type="button"
              onClick={onStay}
              autoFocus
              className="btn-primary text-[13px] px-4 py-2"
            >
              Keep editing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
