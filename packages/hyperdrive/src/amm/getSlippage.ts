import { parseUnits } from "src/base/parseUnits";
import { formatUnits } from "viem";

export function getMinOutputSlippage({
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
