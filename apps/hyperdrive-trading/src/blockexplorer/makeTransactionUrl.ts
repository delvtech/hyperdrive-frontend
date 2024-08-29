import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { SupportedChainId } from "src/chains/supportedChains";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/tx/${transactionHash}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/tx/${transactionHash}`;
    case baseSepolia.id:
      return `https://sepolia.basescan.org/tx/${transactionHash}`;
    case b3Sepolia.id:
      return `https://sepolia.explorer.b3.fun/tx/${transactionHash}`;
    case foundry.id:
      return `#`;
    case cloudChain.id: // cloud chain
      return `#`;
    case gnosisFork.id:
      return `#`;
    default:
      return `#`;
  }
}
