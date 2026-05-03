"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useOptimistic, useTransition, useState } from "react";
import Link from "next/link";
function KanbanBoard({
  stages,
  items,
  stageKey,
  renderCard,
  onMove,
  canMove = false,
  cardHref
}) {
  const [, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic(
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "stagger flex md:grid md:grid-cols-3 xl:grid-cols-6 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0",
      children: stages.map((stage) => /* @__PURE__ */ jsx(
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
  const [over, setOver] = useState(false);
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "eyebrow text-brand-indigo-700", children: stage.label }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono tabular-nums text-ink/55", children: cards.length })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          cards.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            CardWrapper,
            {
              item,
              draggable: canDrop,
              cardHref,
              children: renderCard(item)
            }
          ) }, item.id)),
          cards.length === 0 && /* @__PURE__ */ jsx("li", { className: "text-[11px] text-ink/40 italic px-1 py-2", children: "No items" })
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
    return /* @__PURE__ */ jsx(
      Link,
      {
        href: cardHref(item),
        draggable,
        onDragStart,
        className,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      draggable,
      onDragStart,
      className,
      children
    }
  );
}
export {
  KanbanBoard
};
