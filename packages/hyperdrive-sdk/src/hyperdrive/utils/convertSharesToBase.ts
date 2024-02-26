import * as dnum from "dnum";

export function convertSharesToBase({
  sharesAmount,
  vaultSharePrice,
  decimals,
}: {
  sharesAmount: bigint;
  vaultSharePrice: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply(
    [sharesAmount, decimals],
    [vaultSharePrice, decimals],
  )[0];
}
