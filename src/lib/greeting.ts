// lib/greeting.ts
export type TimeOfDay = "morning" | "afternoon" | "evening" | "late_night";

export interface Greeting {
  greeting: string;
  timeOfDay: TimeOfDay;
  emoji: string;
}

/**
 * Compute time-of-day greeting in the Asia/Dubai timezone.
 * Returns a three-part object so callers can render the emoji separately
 * (e.g., wrapped in aria-hidden) from the text.
 */
export function getGreeting(now: Date, fullName: string): Greeting {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dubai",
      hour: "numeric",
      hour12: false,
    }).format(now),
  );

  const firstName = fullName.trim().split(/\s+/)[0] || "there";

  if (hour >= 5 && hour < 12) {
    return { greeting: `Good morning, ${firstName}`, timeOfDay: "morning", emoji: "☀️" };
  }
  if (hour >= 12 && hour < 18) {
    return { greeting: `Good afternoon, ${firstName}`, timeOfDay: "afternoon", emoji: "☕" };
  }
  if (hour >= 18 && hour < 24) {
    return { greeting: `Good evening, ${firstName}`, timeOfDay: "evening", emoji: "🌙" };
  }
  return { greeting: `Working late, ${firstName}`, timeOfDay: "late_night", emoji: "🌙" };
}
