// Sticky bottom save ribbon — drop-in replacement for the inline
// `<FormActions primary={…} />` row at the bottom of `<FormCard>`.
// Three responsibilities in one client component:
//
//   1. Render a fixed-position bar at the bottom of the viewport
//      offset by the desktop sidebar (md:ml-64) carrying:
//        – a status chip on the left
//        – the primary submit button on the right
//
//   2. Track form-level dirty state by snapshotting `new FormData(form)`
//      on mount and re-serialising on every input / change / click.
//
//   3. Guard against losing changes — wires `useUnsavedChangesGuard`.

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUnsavedChangesGuard } from "./unsaved-changes-guard";

export function FormSubmitRibbon({
  submitLabel,
  /** Override the dirty-detection. Most forms should leave this alone
   *  and let the ribbon track FormData snapshots; pass `true` for
   *  forms whose initial state is intentionally "dirty" (e.g. a
   *  Create flow where the empty form should still show an enabled
   *  submit button). */
  alwaysDirty = false,
}: {
  submitLabel: string;
  alwaysDirty?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dirty, setDirty] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    setSubmitting(false);
    snapshotInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  const initialRef = useRef<string>("");

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

  return (
    <>
      <div ref={ref} aria-hidden="true" className="h-24" />

      <div
        role="region"
        aria-label="Save changes"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper-100/95 backdrop-blur shadow-paper-lg md:ml-64"
      >
        <div className="px-4 sm:px-7 lg:px-10">
          <div className="flex items-center justify-between gap-4 py-3 max-w-6xl mx-auto">
            <div className="text-[12.5px] font-mono uppercase tracking-[0.18em] text-ink/55">
              {submitting ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" />
                  Saving&hellip;
                </span>
              ) : isDirty ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal-500 motion-safe:animate-dot-pulse" />
                  Unsaved changes
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  No changes
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting || (!isDirty && !alwaysDirty)}
              className="btn-primary"
            >
              {submitting ? "Saving…" : submitLabel}
            </button>
          </div>
        </div>
      </div>

      {guard.dialog}
    </>
  );
}

/**
 * Stable string representation of every named form field.
 */
function serializeForm(form: HTMLFormElement): string {
  const data = new FormData(form);
  const entries: [string, string][] = [];
  for (const [k, v] of data.entries()) {
    if (typeof v === "string") {
      entries.push([k, v]);
    } else {
      entries.push([k, `__file:${v.name ?? ""}:${v.size ?? 0}`]);
    }
  }
  entries.sort((a, b) =>
    a[0] === b[0]
      ? a[1].localeCompare(b[1])
      : a[0].localeCompare(b[0]),
  );
  return JSON.stringify(entries);
}
