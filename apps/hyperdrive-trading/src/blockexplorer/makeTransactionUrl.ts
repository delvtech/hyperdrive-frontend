import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, gnosis, mainnet, sepolia } from "viem/chains";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/tx/${transactionHash}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/tx/${transactionHash}`;
    case gnosis.id:
      return `https://gnosisscan.io/tx/${transactionHash}`;
    case foundry.id:
    case cloudChain.id:
    case gnosisFork.id:
    default:
      return `#`;
  }
}
