import { ChainConfig } from "@hyperdrive/appconfig";

export function makeTransactionUrl(
  transactionHash: string | undefined,
  chain: ChainConfig,
): string {
  return `${chain.blockExplorerUrl}/tx/${transactionHash}`;
}
