export function getHasEnoughBalance({
  balance,
  amountAsBigInt,
}: {
  balance: { formatted: string; value: bigint } | undefined;
  amountAsBigInt: bigint | undefined;
}): boolean {
  // The trade isn't valid if you have no balance or no amount specified to
  // trade
  if (!balance || !amountAsBigInt) {
    return false;
  }

  // You can't spend more than your current balance either
  if (balance && amountAsBigInt && balance.value < amountAsBigInt) {
    return false;
  }

  return true;
}
