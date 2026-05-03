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
var daily_quote_exports = {};
__export(daily_quote_exports, {
  dailyQuote: () => dailyQuote
});
module.exports = __toCommonJS(daily_quote_exports);
const QUOTES = [
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Approach each tenant with the idea of helping them solve a problem.", author: "Brian Tracy" },
  { text: "The most effective property managers know that listening is the most important part of the job.", author: "Roy Bartell" },
  { text: "Treat objections as requests for further information.", author: "Brian Tracy" },
  { text: "If you are not taking care of your customer, your competitor will.", author: "Bob Hooey" },
  { text: "Sell the outcome, not the property.", author: "Sales adage" },
  { text: "People don't buy what you do; they buy why you do it.", author: "Simon Sinek" },
  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Slow is smooth, smooth is fast.", author: "U.S. Navy SEALs" },
  { text: "Continuous improvement is better than delayed perfection.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy" },
  { text: "What gets measured gets managed.", author: "Peter Drucker" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "Great things in business are never done by one person; they are done by a team.", author: "Steve Jobs" },
  { text: "Trust is built with consistency.", author: "Lincoln Chafee" },
  { text: "An ounce of action is worth a ton of theory.", author: "Friedrich Engels" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Begin where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "Persistence is the twin sister of excellence.", author: "Marabel Morgan" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "You can't connect the dots looking forward; you can only connect them looking backward.", author: "Steve Jobs" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" }
];
function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 864e5);
}
function dailyQuote(now = /* @__PURE__ */ new Date()) {
  return QUOTES[dayOfYear(now) % QUOTES.length];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dailyQuote
});
