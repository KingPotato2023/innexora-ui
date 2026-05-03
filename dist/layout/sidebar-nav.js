"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var sidebar_nav_exports = {};
__export(sidebar_nav_exports, {
  MobileMenuButton: () => MobileMenuButton,
  SidebarNav: () => SidebarNav
});
module.exports = __toCommonJS(sidebar_nav_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_link = __toESM(require("next/link"));
var import_navigation = require("next/navigation");
var import_lucide_react = require("lucide-react");
function isActive(pathname, href) {
  if (pathname === href) return true;
  return pathname.startsWith(href + "/");
}
function SidebarNav({
  items,
  onNavigate,
  groupOrder,
  groupLabels
}) {
  const pathname = (0, import_navigation.usePathname)();
  const buckets = /* @__PURE__ */ new Map();
  const order = [];
  for (const item of items) {
    const key = item.group ?? "";
    if (!buckets.has(key)) {
      buckets.set(key, []);
      order.push(key);
    }
    buckets.get(key).push(item);
  }
  const finalOrder = groupOrder ?? order;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-6", children: finalOrder.map((key) => {
    const list = buckets.get(key);
    if (!list || list.length === 0) return null;
    const label = key === "" ? void 0 : groupLabels?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      SidebarGroup,
      {
        label,
        items: list,
        pathname,
        onNavigate
      },
      key || "__ungrouped"
    );
  }) });
}
function SidebarGroup({
  label,
  items,
  pathname,
  onNavigate
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "px-3 pb-2 eyebrow text-white/55", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { className: "space-y-0.5", children: items.map((i) => {
      const Icon = i.icon;
      const active = isActive(pathname, i.href);
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_link.default,
        {
          href: i.href,
          onClick: onNavigate,
          "aria-current": active ? "page" : void 0,
          className: [
            "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
            active ? "bg-white/[0.07] text-white font-medium" : "text-white/65 hover:bg-white/[0.04] hover:text-white"
          ].join(" "),
          children: [
            active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "span",
              {
                "aria-hidden": "true",
                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 flex h-1.5 w-1.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Icon,
              {
                className: [
                  "h-[15px] w-[15px] shrink-0 transition-colors",
                  active ? "text-brand-teal-300" : "text-white/45 group-hover:text-white/85"
                ].join(" ")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate tracking-[-0.005em]", children: i.label })
          ]
        }
      ) }, i.href);
    }) })
  ] });
}
function MobileMenuButton({
  open,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      onClick,
      className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100",
      "aria-label": open ? "Close menu" : "Open menu",
      children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "h-5 w-5" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MobileMenuButton,
  SidebarNav
});
