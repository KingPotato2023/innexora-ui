import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { SidebarNavItem } from './sidebar-nav.mjs';

declare function ShellLayout({ children, navItems, brand, userFooter, groupOrder, groupLabels, }: {
    children: React.ReactNode;
    navItems: ReadonlyArray<SidebarNavItem>;
    /** Top-left wordmark / logo. */
    brand: React.ReactNode;
    /** Bottom-of-sidebar block (avatar + name + signout, etc). */
    userFooter?: React.ReactNode;
    /** Forwarded to SidebarNav. */
    groupOrder?: ReadonlyArray<string>;
    /** Forwarded to SidebarNav. */
    groupLabels?: Record<string, string>;
}): react_jsx_runtime.JSX.Element;

export { ShellLayout };
