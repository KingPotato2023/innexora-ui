import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type SidebarNavItem = {
    href: string;
    label: string;
    /** Lucide icon component (already imported by the consumer). */
    icon: React.ComponentType<{
        className?: string;
    }>;
    /** Optional grouping bucket. Ungrouped items render under no heading. */
    group?: string;
};
declare function SidebarNav({ items, onNavigate, groupOrder, groupLabels, }: {
    items: ReadonlyArray<SidebarNavItem>;
    onNavigate?: () => void;
    /** Display order of groups. Defaults to the order groups appear in `items`. */
    groupOrder?: ReadonlyArray<string>;
    /** Override the eyebrow label for a group. Defaults to capitalised key. */
    groupLabels?: Record<string, string>;
}): react_jsx_runtime.JSX.Element;
declare function MobileMenuButton({ open, onClick, }: {
    open: boolean;
    onClick: () => void;
}): react_jsx_runtime.JSX.Element;

export { MobileMenuButton, SidebarNav, type SidebarNavItem };
