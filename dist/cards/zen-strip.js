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
var zen_strip_exports = {};
__export(zen_strip_exports, {
  ZenStrip: () => ZenStrip
});
module.exports = __toCommonJS(zen_strip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_daily_quote = require("../lib/daily-quote");
const ZEN_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop",
    alt: "Mountain lake at sunset"
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80&auto=format&fit=crop",
    alt: "Winding road through misty mountains"
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
    alt: "Sunlight through a foggy forest"
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80&auto=format&fit=crop",
    alt: "Rolling green hills"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop",
    alt: "Mountain panorama at dawn"
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&q=80&auto=format&fit=crop",
    alt: "Autumn forest path"
  },
  {
    url: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1600&q=80&auto=format&fit=crop",
    alt: "Calm lake with wooden pier"
  }
];
function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 864e5);
}
function ZenStrip({ variant = "strip" }) {
  const today = /* @__PURE__ */ new Date();
  const idx = dayOfYear(today) % ZEN_IMAGES.length;
  const pick = ZEN_IMAGES[idx];
  const quote = (0, import_daily_quote.dailyQuote)(today);
  const isCard = variant === "card";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: "relative w-full overflow-hidden rounded-xl border border-ink/10 shadow-paper " + (isCard ? "h-full min-h-[320px]" : "h-[200px] sm:h-[240px]"),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "img",
          {
            src: pick.url,
            alt: "",
            loading: "lazy",
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: "absolute inset-x-0 bottom-0 px-5 pb-5 text-white " + (isCard ? "sm:px-6 sm:pb-6" : "sm:px-7 sm:pb-6"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "blockquote",
                {
                  className: "italic font-medium leading-snug drop-shadow-sm " + (isCard ? "text-[15px] sm:text-[16px]" : "text-[15px] sm:text-[17px]"),
                  children: [
                    "\u201C",
                    quote.text,
                    "\u201D"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: "mt-2 text-white " + (isCard ? "text-xs" : "text-[12px]"),
                  children: [
                    "\u2014 ",
                    quote.author
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ZenStrip
});
