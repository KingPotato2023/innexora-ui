function getGreeting(now, fullName) {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dubai",
      hour: "numeric",
      hour12: false
    }).format(now)
  );
  const firstName = fullName.trim().split(/\s+/)[0] || "there";
  if (hour >= 5 && hour < 12) {
    return { greeting: `Good morning, ${firstName}`, timeOfDay: "morning", emoji: "\u2600\uFE0F" };
  }
  if (hour >= 12 && hour < 18) {
    return { greeting: `Good afternoon, ${firstName}`, timeOfDay: "afternoon", emoji: "\u2615" };
  }
  if (hour >= 18 && hour < 24) {
    return { greeting: `Good evening, ${firstName}`, timeOfDay: "evening", emoji: "\u{1F319}" };
  }
  return { greeting: `Working late, ${firstName}`, timeOfDay: "late_night", emoji: "\u{1F319}" };
}
export {
  getGreeting
};
