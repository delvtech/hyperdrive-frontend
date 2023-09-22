import { format } from "d3-format";
import { commify } from "ethers/lib/utils";

/**
 * Used for final balance presentation since it cuts off decimals
 * @param balance
 * @param numDecimals max decimals, default is 1
 * @returns a formatted string with proper commas and {numDecimals} decimal places
 *
 * @deprecated this depends on ethersjs and is deprecated, use dnum.format instead
 */
export function formatBalance({
  balance,
  numDecimals = 1,
  includeCommas = true,
}: {
  balance: string | number;
  numDecimals?: number;
  includeCommas?: boolean;
}): string {
  return includeCommas
    ? commify(format(`.${numDecimals}~f`)(+balance))
    : format(`.${numDecimals}~f`)(+balance);
}
