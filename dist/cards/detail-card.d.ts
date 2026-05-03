import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function DetailSection({ title, icon, action, children, className, }: {
    title: string;
    icon: ReactNode;
    /** Optional right-aligned slot — typically a Button (Add child, Edit, …). */
    action?: ReactNode;
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DetailGrid({ children, cols, }: {
    children: ReactNode;
    /** 2 (default) or 1 — single-column for narrow surfaces. */
    cols?: 1 | 2;
}): react_jsx_runtime.JSX.Element;
declare function DetailRow({ icon, label, value, span, }: {
    /** Lucide icon — usually `<Mail className="h-3.5 w-3.5" />` etc. */
    icon: ReactNode;
    label: string;
    value: ReactNode;
    /** Set to 2 to make the row span both columns of a DetailGrid. */
    span?: 1 | 2;
}): react_jsx_runtime.JSX.Element;

export { DetailGrid, DetailRow, DetailSection };
