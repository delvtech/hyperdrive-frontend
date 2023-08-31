import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";

export function calculateLiquidity(
  lpSharePrice: bigint,
  shareReserves: bigint,
  longsOutstanding: bigint,
): bigint {
  return multiplyBigInt([lpSharePrice, shareReserves], 18) - longsOutstanding;
}
