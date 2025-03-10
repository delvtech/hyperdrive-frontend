import { fixed } from "@delvtech/fixed-point-wasm";
import { calcAprGivenFixedPrice } from "@delvtech/hyperdrive-wasm";

/**
 * Calculate the APR of a position given the position duration, the amount paid
 * in base, and the amount of bonds received.
 */
export function calculateAprFromPrice({
  positionDuration,
  baseAmount,
  bondAmount,
}: {
  /**
   * The position duration in seconds.
   */
  positionDuration: bigint;
  /**
   * The amount paid in base.
   */
  baseAmount: bigint;
  /**
   * The amount of bonds received.
   */
  bondAmount: bigint;
}): bigint {
  return calcAprGivenFixedPrice({
    positionDuration,
    price: fixed(baseAmount).div(bondAmount).bigint,
  });
}
