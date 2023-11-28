import * as dnum from "dnum";

/**
 * Calculates how much an amount is worth given the price, example:
 *
 * Example: 10 shares each worth $2 each:
 *   calculateShareValue({ amount 10, price: 2, decimals: 2 }) // $20
 *
 * TODO: Move to sdk
 */
export function calculateShareValue({
  amount,
  price,
  decimals,
}: {
  amount: bigint;
  price: bigint;
  decimals: number;
}): bigint {
  return dnum.multiply([amount, decimals], [price, decimals], decimals)[0];
}
