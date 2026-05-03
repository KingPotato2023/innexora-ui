"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var shell_layout_exports = {};
__export(shell_layout_exports, {
  ShellLayout: () => ShellLayout
});
module.exports = __toCommonJS(shell_layout_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_navigation = require("next/navigation");
var import_lucide_react = require("lucide-react");
var import_sidebar_nav = require("./sidebar-nav");
function ShellLayout({
  children,
  navItems,
  brand,
  userFooter,
  groupOrder,
  groupLabels
}) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const close = () => setOpen(false);
  const pathname = (0, import_navigation.usePathname)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        "data-app-chrome": true,
        className: "md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-ink/10 bg-paper-100/85 backdrop-blur px-4 py-2.5",
        children: [
          brand,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setOpen((v) => !v),
              "aria-label": open ? "Close menu" : "Open menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-ink/80 hover:bg-ink/5",
              children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "h-5 w-5" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "aside",
      {
        "data-app-chrome": true,
        className: "hidden md:flex sidebar-surface fixed inset-y-0 left-0 w-64 flex-col z-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-teal-500/35 to-transparent"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-16 items-center px-5 border-b border-white/5", children: brand }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_sidebar_nav.SidebarNav,
            {
              items: navItems,
              groupOrder,
              groupLabels
            }
          ),
          userFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-white/5", children: userFooter })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "md:hidden fixed inset-0 z-40", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in-soft",
          onClick: close,
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "absolute inset-y-0 left-0 w-72 max-w-[85%] sidebar-surface flex flex-col shadow-paper-lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex h-16 items-center justify-between px-5 border-b border-white/5", children: [
          brand,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              onClick: close,
              "aria-label": "Close menu",
              className: "inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_sidebar_nav.SidebarNav,
          {
            items: navItems,
            onNavigate: close,
            groupOrder,
            groupLabels
          }
        ),
        userFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-white/5", children: userFooter })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "md:ml-64 relative z-[2]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "px-4 py-7 sm:px-7 lg:px-10 animate-fade-in-soft",
        children
      },
      pathname
    ) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShellLayout
});
