import {
  format as dnFormat,
  from as dnFrom,
  toString as dnToString,
} from "dnum";
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
  const dn = dnFrom([balance, decimals]);
  if (includeCommas) {
    return dnFormat(dn, places);
  }
  return dnToString(dn, places);
}
