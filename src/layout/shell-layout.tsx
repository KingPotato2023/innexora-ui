"use client";

import * as React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SidebarNav, type SidebarNavItem } from "./sidebar-nav";

// Editorial Atlas shell — generic, app-data-injected.
//
// Desktop: a deep-indigo (ink-900) sidebar against the cream paper canvas.
// The dark column gives the app its distinctive asymmetric L-frame and
// pushes brand identity to the chrome rather than into the data view.
// This is *not* dark mode (there is no theme toggle and the main canvas
// stays bright); it's a fixed surface choice.
//
// The package owns the visual frame. The consumer supplies:
//   – navItems: the routes, each with a pre-resolved icon component
//   – brand:    a ReactNode for the top-left wordmark
//   – userFooter: a ReactNode for the bottom-of-sidebar profile + signout
//
// Group ordering / labels are passed through to SidebarNav.

export function ShellLayout({
  children,
  navItems,
  brand,
  userFooter,
  groupOrder,
  groupLabels,
}: {
  children: React.ReactNode;
  navItems: ReadonlyArray<SidebarNavItem>;
  /** Top-left wordmark / logo. */
  brand: React.ReactNode;
  /** Bottom-of-sidebar block (avatar + name + signout, etc). */
  userFooter?: React.ReactNode;
  /** Forwarded to SidebarNav. */
  groupOrder?: ReadonlyArray<string>;
  /** Forwarded to SidebarNav. */
  groupLabels?: Record<string, string>;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      {/* Mobile top bar — keeps the cream canvas on mobile (no dark bar
          would feel jarring at this size). The bottom border is a
          hairline ink rule, not the default neutral, so it harmonises
          with the rest of the system. */}
      <div
        data-app-chrome
        className="md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-ink/10 bg-paper-100/85 backdrop-blur px-4 py-2.5"
      >
        {brand}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink/80 hover:bg-ink/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop sidebar — dark editorial surface. */}
      <aside
        data-app-chrome
        className="hidden md:flex sidebar-surface fixed inset-y-0 left-0 w-64 flex-col z-20"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-teal-500/35 to-transparent"
        />
        <div className="flex h-16 items-center px-5 border-b border-white/5">
          {brand}
        </div>
        <SidebarNav
          items={navItems}
          groupOrder={groupOrder}
          groupLabels={groupLabels}
        />
        {userFooter && <div className="border-t border-white/5">{userFooter}</div>}
      </aside>

      {/* Mobile drawer — same dark surface as desktop. */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in-soft"
            onClick={close}
            aria-hidden
          />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[85%] sidebar-surface flex flex-col shadow-paper-lg">
            <div className="flex h-16 items-center justify-between px-5 border-b border-white/5">
              {brand}
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarNav
              items={navItems}
              onNavigate={close}
              groupOrder={groupOrder}
              groupLabels={groupLabels}
            />
            {userFooter && <div className="border-t border-white/5">{userFooter}</div>}
          </aside>
        </div>
      )}

      <main className="md:ml-64 relative z-[2]">
        <div
          key={pathname}
          className="px-4 py-7 sm:px-7 lg:px-10 animate-fade-in-soft"
        >
          {children}
        </div>
      </main>
    </div>
  );
}
