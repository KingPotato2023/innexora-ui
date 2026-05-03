"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SidebarNav } from "./sidebar-nav";
function ShellLayout({
  children,
  navItems,
  brand,
  userFooter,
  groupOrder,
  groupLabels
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        "data-app-chrome": true,
        className: "md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-ink/10 bg-paper-100/85 backdrop-blur px-4 py-2.5",
        children: [
          brand,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen((v) => !v),
              "aria-label": open ? "Close menu" : "Open menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-ink/80 hover:bg-ink/5",
              children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        "data-app-chrome": true,
        className: "hidden md:flex sidebar-surface fixed inset-y-0 left-0 w-64 flex-col z-20",
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-teal-500/35 to-transparent"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex h-16 items-center px-5 border-b border-white/5", children: brand }),
          /* @__PURE__ */ jsx(
            SidebarNav,
            {
              items: navItems,
              groupOrder,
              groupLabels
            }
          ),
          userFooter && /* @__PURE__ */ jsx("div", { className: "border-t border-white/5", children: userFooter })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "md:hidden fixed inset-0 z-40", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in-soft",
          onClick: close,
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxs("aside", { className: "absolute inset-y-0 left-0 w-72 max-w-[85%] sidebar-surface flex flex-col shadow-paper-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center justify-between px-5 border-b border-white/5", children: [
          brand,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": "Close menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5",
              children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          SidebarNav,
          {
            items: navItems,
            onNavigate: close,
            groupOrder,
            groupLabels
          }
        ),
        userFooter && /* @__PURE__ */ jsx("div", { className: "border-t border-white/5", children: userFooter })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "md:ml-64 relative z-[2]", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "px-4 py-7 sm:px-7 lg:px-10 animate-fade-in-soft",
        children
      },
      pathname
    ) })
  ] });
}
export {
  ShellLayout
};
