import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, FormHTMLAttributes } from 'react';

declare function ConfirmForm({ message, children, className, ...formProps }: {
    /** Message shown in the confirm() prompt. */
    message: string;
    children: ReactNode;
    className?: string;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "children">): react_jsx_runtime.JSX.Element;

export { ConfirmForm };
