import { parseUnits } from "src/base/parseUnits";
import { formatUnits } from "viem";

// export function getMinOutputSlippage({
//   previewAmount,
//   slippageTolerance,
// }: {
//   previewAmount: bigint;
//   slippageTolerance: number;
// }): bigint {}

// *
// * @description Take the maximum between minOutputWithSlippage and amountAsBigInt to prevent potential negative interest rates leading to contract reversion.
// * @param minOutput
// * @param amount
// * @param defaultAmount
// * @param decimals
// * @returns
function calculateSaferBondAmount(
  minOutput: bigint | null,
  amount: bigint,
  defaultAmount: string,
  decimals: number,
): bigint {
  if (minOutput) {
    return BigInt(Math.max(Number(minOutput), Number(amount)));
  }
  return parseUnits(defaultAmount, decimals);
}

export function calculateBondAmountWithSlippage({
  amountOut,
  decimals,
}: {
  amountOut: bigint;
  decimals: number;
}): bigint {
  const amountAsNumber = Number(formatUnits(amountOut, 18));
  const minOutput = amountAsNumber * (1 - 0.02);
  return parseUnits(minOutput.toString(), decimals);
}
