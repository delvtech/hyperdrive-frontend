/**
 *
 * Returns true or false if you have enough balance to make a trade amount
 */
export function getHasEnoughBalance({
  balance,
  amount,
}: {
  balance: bigint | undefined;
  amount: bigint | undefined;
}): boolean {
  // The trade isn't valid if you have no balance or no amount specified to
  // trade
  if (!balance || !amount) {
    return false;
  }

  // You can't spend more than your current balance either
  if (balance < amount) {
    return false;
  }

  return true;
}
