import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { SupportedChainId } from "src/chains/supportedChains";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";

export function makeAddressUrl(
  address: string,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/address/${address}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/address/${address}`;
    case baseSepolia.id:
      return `https://sepolia.basescan.org/address/${address}`;
    case b3Sepolia.id:
      return `https://sepolia.explorer.b3.fun/address/${address}`;
    case foundry.id:
      return `#`;
    case cloudChain.id: // Cloudchain
      return `#`;
    case gnosisFork.id: // Cloudchain
      return `#`;
    default:
      return `#`;
  }
}
