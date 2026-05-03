import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function PageHero({ icon, title, description, meta, actions, kicker, }: {
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    /** Optional eyebrow above the title, e.g. "Sales · Master Tracker". */
    kicker?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PageHeader({ title, description, actions, kicker, }: {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    /** Optional eyebrow above the title. */
    kicker?: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { PageHeader, PageHero };
