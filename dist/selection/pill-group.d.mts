import * as react_jsx_runtime from 'react/jsx-runtime';

type PillOption = {
    value: string;
    label: string;
    /** Pre-baked "peer-checked:bg-X peer-checked:text-Y peer-checked:ring-Z" */
    selectedClass: string;
};
declare function PillGroup({ name, options, defaultValue, disabled, required, onValueChange, }: {
    name: string;
    options: readonly PillOption[];
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    onValueChange?: (next: string) => void;
}): react_jsx_runtime.JSX.Element;
declare function PillButtons<T extends string>({ options, value, onChange, ariaLabel, variant, }: {
    options: readonly PillOption[];
    value: T;
    onChange: (next: T) => void;
    ariaLabel?: string;
    variant?: "color" | "filter";
}): react_jsx_runtime.JSX.Element;

export { PillButtons, PillGroup, type PillOption };
