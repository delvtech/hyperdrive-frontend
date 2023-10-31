import * as dnum from "dnum";
/**
 * Calculates the accrued yield on a short position as:
 * Accrued yield = (end share price - start share price) x number of bonds

 * @note
 * To calculate yield on a matured short position, use the endSharePrice at
 * the maturity checkpoint.
 */
export function calculateAccruedYield({
  startSharePrice,
  endSharePrice,
  bondAmount,
  decimals,
}: {
  endSharePrice: bigint;
  startSharePrice: bigint;
  bondAmount: bigint;
  decimals: number;
}): bigint {
  const accruedYield = dnum.mul(
    dnum.sub([endSharePrice, decimals], [startSharePrice, decimals]),
    [bondAmount, decimals],
    decimals,
  );
  return accruedYield[0];
}
