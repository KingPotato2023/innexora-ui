import * as react_jsx_runtime from 'react/jsx-runtime';

interface PaginationProps {
    /** 1-based page number currently being shown. */
    currentPage: number;
    /** Total page count (computed: ceil(totalCount / pageSize)). */
    totalPages: number;
    /** Total row count across all pages — shown in the "X of Z" counter. */
    totalCount: number;
    /** Items per page — used for the "showing X–Y" range label. */
    pageSize: number;
    /** Path the page lives at, e.g. "/audit-log". Query string appended. */
    baseHref: string;
    /**
     * Other query params currently in effect (filters, search, etc.).
     * They're preserved across page-link clicks so navigating doesn't
     * drop the user's filter state.
     */
    searchParams?: Record<string, string | undefined>;
}
declare function Pagination({ currentPage, totalPages, totalCount, pageSize, baseHref, searchParams, }: PaginationProps): react_jsx_runtime.JSX.Element;

export { Pagination };
