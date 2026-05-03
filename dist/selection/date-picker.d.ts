import * as react_jsx_runtime from 'react/jsx-runtime';

declare function DatePicker({ name, defaultValue, required, placeholder, className, id, disabled, fromYear, toYear, withTime, }: {
    name: string;
    /** ISO string. Date-only mode: "yyyy-mm-dd". DateTime mode: "yyyy-mm-ddThh:mm". */
    defaultValue?: string | null;
    required?: boolean;
    placeholder?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
    fromYear?: number;
    toYear?: number;
    withTime?: boolean;
}): react_jsx_runtime.JSX.Element;

export { DatePicker };
