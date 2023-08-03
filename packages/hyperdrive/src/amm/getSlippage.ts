import { parseUnits } from "src/base/parseUnits";
import { formatUnits } from "viem";

function getMinOutputSlippage({
  previewAmount,
  slippageTolerance,
}: {
  previewAmount: bigint;
  slippageTolerance: number;
}): bigint {
  const amountAsNumber = Number(formatUnits(previewAmount, 18));
  const minOutput = amountAsNumber * (1 - slippageTolerance);
  return parseUnits(minOutput.toString(), 18);
}

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

export function calculateBondAmountWithSlippage(
  amountOut: bigint,
  amountIn: bigint,
  decimals: number,
): bigint {
  if (!amountOut || !amountIn) {
    return parseUnits("1", decimals);
  }
  return calculateSaferBondAmount(
    getMinOutputSlippage({
      previewAmount: amountOut,
      slippageTolerance: 0.02,
    }),
    amountIn,
    "1",
    decimals,
  );
}
