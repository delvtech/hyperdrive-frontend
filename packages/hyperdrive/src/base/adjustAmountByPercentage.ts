export function adjustAmountByPercentage({
  amount,
  decimals,
}: {
  amount: bigint;
  decimals: number;
}): bigint {
  // Convert the amountOut to a "decimal-based" bigint by shifting the decimal places
  const shiftDecimals = 10n ** BigInt(decimals);
  const amountWithDecimals = amount * shiftDecimals;

  // Calculate the slippage amount
  const percentage = 1n; // 1% slippage
  const slippageAmount = (amountWithDecimals * percentage) / 100n;

  // Subtract the slippage from the amountOut
  const minOutput = amountWithDecimals - slippageAmount;

  // Handle small values to ensure proper rounding
  if (minOutput < shiftDecimals && minOutput > 0n) {
    return 0n;
  }

  // Convert back to the original decimal places by dividing through with rounding
  return (minOutput + shiftDecimals / 2n) / shiftDecimals;
}
