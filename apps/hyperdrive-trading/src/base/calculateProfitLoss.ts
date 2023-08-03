import { formatUnits } from "viem";

/**
 * Calculates the profit or loss amount.
 * @param baseAmountOut The amount received.
 * @param baseAmountPaid The amount paid.
 * @param baseDecimals The decimals for the base token.
 * @returns The calculated profit or loss.
 */
export function calculateProfitLoss({
  baseAmountOut,
  baseAmountPaid,
  baseDecimals,
}: {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
  baseDecimals: number;
}): number {
  const formattedBaseAmountOut = Number(
    formatUnits(baseAmountOut, baseDecimals),
  );
  const formattedBaseAmountPaid = Number(
    formatUnits(baseAmountPaid, baseDecimals),
  );

  return formattedBaseAmountOut - formattedBaseAmountPaid;
}

/**
 * Calculates the profit or loss percentage.
 * @param baseAmountOut The amount received.
 * @param baseAmountPaid The amount paid.
 * @returns The calculated profit or loss percentage.
 */
export function calculateProfitLossPercentage({
  baseAmountOut,
  baseAmountPaid,
}: {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
}): string {
  if (baseAmountPaid === 0n) {
    return "0"; // Prevent division by zero
  }

  // Calculate profit or loss percentage
  const profitOrLoss =
    (Number(baseAmountOut - baseAmountPaid) / Number(baseAmountPaid)) * 100;
  return profitOrLoss.toFixed(2);
}

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
  baseAmountPaid,
  baseSymbol,
  baseDecimals,
}: {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
  baseSymbol: string;
  baseDecimals: number;
}): string {
  const profitLossAmount = calculateProfitLoss({
    baseAmountOut,
    baseAmountPaid,
    baseDecimals,
  });
  const profitLossPercentage = calculateProfitLossPercentage({
    baseAmountOut,
    baseAmountPaid,
  });
  return `${profitLossAmount.toFixed(
    2,
  )} ${baseSymbol} (${profitLossPercentage}%)`;
}
