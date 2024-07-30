import { fixed } from "@delvtech/fixed-point-wasm";

/**
 * Formats a number to a short scale representation, eg: 99,830,500 becomes "99.83M"
 *
 * @param {bigint} value - The value to format.
 * @param {number} decimals - The decimals of the value
 * @returns {string} The formatted number as a string, with a scale suffix (e.g., "3.33M").
 */
export function formatCompact({
  value,
  decimals,
}: {
  value: bigint;
  decimals: number;
}): string {
  const [sign, abs] = value >= 0n ? ["", value] : ["-", -value];

  return `${sign}${fixed(abs, decimals).format({
    compactDisplay: "short",
    decimals: 2,
  })}`;
}
