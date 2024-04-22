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
export function calculateAprFromPrice({
  positionDuration,
  baseAmount,
  bondAmount,
}: {
  positionDuration: bigint;
  baseAmount: bigint;
  bondAmount: bigint;
}): bigint {
  const bondsOverBase = dnum.divide([bondAmount, 18], [baseAmount, 18]);

  const bondsOverBaseMinusOne = dnum.subtract(
    bondsOverBase,
    dnum.from("1", 18),
  );

  const termLengthInYearFractions =
    convertSecondsToYearFraction(positionDuration);

  const rate = dnum.divide(bondsOverBaseMinusOne, termLengthInYearFractions);

  return rate[0];
}
