import { formatUnits } from "viem";

export function formatRate(rate: bigint, decimals = 18): string {
  // APR is stored in 18 decimals, so to avoid rounding errors, eg:
  // 0.049999999999999996 * 100 = 5, we just take the first 10 characters after
  // the decimal, and format those to a percent, eg: 0.0499999999 * 100 = 4.99.
  const truncatedAPR = +formatUnits(rate, decimals).slice(0, 10);
  const formatted = `${Number((100 * truncatedAPR).toFixed(2)).toLocaleString()}`;
  if (formatted.indexOf(".") === -1) {
    return `${formatted}.00`;
  }
  return formatted;
}
