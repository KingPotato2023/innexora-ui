import * as React from 'react';

type KanbanStage = {
    key: string;
    label: string;
};
type KanbanBoardProps<T extends {
    id: string;
}> = {
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
declare function KanbanBoard<T extends {
    id: string;
}>({ stages, items, stageKey, renderCard, onMove, canMove, cardHref, }: KanbanBoardProps<T>): React.JSX.Element;

export { KanbanBoard, type KanbanBoardProps, type KanbanStage };
