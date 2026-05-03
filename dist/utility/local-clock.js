"use strict";
"use client";
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
var local_clock_exports = {};
__export(local_clock_exports, {
  LocalClock: () => LocalClock
});
module.exports = __toCommonJS(local_clock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_lucide_react = require("lucide-react");
function fmt(d) {
  const time = d.toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  const date = d.toLocaleDateString(void 0, {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });
  return { time, date };
}
function LocalClock() {
  const [now, setNow] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    setNow(/* @__PURE__ */ new Date());
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
    return () => clearInterval(t);
  }, []);
  if (!now) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-2 text-[10.5px] text-white/40 font-mono tabular-nums", children: "\xA0" });
  }
  const { time, date } = fmt(now);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 text-[10.5px] text-white/55 font-mono tabular-nums", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Clock, { className: "h-3 w-3 text-white/40", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-white/80", children: time }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-px bg-white/15", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: date })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LocalClock
});
