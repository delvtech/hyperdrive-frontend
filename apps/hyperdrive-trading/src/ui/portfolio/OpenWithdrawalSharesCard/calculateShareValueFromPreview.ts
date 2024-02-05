import * as dnum from "dnum";

/**
 * Calculates how much an amount of shares are worth, given another amount of
 * shares and their value, example:
 *
 * Example: value of 20 shares given that 10 shares are worth $20:
 *   calculateShareValue({ amount: 20, sharesIn: 10, baseOut: 20, decimals: 2 })
 *   // $40
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

/**
 * amount * (baseOut / sharesIn)
 */
