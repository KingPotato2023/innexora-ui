// Operations hero — the daily-brief banner at the top of /home.
// Split layout: an editorial greeting on the left beside a slow-drifting
// brand-gradient pane on the right. The right pane carries hero-grade
// stats in tabular numerals; the left pane carries the greeting + a
// "live" beacon and CTAs into the most-used surfaces.
//
// v0.1.6 polish —
//   - The H1 embeds a brass-pill monogram of the user's initials inline
//     (`.hero-avatar-pill`), anchoring the brief to the user mid-sentence.
//   - CTAs use the `.cta-pill` button-in-button architecture (trailing
//     arrow translates diagonally on hover) instead of underline-draw
//     text links. Magnetic 1-pixel lift via `--ease-drawer`.
//   - The "live" indicator now uses the shared `.live-beacon` markup —
//     ring expands and fades, core stays fixed.

import { format } from "date-fns";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getGreeting } from "../lib/greeting";

interface ManagerHeroProps {
  userName: string;
  openRequests: number;
  activeWorkOrders: number;
  outstandingAed: number;
  propertyCount: number;
  now?: Date;
  /** Optional override for the secondary "<segment> · Briefing" kicker. */
  briefingLabel?: string;
}

function formatAedShort(value: number): string {
  if (!Number.isFinite(value) || value === 0) return "AED 0";
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `AED ${Math.round(value / 1_000)}k`;
  return `AED ${Math.round(value)}`;
}

export function ManagerHero({
  userName,
  openRequests,
  activeWorkOrders,
  outstandingAed,
  propertyCount,
  now = new Date(),
  briefingLabel = "Properties · Briefing",
}: ManagerHeroProps) {
  const { greeting } = getGreeting(now, userName);
  const weekday = format(now, "EEEE, MMMM d, yyyy");
  const issueDate = format(now, "yyyy.MM.dd");
  const overdue = openRequests > 0 || activeWorkOrders > 0;
  const firstName = userName.split(" ")[0] ?? "there";
  const initials =
    userName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((s) => s[0]?.toUpperCase() ?? "")
      .join("") || "?";

  return (
    <section
      aria-label="Operations overview"
      className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-paper"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,142,134,0.6) 35%, rgba(46,49,145,0.6) 65%, transparent 100%)",
        }}
      />

      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* ── Left pane: editorial greeting ───────────────────────────── */}
        <div className="relative px-7 py-8 sm:px-9 sm:py-10">
          <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink/55 font-mono">
            <span>Issue {issueDate}</span>
            <span className="vrule" />
            <span>{briefingLabel}</span>
          </div>

          <h1 className="mt-5 font-display font-semibold text-[36px] sm:text-[44px] leading-[1.06] tracking-[-0.022em] text-ink-900">
            {greeting.split(",")[0]},{" "}
            <span className="hero-avatar-pill" aria-hidden="true">
              {initials}
            </span>{" "}
            <span className="display-em">{firstName}</span>.
          </h1>

          <p className="mt-3 text-sm text-ink/65">
            <span className="text-ink/80">{weekday}</span>
            {!overdue && (
              <>
                <span className="vrule" />
                Nothing pressing — clear deck
              </>
            )}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-100 px-3 py-1.5 text-[11.5px] font-medium text-ink/75">
            <span className="live-beacon">
              <span className="live-beacon__ring" aria-hidden="true" />
              <span className="live-beacon__core" aria-hidden="true" />
            </span>
            <span>
              <span className="font-mono tabular-nums">{propertyCount}</span>
              <span className="text-ink/50"> properties under management</span>
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
            <CtaPill href="/service-requests" primary>
              Open service requests
            </CtaPill>
            <CtaPill href="/work-orders">View work orders</CtaPill>
            <CtaPill href="/properties">Properties register</CtaPill>
          </div>
        </div>

        {/* ── Right pane: hero gradient ───────────────────────────────── */}
        <div className="relative bg-hero-gradient overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-32 motion-safe:animate-aurora-drift"
            style={{
              background:
                "radial-gradient(40% 50% at 30% 35%, rgba(1,182,173,0.32), transparent 65%), radial-gradient(35% 45% at 75% 70%, rgba(46,49,145,0.28), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(1,182,173,0.18), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative p-7 sm:p-9 h-full flex flex-col justify-between gap-8">
            <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/70 font-mono">
              <span>The Ledger</span>
              <span className="inline-block h-px w-6 bg-white/35" />
              <span>Live</span>
            </div>

            <dl className="stagger grid grid-cols-3 gap-5 sm:gap-7">
              <HeroStat
                label="Open requests"
                value={openRequests.toString()}
                urgent={openRequests > 0}
              />
              <HeroStat
                label="Work orders"
                value={activeWorkOrders.toString()}
              />
              <HeroStat
                label="Outstanding"
                value={formatAedShort(outstandingAed)}
                urgent={outstandingAed > 0}
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaPill({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        "cta-pill " + (primary ? "cta-pill--primary" : "cta-pill--ghost")
      }
    >
      <span>{children}</span>
      <span aria-hidden="true" className="cta-pill__arrow">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

function HeroStat({
  label,
  value,
  urgent,
}: {
  label: string;
  value: string;
  urgent?: boolean;
}) {
  return (
    <div>
      <dd
        className={
          "font-display font-semibold tabular-nums text-[44px] sm:text-[56px] leading-none tracking-[-0.028em] " +
          (urgent ? "text-amber-200" : "text-white")
        }
      >
        {value}
      </dd>
      <dt className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/65 font-mono">
        {label}
      </dt>
    </div>
  );
}
