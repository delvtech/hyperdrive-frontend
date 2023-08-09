/**
 * Calculates the profit or loss percentage.
 * @param baseAmountOut The amount received.
 * @param baseAmountPaid The amount paid.
 * @returns The calculated profit or loss percentage.
 */
export function calculatePercentageChange({
  amountInput,
  finalAmount,
}: {
  amountInput: bigint;
  finalAmount: bigint;
}): string {
  if (amountInput === 0n) {
    return "0"; // Prevent division by zero
  }

  // Calculate profit or loss percentage
  const profitOrLoss =
    (Number(finalAmount - amountInput) / Number(amountInput)) * 100;
  return profitOrLoss.toFixed(2);
}
