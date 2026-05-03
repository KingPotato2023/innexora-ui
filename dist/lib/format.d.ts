/**
 * Compact currency formatting: $0, $500, $1k, $340k, $1.2M, $12.5M.
 * Prisma's Decimal fields arrive as strings or numbers depending on
 * how they're serialised, so we accept both.
 */
declare function formatCurrencyShort(value: number | string): string;
/**
 * Compact AED formatting for hero / dashboard tiles. "AED 0", "AED 500",
 * "AED 1.2k", "AED 340k", "AED 1.2M". Use full-precision Intl format on
 * tables / detail pages where exact values matter.
 */
declare function formatAedShort(value: number | string): string;
/**
 * Full-precision AED formatting with thousand separators: "AED 148,050.00".
 * Use on invoice / payment / contract detail pages and finance tables.
 */
declare function formatAed(value: number | string): string;

export { formatAed, formatAedShort, formatCurrencyShort };
