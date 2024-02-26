/**
 *
 * Returns true or false if there is enough liquidity in the pool to make the trade
 */
export function getHasEnoughLiquidity({
  maxTradeSize,
  tradeAmount,
}: {
  maxTradeSize: bigint | undefined;
  tradeAmount: bigint | undefined;
}): boolean {
  // The trade isn't valid if there is no liduidity in the pool or there is no amount specified in the trade.
  if (!maxTradeSize || !tradeAmount) {
    return false;
  }

  // You can't open a position valued at more than the current liquidity in the pool
  if (maxTradeSize < tradeAmount) {
    return false;
  }

  return true;
}
