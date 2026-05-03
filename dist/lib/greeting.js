"use strict";
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
var greeting_exports = {};
__export(greeting_exports, {
  getGreeting: () => getGreeting
});
module.exports = __toCommonJS(greeting_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGreeting
});
