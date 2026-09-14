import * as react_jsx_runtime from 'react/jsx-runtime';

declare function DatePicker({ name, defaultValue, required, placeholder, className, id, disabled, fromYear, toYear, withTime, onChange, min, max, triggerClassName, ariaLabel, formatLabel, }: {
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
    /** Earliest selectable day, "yyyy-mm-dd". Earlier days are struck out. */
    min?: string;
    /** Latest selectable day, "yyyy-mm-dd". */
    max?: string;
    /** Classes for the trigger button itself (height, text size). `className` styles the wrapper. */
    triggerClassName?: string;
    /** The field's name for assistive tech; the trigger is announced as "<ariaLabel>: <value>". */
    ariaLabel?: string;
    /**
     * Formats the trigger label. Pass one that prints the same text on server and
     * browser (e.g. built from date parts) to match the rest of an app; without it
     * the label is "d Mon yyyy" until mount, then the viewer's locale.
     */
    formatLabel?: (date: Date) => string;
}): react_jsx_runtime.JSX.Element;

export { DatePicker };
