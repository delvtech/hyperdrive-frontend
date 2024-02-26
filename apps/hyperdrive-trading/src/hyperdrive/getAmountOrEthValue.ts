export function getAmountOrEthValue({
  isActiveTokenEth,
  amount,
}: {
  isActiveTokenEth: boolean;
  amount: bigint | undefined;
}):
  | { amount: undefined; ethValue: bigint | undefined }
  | { amount: bigint | undefined; ethValue: undefined } {
  if (isActiveTokenEth) {
    return {
      amount: undefined,
      ethValue: amount,
    };
  }

  return {
    amount,
    ethValue: undefined,
  };
}
