"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const pathname = usePathname();
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
  return /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-6", children: finalOrder.map((key) => {
    const list = buckets.get(key);
    if (!list || list.length === 0) return null;
    const label = key === "" ? void 0 : groupLabels?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
    return /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs("div", { children: [
    label && /* @__PURE__ */ jsx("div", { className: "px-3 pb-2 eyebrow text-white/55", children: label }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-0.5", children: items.map((i) => {
      const Icon = i.icon;
      const active = isActive(pathname, i.href);
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: i.href,
          onClick: onNavigate,
          "aria-current": active ? "page" : void 0,
          className: [
            "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
            active ? "bg-white/[0.07] text-white font-medium" : "text-white/65 hover:bg-white/[0.04] hover:text-white"
          ].join(" "),
          children: [
            active && /* @__PURE__ */ jsxs(
              "span",
              {
                "aria-hidden": "true",
                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 flex h-1.5 w-1.5",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Icon,
              {
                className: [
                  "h-[15px] w-[15px] shrink-0 transition-colors",
                  active ? "text-brand-teal-300" : "text-white/45 group-hover:text-white/85"
                ].join(" ")
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "truncate tracking-[-0.005em]", children: i.label })
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
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick,
      className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100",
      "aria-label": open ? "Close menu" : "Open menu",
      children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
    }
  );
}
export {
  MobileMenuButton,
  SidebarNav
};
