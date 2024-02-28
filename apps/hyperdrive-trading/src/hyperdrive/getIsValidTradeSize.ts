/**
 *
 * Returns true or false if there is enough liquidity in the pool to make the trade
 */
export function getIsValidTradeSize({
  maxTradeSize,
  tradeAmount,
}: {
  maxTradeSize: bigint | undefined;
  tradeAmount: bigint | undefined;
}): boolean {
  // The trade isn't valid if the max trade isn't known or there is no trade size specified.
  if (!maxTradeSize || !tradeAmount) {
    return false;
  }

  // You can't open a position valued at more than the current max trade
  if (maxTradeSize < tradeAmount) {
    return false;
  }

  return true;
}
