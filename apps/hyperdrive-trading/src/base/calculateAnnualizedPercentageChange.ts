/**
 * Calculates the annualized profit or loss percentage.
 * @param amountBefore The amount paid.
 * @param amountAfter The amount received.
 * @param days The number of days the investment was held.
 * @returns The calculated annualized profit or loss percentage.
 */
export function calculateAnnualizedPercentageChange({
  amountBefore,
  amountAfter,
  days,
}: {
  amountBefore: bigint;
  amountAfter: bigint;
  days: number;
}): string {
  if (amountBefore === 0n) {
    return "0"; // Prevent division by zero
  }

  const profitOrLoss =
    Number(amountAfter - amountBefore) / Number(amountBefore);
  const annualizedProfitOrLoss = ((1 + profitOrLoss) ** (365 / days) - 1) * 100;
  return annualizedProfitOrLoss.toFixed(2);
}
