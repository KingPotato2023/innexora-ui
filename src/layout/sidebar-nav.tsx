"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Parameterised SidebarNav — consumer apps supply their own item array via
// the `items` prop. Each item carries a Lucide-component icon (already
// resolved on the consumer side) so this file has no string-to-icon map
// of its own. That keeps the package free of any opinion about which
// product surfaces exist.
//
// Items can optionally carry a `group` so the consumer can render them
// under "Work", "Admin", "Account" headings. The package renders an
// uppercase `.eyebrow` heading above each named group; ungrouped items
// render in a single block at the top.
//
// Active marker: a brass-teal dot with a soft outward pulse, decorated
// only — accessibility comes from `aria-current="page"` on the link.

export type SidebarNavItem = {
  href: string;
  label: string;
  /** Lucide icon component (already imported by the consumer). */
  icon: React.ComponentType<{ className?: string }>;
  /** Optional grouping bucket. Ungrouped items render under no heading. */
  group?: string;
};

function isActive(pathname: string, href: string): boolean {
  if (pathname === href) return true;
  return pathname.startsWith(href + "/");
}

export function SidebarNav({
  items,
  onNavigate,
  groupOrder,
  groupLabels,
}: {
  items: ReadonlyArray<SidebarNavItem>;
  onNavigate?: () => void;
  /** Display order of groups. Defaults to the order groups appear in `items`. */
  groupOrder?: ReadonlyArray<string>;
  /** Override the eyebrow label for a group. Defaults to capitalised key. */
  groupLabels?: Record<string, string>;
}) {
  const pathname = usePathname();

  // Bucket items by group key. Items without a `group` go into a leading
  // "" bucket which renders without a label.
  const buckets = new Map<string, SidebarNavItem[]>();
  const order: string[] = [];
  for (const item of items) {
    const key = item.group ?? "";
    if (!buckets.has(key)) {
      buckets.set(key, []);
      order.push(key);
    }
    buckets.get(key)!.push(item);
  }

  const finalOrder = groupOrder ?? order;
  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
      {finalOrder.map((key) => {
        const list = buckets.get(key);
        if (!list || list.length === 0) return null;
        const label = key === ""
          ? undefined
          : groupLabels?.[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <SidebarGroup
            key={key || "__ungrouped"}
            label={label}
            items={list}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        );
      })}
    </nav>
  );
}

function SidebarGroup({
  label,
  items,
  pathname,
  onNavigate,
}: {
  label?: string;
  items: SidebarNavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div>
      {label && (
        <div className="px-3 pb-2 eyebrow text-white/55">
          {label}
        </div>
      )}
      <ul className="space-y-0.5">
        {items.map((i) => {
          const Icon = i.icon;
          const active = isActive(pathname, i.href);
          return (
            <li key={i.href}>
              <Link
                href={i.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={[
                  "group relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition-all duration-200",
                  active
                    ? "bg-white/[0.07] text-white font-medium"
                    : "text-white/65 hover:bg-white/[0.04] hover:text-white",
                ].join(" ")}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 flex h-1.5 w-1.5"
                  >
                    <span className="absolute inline-flex h-full w-full motion-safe:animate-dot-pulse rounded-full bg-brand-teal-400" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal-500" />
                  </span>
                )}
                <Icon
                  className={[
                    "h-[15px] w-[15px] shrink-0 transition-colors",
                    active
                      ? "text-brand-teal-300"
                      : "text-white/45 group-hover:text-white/85",
                  ].join(" ")}
                />
                <span className="truncate tracking-[-0.005em]">{i.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function MobileMenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}
