export function getHasEnoughAllowance({
  allowance,
  amount,
  requiresAllowance,
}: {
  allowance: bigint | undefined;
  amount: bigint | undefined;
  requiresAllowance: boolean;
}): boolean {
  // You technically have enough allowance if none is required by the token
  // standard (eg: eth shim token doesn't require allowance) or you're trying
  // to spend 0 tokens
  if (!amount || !requiresAllowance) {
    return true;
  }

  // If you're trying to spend a non-zero amount, and we don't know your current
  // token allowance yet, then you don't have enough allowance.
  if (!allowance) {
    return false;
  }

  // Otherwise, you have enough allowance if it's greater than or equal to the amount you want to spend
  return allowance >= amount;
}
