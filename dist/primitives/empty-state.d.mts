import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function EmptyState({ icon, title, description, action, }: {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}): react_jsx_runtime.JSX.Element;

export { EmptyState };
