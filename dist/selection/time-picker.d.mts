import * as react_jsx_runtime from 'react/jsx-runtime';

declare function TimePicker({ name, defaultValue, required, placeholder, className, id, disabled, onChange, }: {
    name: string;
    /** "HH:MM" 24-hour string, or empty / null. */
    defaultValue?: string | null;
    required?: boolean;
    placeholder?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
    /** Optional notification channel — fires with "HH:MM" (or "" when cleared). */
    onChange?: (value: string) => void;
}): react_jsx_runtime.JSX.Element;

export { TimePicker };
