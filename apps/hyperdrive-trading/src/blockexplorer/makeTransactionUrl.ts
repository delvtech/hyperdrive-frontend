import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, mainnet, sepolia } from "viem/chains";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/tx/${transactionHash}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/tx/${transactionHash}`;
    case foundry.id:
      return `#`;
    case 42069: // Fork
      return `#`;
    default:
      assertNever(chainId);
  }
}
