"use client";

// Live local-time clock for the sidebar footer. Updates every 30s.
// Renders nothing on the server (initial pass) to avoid a hydration
// mismatch caused by the user's local TZ disagreeing with the server.

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

function fmt(d: Date) {
  const time = d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = d.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  return { time, date };
}

export function LocalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  if (!now) {
    return (
      <div className="flex items-center gap-2 text-[10.5px] text-white/40 font-mono tabular-nums">
        &nbsp;
      </div>
    );
  }

  const { time, date } = fmt(now);
  return (
    <div className="flex items-center gap-2 text-[10.5px] text-white/55 font-mono tabular-nums">
      <Clock className="h-3 w-3 text-white/40" aria-hidden="true" />
      <span className="text-white/80">{time}</span>
      <span className="h-2.5 w-px bg-white/15" aria-hidden="true" />
      <span>{date}</span>
    </div>
  );
}
