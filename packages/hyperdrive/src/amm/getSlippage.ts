import { parseUnits } from "src/base/parseUnits";
import { formatUnits } from "viem";

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
