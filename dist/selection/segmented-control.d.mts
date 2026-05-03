import * as react_jsx_runtime from 'react/jsx-runtime';

type Option<T extends string> = {
    value: T;
    label: string;
};
declare function SegmentedControlLinks<T extends string>({ options, value, hrefFor, ariaLabel, }: {
    options: readonly Option<T>[];
    value: T;
    hrefFor: (value: T) => string;
    ariaLabel?: string;
}): react_jsx_runtime.JSX.Element;

export { SegmentedControlLinks };
