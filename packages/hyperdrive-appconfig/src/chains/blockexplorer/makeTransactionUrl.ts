import { ChainConfig } from "src/chains/chains";

export function makeTransactionUrl(
  transactionHash: string | undefined,
  chain: ChainConfig,
): string {
  return `${chain.blockExplorerUrl}/tx/${transactionHash}`;
}
