"use client";
import { jsx } from "react/jsx-runtime";
function ConfirmForm({
  message,
  children,
  className,
  ...formProps
}) {
  return /* @__PURE__ */ jsx(
    "form",
    {
      ...formProps,
      className,
      onSubmit: (e) => {
        if (!window.confirm(message)) {
          e.preventDefault();
        }
      },
      children
    }
  );
}
export {
  ConfirmForm
};
