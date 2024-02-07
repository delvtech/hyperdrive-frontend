import * as dnum from "dnum";

/**
 * Calculates how much an amount of shares are worth, given another amount of
 * shares and their value.
 */
export function calculateShareValueFromPreview({
  amount,
  sharesIn,
  baseOut,
  decimals,
}: {
  amount: bigint;
  sharesIn: bigint;
  baseOut: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply(
    [amount, decimals],
    dnum.divide([baseOut, decimals], [sharesIn, decimals]),
    decimals,
  )[0];
}
