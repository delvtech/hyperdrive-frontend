import { calculatePercentageChange } from "src/base/calculatePercentageChange";
import { formatUnits } from "viem";

/**
 * Computes the profit or loss value and percentage and returns them in a formatted string.
 *
 * @param baseAmountOut - The amount of tokens received after closing the position.
 * @param baseAmountPaid - The initial amount of tokens paid when opening the position.
 * @param baseSymbol - The symbol of the base token (e.g., "DAI").
 * @param baseDecimals - The number of decimals for the base token.
 * @returns A string indicating the profit or loss value and percentage.
 */
export function getProfitLossText({
  baseAmountOut,
  amountInput,
  baseSymbol,
  baseDecimals,
  showPercentage = true,
}: {
  baseAmountOut: bigint;
  amountInput: bigint;
  baseSymbol: string;
  baseDecimals: number;
  showPercentage?: boolean;
}): string {
  const profitLossAmount = Number(
    formatUnits(baseAmountOut - amountInput, baseDecimals),
  );

  let result = `${profitLossAmount.toFixed(2)} ${baseSymbol}`;

  if (showPercentage) {
    const profitLossPercentage = calculatePercentageChange({
      amountBefore: amountInput,
      amountAfter: baseAmountOut,
    });
    result += ` (${profitLossPercentage}%)`;
  }

  return result;
}

export function getStyleClassForProfitLoss(
  baseAmountOut: bigint,
  baseAmountPaid: bigint,
): string | undefined {
  if (baseAmountOut > baseAmountPaid) {
    return "text-accent";
  } else {
    return "text-red-700";
  }
}
