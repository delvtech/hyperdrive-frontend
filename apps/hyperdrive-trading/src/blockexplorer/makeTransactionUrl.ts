import { ChainConfig } from "@hyperdrive/appconfig";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chain: ChainConfig,
): string {
  return `${chain.blockExplorerUrl}/tx/${transactionHash}`;
}
