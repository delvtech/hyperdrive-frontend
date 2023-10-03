import { format as dnFormat, toString as dnToString } from "dnum";
/**
 * Used for final balance presentation since it cuts off decimals
 * @param balance
 * @param numDecimals max decimals, default is 1
 * @returns a formatted string with proper commas and {numDecimals} decimal places
 */
export function formatBalance({
  balance,
  decimals,
  places = 1,
  includeCommas = true,
}: {
  balance: bigint;
  decimals: number;
  places?: number;
  includeCommas?: boolean;
}): string {
  if (includeCommas) {
    return dnFormat([balance, decimals], places);
  }
  return dnToString([balance, decimals], places);
}
