/**
 * Calculates the profit or loss percentage.
 * @param amountBefore The amount paid.
 * @param amountAfter The amount received.
 * @returns The calculated profit or loss percentage.
 */
export function calculatePercentageChange({
  amountBefore,
  amountAfter,
}: {
  amountBefore: bigint;
  amountAfter: bigint;
}): string {
  if (amountBefore === 0n) {
    return "0"; // Prevent division by zero
  }

  // Calculate profit or loss percentage
  const profitOrLoss =
    (Number(amountAfter - amountBefore) / Number(amountBefore)) * 100;
  return profitOrLoss.toFixed(2);
}
