export function adjustAmountByPercentage({
  amountOut,
  decimals,
}: {
  amountOut: bigint;
  decimals: number;
}): bigint {
  // Convert the amountOut to a "decimal-based" bigint by shifting the decimal places
  const shiftDecimals = 10n ** BigInt(decimals);
  const amountWithDecimals = amountOut * shiftDecimals;

  // Calculate the slippage amount
  const percentage = 2n; // 2% slippage
  const slippageAmount = (amountWithDecimals * percentage) / 100n;

  // Subtract the slippage from the amountOut
  const minOutput = amountWithDecimals - slippageAmount;

  // Convert back to the original decimal places by dividing through
  return minOutput / shiftDecimals;
}
