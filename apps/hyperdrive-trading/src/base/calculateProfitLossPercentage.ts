export function calculateProfitLossPercentage({
  baseAmountOut,
  baseAmountPaid,
}: {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
}): string {
  if (baseAmountPaid === 0n) {
    return "0";
  } // Avoid division by zero

  const profitOrLoss =
    (Number(baseAmountOut - baseAmountPaid) / Number(baseAmountPaid)) * 100;
  return profitOrLoss.toFixed(2);
}
