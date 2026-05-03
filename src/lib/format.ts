// lib/format.ts
/**
 * Compact currency formatting: $0, $500, $1k, $340k, $1.2M, $12.5M.
 * Prisma's Decimal fields arrive as strings or numbers depending on
 * how they're serialised, so we accept both.
 */
export function formatCurrencyShort(value: number | string): string {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "$0";
  const abs = Math.abs(n);
  if (abs >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(1)}M`;
  }
  if (abs >= 1_000) {
    return `$${Math.round(n / 1_000)}k`;
  }
  return `$${Math.round(n)}`;
}

/**
 * Compact AED formatting for hero / dashboard tiles. "AED 0", "AED 500",
 * "AED 1.2k", "AED 340k", "AED 1.2M". Use full-precision Intl format on
 * tables / detail pages where exact values matter.
 */
export function formatAedShort(value: number | string): string {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "AED 0";
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `AED ${(n / 1_000_000).toFixed(1)}M`;
  if (abs >= 10_000) return `AED ${Math.round(n / 1_000)}k`;
  if (abs >= 1_000) return `AED ${(n / 1_000).toFixed(1)}k`;
  return `AED ${Math.round(n)}`;
}

/**
 * Full-precision AED formatting with thousand separators: "AED 148,050.00".
 * Use on invoice / payment / contract detail pages and finance tables.
 */
export function formatAed(value: number | string): string {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return "AED —";
  return `AED ${n.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
