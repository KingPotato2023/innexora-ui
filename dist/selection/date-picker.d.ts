import * as react_jsx_runtime from 'react/jsx-runtime';

declare function DatePicker({ name, defaultValue, required, placeholder, className, id, disabled, fromYear, toYear, withTime, onChange, }: {
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
    /**
     * Optional notification channel — fires with the formatted ISO string
     * (or "" when cleared) on every value change. The picker still owns
     * its own state and writes the hidden <input>; consumers (e.g. RHF
     * `<Controller>`) pass `onChange` only to mirror the value into their
     * own state for dirty / validation tracking.
     */
    onChange?: (value: string) => void;
}): react_jsx_runtime.JSX.Element;

export { DatePicker };
