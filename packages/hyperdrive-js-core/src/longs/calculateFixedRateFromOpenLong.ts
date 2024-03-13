import * as dnum from "dnum";
import { convertSecondsToYearFraction } from "src/base/convertSecondsToYearFraction";
/**
 * From alex:
 *
 * APR (fixed rate)
 * t = term length in year fractions (0.5 = 6 months)
 * p0 = base amount
 * p1 = bond amount
 * r = ((p1 / p0) - 1) / t
 */
export function calculateFixedRateFromOpenLong({
  positionDuration,
  baseAmount,
  bondAmount,
  decimals,
}: {
  positionDuration: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
  decimals: number;
}): bigint {
  const bondsOverBase = dnum.divide(
    [bondAmount, decimals],
    [baseAmount, decimals],
  );

  const bondsOverBaseMinusOne = dnum.subtract(
    bondsOverBase,
    dnum.from("1", decimals),
  );

  const termLengthInYearFractions =
    convertSecondsToYearFraction(positionDuration);

  const rate = dnum.divide(bondsOverBaseMinusOne, termLengthInYearFractions);

  return rate[0];
}
