import {
  format as dnFormat,
  from as dnFrom,
  toString as dnToString,
} from "dnum";
/**
 * Used for final balance presentation since it cuts off decimals
 * @param balance bigint representation of the balance
 * @param decimals decimal places of balance
 * @param places number of place values the formatted balance should display, default is 1
 * @returns a formatted string with proper commas and {places} decimal places
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
    return dnFormat(dn, { digits: places, decimalsRounding: "ROUND_DOWN" });
  }
  return dnToString(dn, { digits: places, decimalsRounding: "ROUND_DOWN" });
}
