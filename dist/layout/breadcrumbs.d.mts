import * as react_jsx_runtime from 'react/jsx-runtime';

type BreadcrumbItem = {
    label: string;
    /** Omit to render the item as the current page (no link). */
    href?: string;
};
declare function Breadcrumbs({ items }: {
    items: ReadonlyArray<BreadcrumbItem>;
}): react_jsx_runtime.JSX.Element | null;

export { type BreadcrumbItem, Breadcrumbs };
