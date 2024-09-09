import { ChainConfig } from "@hyperdrive/appconfig";
import { gnosis, mainnet, sepolia } from "viem/chains";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chain: ChainConfig,
): string {
  switch (chain.id) {
    case mainnet.id:
    case sepolia.id:
    case gnosis.id:
      return `${chain.blockExplorerUrl}/tx/${transactionHash}`;

    default:
      return `#`;
  }
}
