import * as react_jsx_runtime from 'react/jsx-runtime';

type HiddenFormSelectOption = {
    value: string;
    label: string;
};
declare function HiddenFormSelect({ name, defaultValue, placeholder, options, disabled, ariaInvalid, className, onChange, id, ariaLabel, ariaLabelledby, }: {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    options: HiddenFormSelectOption[];
    disabled?: boolean;
    ariaInvalid?: boolean;
    className?: string;
    onChange?: (next: string) => void;
    /** Id for the trigger, so a <label htmlFor> names it and a click on the label opens it. */
    id?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
}): react_jsx_runtime.JSX.Element;

export { HiddenFormSelect, type HiddenFormSelectOption };
