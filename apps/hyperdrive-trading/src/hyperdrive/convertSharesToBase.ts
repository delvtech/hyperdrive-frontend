import * as dnum from "dnum";

export function convertSharesToBase({
  sharesAmount,
  vaultSharePrice,
  decimals,
}: {
  sharesAmount: bigint | undefined;
  vaultSharePrice: bigint | undefined;
  decimals: number;
}): bigint {
  return dnum.multiply(
    [sharesAmount || 0n, decimals],
    [vaultSharePrice || 0n, decimals],
  )[0];
}
