import { parseUnits } from "src/base/parseUnits";
import { formatUnits } from "viem";

export function getMinOutputSlippage({
  previewAmount,
  slippageTolerance,
}: {
  previewAmount: bigint;
  slippageTolerance: number;
}): bigint {
  const formattedPreviewAmount =
    previewAmount && formatUnits(previewAmount, 18);
  const minOutput = Number(formattedPreviewAmount) * (1 - slippageTolerance);

  return parseUnits(minOutput.toString(), 18);
}
