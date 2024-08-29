import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, gnosis, mainnet, sepolia } from "viem/chains";

export function makeAddressUrl(
  address: string,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/address/${address}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/address/${address}`;
    case gnosis.id:
      return `https://gnosisscan.io/address/${address}`;

    case foundry.id:
    case cloudChain.id:
    case gnosisFork.id:
    default:
      return `#`;
  }
}
