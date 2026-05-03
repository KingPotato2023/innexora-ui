import { ReactNode } from 'react';

interface UnsavedChangesGuard {
    /** Render this anywhere inside the form's tree — the dialog itself
     *  uses portal-style fixed positioning so its DOM location doesn't
     *  matter. */
    dialog: ReactNode;
    /** Suppress the guard for the next navigation. Call this before
     *  programmatic redirects from a successful submit so the success
     *  path isn't confirmed. */
    disable: () => void;
}
declare function useUnsavedChangesGuard(active: boolean): UnsavedChangesGuard;

export { type UnsavedChangesGuard, useUnsavedChangesGuard };
