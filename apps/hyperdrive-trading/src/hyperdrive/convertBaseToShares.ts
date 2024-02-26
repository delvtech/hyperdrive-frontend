import * as dnum from "dnum";

export function convertBaseToShares({
  baseAmount,
  vaultSharePrice,
  decimals,
}: {
  baseAmount: bigint | undefined;
  vaultSharePrice: bigint | undefined;
  decimals: number;
}): bigint {
  // if I have 20 base, and shares cost 2 base each, then 20 / 2 = 10 shares
  return dnum.divide(
    [baseAmount || 0n, decimals],
    [vaultSharePrice || 0n, decimals],
  )[0];
}
