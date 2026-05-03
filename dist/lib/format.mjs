function formatCurrencyShort(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "$0";
  const abs = Math.abs(n);
  if (abs >= 1e6) {
    return `$${(n / 1e6).toFixed(1)}M`;
  }
  if (abs >= 1e3) {
    return `$${Math.round(n / 1e3)}k`;
  }
  return `$${Math.round(n)}`;
}
function formatAedShort(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n) || n === 0) return "AED 0";
  const abs = Math.abs(n);
  if (abs >= 1e6) return `AED ${(n / 1e6).toFixed(1)}M`;
  if (abs >= 1e4) return `AED ${Math.round(n / 1e3)}k`;
  if (abs >= 1e3) return `AED ${(n / 1e3).toFixed(1)}k`;
  return `AED ${Math.round(n)}`;
}
function formatAed(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return "AED \u2014";
  return `AED ${n.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
export {
  formatAed,
  formatAedShort,
  formatCurrencyShort
};
