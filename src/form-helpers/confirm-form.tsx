// Wrap a server-action form so a destructive submit triggers a JS
// `confirm()` prompt first. Cancelling the prompt cancels the submit.
// Used wherever a single-click action would otherwise be irreversible
// (delete tier, delete attachment, kick a stakeholder, etc).

"use client";

import { type FormHTMLAttributes, type ReactNode } from "react";

export function ConfirmForm({
  message,
  children,
  className,
  ...formProps
}: {
  /** Message shown in the confirm() prompt. */
  message: string;
  children: ReactNode;
  className?: string;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "children">) {
  return (
    <form
      {...formProps}
      className={className}
      onSubmit={(e) => {
        if (!window.confirm(message)) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </form>
  );
}
