type TimeOfDay = "morning" | "afternoon" | "evening" | "late_night";
interface Greeting {
    greeting: string;
    timeOfDay: TimeOfDay;
    emoji: string;
}
/**
 * Compute time-of-day greeting in the Asia/Dubai timezone.
 * Returns a three-part object so callers can render the emoji separately
 * (e.g., wrapped in aria-hidden) from the text.
 */
declare function getGreeting(now: Date, fullName: string): Greeting;

export { type Greeting, type TimeOfDay, getGreeting };
