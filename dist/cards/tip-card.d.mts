import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function TipCard({ title, children, footer, sticky, icon, className, }: {
    title: string;
    children: ReactNode;
    footer?: ReactNode;
    sticky?: boolean;
    icon?: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TipStrip({ title, children, icon, className, }: {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { TipCard, TipStrip };
