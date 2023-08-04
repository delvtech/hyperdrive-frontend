export function calculateBondAmountWithSlippage({
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
  const slippage = 2n; // 2% slippage
  const slippageAmount = (amountWithDecimals * slippage) / 100n;

  // Subtract the slippage from the amountOut
  const minOutput = amountWithDecimals - slippageAmount;

  // Convert back to the original decimal places by dividing through
  return minOutput / shiftDecimals;
}
