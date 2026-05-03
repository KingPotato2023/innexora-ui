import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function FormCard({ children, className, }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function FormSplitBody({ left, right, }: {
    left: ReactNode;
    right: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormSection({ title, icon, children, }: {
    title: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormActions({ primary, destructive, }: {
    /** The Save / Submit button — gets pushed to the right via ml-auto. */
    primary: ReactNode;
    /** Optional Delete (or other destructive) button — sits on the left. */
    destructive?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormError({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element | null;

export { FormActions, FormCard, FormError, FormSection, FormSplitBody };
