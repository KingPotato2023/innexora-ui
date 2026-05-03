"use strict";
"use client";
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
var kanban_board_exports = {};
__export(kanban_board_exports, {
  KanbanBoard: () => KanbanBoard
});
module.exports = __toCommonJS(kanban_board_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_link = __toESM(require("next/link"));
function KanbanBoard({
  stages,
  items,
  stageKey,
  renderCard,
  onMove,
  canMove = false,
  cardHref
}) {
  const [, startTransition] = (0, import_react.useTransition)();
  const [optimistic, setOptimistic] = (0, import_react.useOptimistic)(
    items,
    (state, change) => {
      return state.map(
        (it) => it.id === change.id ? { ...it, __optimisticStage: change.stage } : it
      );
    }
  );
  const resolveStage = (it) => {
    const override = it.__optimisticStage;
    return override ?? stageKey(it);
  };
  const byStage = {};
  for (const s of stages) byStage[s.key] = [];
  for (const it of optimistic) {
    const key = resolveStage(it);
    (byStage[key] ??= []).push(it);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "stagger flex md:grid md:grid-cols-3 xl:grid-cols-6 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0",
      children: stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Column,
        {
          stage,
          cards: byStage[stage.key] ?? [],
          canDrop: canMove,
          renderCard,
          cardHref,
          onDrop: (id) => {
            if (!canMove || !onMove) return;
            startTransition(async () => {
              setOptimistic({ id, stage: stage.key });
              await onMove(id, stage.key);
            });
          }
        },
        stage.key
      ))
    }
  );
}
function Column({
  stage,
  cards,
  canDrop,
  onDrop,
  renderCard,
  cardHref
}) {
  const [over, setOver] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      onDragOver: (e) => {
        if (!canDrop) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (!over) setOver(true);
      },
      onDragLeave: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOver(false);
      },
      onDrop: (e) => {
        if (!canDrop) return;
        e.preventDefault();
        setOver(false);
        const id = e.dataTransfer.getData("text/plain");
        if (id) onDrop(id);
      },
      className: "shrink-0 md:shrink min-w-[280px] md:min-w-0 snap-start md:snap-align-none rounded-lg border p-3 min-h-[220px] transition-colors " + (over ? "border-brand-indigo-400 bg-brand-indigo-50/60 ring-2 ring-brand-indigo-200" : "border-ink/10 bg-paper-100/70"),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "eyebrow text-brand-indigo-700", children: stage.label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[11px] font-mono tabular-nums text-ink/55", children: cards.length })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: "space-y-2", children: [
          cards.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            CardWrapper,
            {
              item,
              draggable: canDrop,
              cardHref,
              children: renderCard(item)
            }
          ) }, item.id)),
          cards.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: "text-[11px] text-ink/40 italic px-1 py-2", children: "No items" })
        ] })
      ]
    }
  );
}
function CardWrapper({
  item,
  draggable,
  cardHref,
  children
}) {
  const className = "card-interactive block p-3 text-sm select-none " + (draggable ? "cursor-grab active:cursor-grabbing" : "");
  const onDragStart = (e) => {
    if (!draggable) return;
    e.dataTransfer.setData("text/plain", item.id);
    e.dataTransfer.effectAllowed = "move";
  };
  if (cardHref) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_link.default,
      {
        href: cardHref(item),
        draggable,
        onDragStart,
        className,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      draggable,
      onDragStart,
      className,
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KanbanBoard
});
