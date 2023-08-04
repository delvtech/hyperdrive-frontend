/**
 * Calculates the profit or loss percentage.
 * @param baseAmountOut The amount received.
 * @param baseAmountPaid The amount paid.
 * @returns The calculated profit or loss percentage.
 */
export function calculatePercentageChange({
  initialAmount,
  finalAmount,
}: {
  initialAmount: bigint;
  finalAmount: bigint;
}): string {
  if (initialAmount === 0n) {
    return "0"; // Prevent division by zero
  }

  // Calculate profit or loss percentage
  const profitOrLoss =
    (Number(finalAmount - initialAmount) / Number(initialAmount)) * 100;
  return profitOrLoss.toFixed(2);
}
