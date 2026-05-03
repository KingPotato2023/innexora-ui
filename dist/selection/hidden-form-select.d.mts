import * as react_jsx_runtime from 'react/jsx-runtime';

type HiddenFormSelectOption = {
    value: string;
    label: string;
};
declare function HiddenFormSelect({ name, defaultValue, placeholder, options, disabled, ariaInvalid, className, onChange, }: {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    options: HiddenFormSelectOption[];
    disabled?: boolean;
    ariaInvalid?: boolean;
    className?: string;
    onChange?: (next: string) => void;
}): react_jsx_runtime.JSX.Element;

export { HiddenFormSelect, type HiddenFormSelectOption };
