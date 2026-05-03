"use client";

// Generic HTML5-native drag-and-drop kanban board.
//
// Entity-agnostic — the consumer supplies:
//   – stages:    column definitions in display order
//   – items:     a flat array of records, each carrying an `id`
//   – stageKey:  reads the current stage from a record (e.g. (it) => it.status)
//   – renderCard: renders the card body (the package owns the wrapper +
//                 drag plumbing + ring/hover states)
//   – onMove:    optional async server action invoked on drop
//   – canMove:   gates the drag affordance (cursor-grab + draggable=true)
//   – cardHref:  optional — wraps each card in a <Link> to this href
//
// Optimistic updates use `useOptimistic` + `useTransition` so cards snap
// into the destination column the moment the user drops; the server
// action runs in the background. Mobile collapses to a horizontal
// snap-x scroll so the pipeline reads left-to-right at every viewport.
//
// Drop-target column gets the brand-indigo-400 border + brand-indigo-50
// fill + ring-2 ring-brand-indigo-200. Empty column shows italic "No
// items".

import * as React from "react";
import { useOptimistic, useTransition, useState } from "react";
import Link from "next/link";

export type KanbanStage = { key: string; label: string };

export type KanbanBoardProps<T extends { id: string }> = {
  stages: ReadonlyArray<KanbanStage>;
  items: ReadonlyArray<T>;
  /** Returns the stage key for an item — usually `(it) => it.stage` or `(it) => it.status`. */
  stageKey: (item: T) => string;
  /** Render the card body (the package handles the wrapper, drag plumbing, ring/hover state). */
  renderCard: (item: T) => React.ReactNode;
  /** Server action invoked on drop. Receives the item id and the destination stage key. */
  onMove?: (id: string, toStage: string) => void | Promise<void>;
  /** Gates the drag affordance (cursor-grab + draggable=true). Per-record check still in onMove. */
  canMove?: boolean;
  /** Optional — wraps each card in a Link to this href. */
  cardHref?: (item: T) => string;
};

export function KanbanBoard<T extends { id: string }>({
  stages,
  items,
  stageKey,
  renderCard,
  onMove,
  canMove = false,
  cardHref,
}: KanbanBoardProps<T>): React.JSX.Element {
  const [, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic(
    items,
    (
      state: ReadonlyArray<T>,
      change: { id: string; stage: string },
    ): ReadonlyArray<T> => {
      // We only need the optimistic stage to bucket cards into columns;
      // we don't know which field to mutate on the user's record, so we
      // attach the optimistic stage as a non-enumerable shadow property
      // and read it preferentially when bucketing.
      return state.map((it) =>
        it.id === change.id
          ? ({ ...(it as object), __optimisticStage: change.stage } as unknown as T)
          : it,
      );
    },
  );

  // Resolve the stage key for an item, preferring an in-flight optimistic
  // override over the real value.
  const resolveStage = (it: T): string => {
    const override = (it as unknown as { __optimisticStage?: string }).__optimisticStage;
    return override ?? stageKey(it);
  };

  const byStage: Record<string, T[]> = {};
  for (const s of stages) byStage[s.key] = [];
  for (const it of optimistic) {
    const key = resolveStage(it);
    (byStage[key] ??= []).push(it);
  }

  return (
    <div
      className={
        "stagger flex md:grid md:grid-cols-3 xl:grid-cols-6 gap-3 " +
        "overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none " +
        "-mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0"
      }
    >
      {stages.map((stage) => (
        <Column
          key={stage.key}
          stage={stage}
          cards={byStage[stage.key] ?? []}
          canDrop={canMove}
          renderCard={renderCard}
          cardHref={cardHref}
          onDrop={(id) => {
            if (!canMove || !onMove) return;
            startTransition(async () => {
              setOptimistic({ id, stage: stage.key });
              await onMove(id, stage.key);
            });
          }}
        />
      ))}
    </div>
  );
}

function Column<T extends { id: string }>({
  stage,
  cards,
  canDrop,
  onDrop,
  renderCard,
  cardHref,
}: {
  stage: KanbanStage;
  cards: T[];
  canDrop: boolean;
  onDrop: (id: string) => void;
  renderCard: (item: T) => React.ReactNode;
  cardHref?: (item: T) => string;
}) {
  const [over, setOver] = useState(false);
  return (
    <div
      onDragOver={(e) => {
        if (!canDrop) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (!over) setOver(true);
      }}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOver(false);
      }}
      onDrop={(e) => {
        if (!canDrop) return;
        e.preventDefault();
        setOver(false);
        const id = e.dataTransfer.getData("text/plain");
        if (id) onDrop(id);
      }}
      className={
        "shrink-0 md:shrink min-w-[280px] md:min-w-0 snap-start md:snap-align-none " +
        "rounded-lg border p-3 min-h-[220px] transition-colors " +
        (over
          ? "border-brand-indigo-400 bg-brand-indigo-50/60 ring-2 ring-brand-indigo-200"
          : "border-ink/10 bg-paper-100/70")
      }
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="eyebrow text-brand-indigo-700">{stage.label}</h3>
        <span className="text-[11px] font-mono tabular-nums text-ink/55">
          {cards.length}
        </span>
      </div>
      <ul className="space-y-2">
        {cards.map((item) => (
          <li key={item.id}>
            <CardWrapper
              item={item}
              draggable={canDrop}
              cardHref={cardHref}
            >
              {renderCard(item)}
            </CardWrapper>
          </li>
        ))}
        {cards.length === 0 && (
          <li className="text-[11px] text-ink/40 italic px-1 py-2">No items</li>
        )}
      </ul>
    </div>
  );
}

function CardWrapper<T extends { id: string }>({
  item,
  draggable,
  cardHref,
  children,
}: {
  item: T;
  draggable: boolean;
  cardHref?: (item: T) => string;
  children: React.ReactNode;
}) {
  const className =
    "card-interactive block p-3 text-sm select-none " +
    (draggable ? "cursor-grab active:cursor-grabbing" : "");

  const onDragStart = (e: React.DragEvent) => {
    if (!draggable) return;
    e.dataTransfer.setData("text/plain", item.id);
    e.dataTransfer.effectAllowed = "move";
  };

  if (cardHref) {
    return (
      <Link
        href={cardHref(item)}
        draggable={draggable}
        onDragStart={onDragStart}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      className={className}
    >
      {children}
    </div>
  );
}
