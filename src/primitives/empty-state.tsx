// Branded "no rows" / "nothing here yet" placeholder.
import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="card p-10 flex flex-col items-center text-center gap-4">
      {icon && (
        <div className="h-12 w-12 rounded-full bg-paper-200 ring-1 ring-ink/10 text-ink/55 inline-flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="space-y-1.5 max-w-md">
        <div className="font-display font-semibold text-[18px] leading-tight text-ink-900 tracking-[-0.015em]">
          {title}
        </div>
        {description && (
          <div className="text-sm text-ink/60">{description}</div>
        )}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
