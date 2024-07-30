import { fixed } from "@delvtech/fixed-point-wasm";

/**
 * Calculates how much an amount is worth, give the price per unit, example:
 *
 * Example: 10 shares each worth $2 each:
 *
 * ```ts
 * calculateValueFromPrice({ amount 10, unitPrice: 2, decimals: 2 }) // $20
 * ```
 */
export function calculateValueFromPrice({
  amount,
  unitPrice,
  decimals,
}: {
  amount: bigint;
  unitPrice: bigint;
  decimals: number;
}): bigint {
  return fixed(amount, decimals).mul(unitPrice, decimals).bigint;
}
