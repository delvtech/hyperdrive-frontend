import * as dnum from "dnum";

export function convertBaseToShares({
  baseAmount,
  vaultSharePrice,
  decimals,
}: {
  baseAmount: bigint;
  vaultSharePrice: bigint;
  decimals: number;
}): bigint {
  // if I have 20 base, and shares cost 2 base each, then 20 / 2 = 10 shares
  return dnum.divide([baseAmount, decimals], [vaultSharePrice, decimals])[0];
}
