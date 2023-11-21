import * as dnum from "dnum";

const ONE = BigInt(1e18);
const FACTOR = BigInt(5.24592e18);
const MULTIPLIER = BigInt(0.04665e18);

export function calculateTimeStretch(apr: string): bigint {
  const scaledApr = BigInt(parseFloat(apr) * 100) * ONE;
  const timeStretch = FACTOR / dnum.mul([MULTIPLIER, 18], [scaledApr, 18])[0];
  return ONE / timeStretch;
}
