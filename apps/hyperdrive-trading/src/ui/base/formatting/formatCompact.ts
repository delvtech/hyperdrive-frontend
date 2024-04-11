import { format } from "d3-format";
import * as dnum from "dnum";

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
  commas,
}: {
  value: bigint;
  decimals: number;
  commas?: boolean;
}): string {
  const convertedToNumber = dnum.toNumber([value, decimals], decimals);
  let formatter = format(".4f");
  if (commas) {
    formatter = format(",");
  }
  return formatter(convertedToNumber).toUpperCase().replace(/G$/, "B"); // ensure billion-scale numbers use 'B' instead of 'G', which is the default suffix used by d3-format for giga (billion).
}
