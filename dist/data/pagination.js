"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pagination_exports = {};
__export(pagination_exports, {
  Pagination: () => Pagination
});
module.exports = __toCommonJS(pagination_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_link = __toESM(require("next/link"));
var import_lucide_react = require("lucide-react");
function buildHref(baseHref, page, searchParams) {
  const params = new URLSearchParams();
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      if (v !== void 0 && k !== "page") params.set(k, v);
    }
  }
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${baseHref}?${qs}` : baseHref;
}
function Pagination({
  currentPage,
  totalPages,
  totalCount,
  pageSize,
  baseHref,
  searchParams
}) {
  if (totalPages <= 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-end px-4 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/55 border-t border-ink/10 tabular-nums", children: [
      totalCount,
      " ",
      totalCount === 1 ? "row" : "rows"
    ] });
  }
  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalCount);
  const prevHref = buildHref(baseHref, currentPage - 1, searchParams);
  const nextHref = buildHref(baseHref, currentPage + 1, searchParams);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const baseBtn = "inline-flex items-center gap-1 rounded-md border border-ink/10 bg-white px-2.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink/80 transition-colors hover:bg-paper-100 hover:text-brand-teal-700 hover:border-ink/20";
  const disabled = "opacity-40 pointer-events-none cursor-not-allowed";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-3 flex-wrap px-4 py-3 border-t border-ink/10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/65 tabular-nums", children: [
      "Showing ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium text-ink-900", children: from }),
      "\u2013",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium text-ink-900", children: to }),
      " of",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium text-ink-900", children: totalCount })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_link.default,
        {
          href: hasPrev ? prevHref : "#",
          "aria-disabled": !hasPrev,
          "aria-label": "Previous page",
          className: `${baseBtn} ${hasPrev ? "" : disabled}`,
          tabIndex: hasPrev ? 0 : -1,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-3.5 w-3.5" }),
            "Prev"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "px-2 text-[11.5px] font-mono uppercase tracking-[0.14em] text-ink/55 tabular-nums", children: [
        "Page ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium text-ink-900", children: currentPage }),
        " of",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium text-ink-900", children: totalPages })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_link.default,
        {
          href: hasNext ? nextHref : "#",
          "aria-disabled": !hasNext,
          "aria-label": "Next page",
          className: `${baseBtn} ${hasNext ? "" : disabled}`,
          tabIndex: hasNext ? 0 : -1,
          children: [
            "Next",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-3.5 w-3.5" })
          ]
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination
});
