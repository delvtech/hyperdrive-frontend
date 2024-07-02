import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, mainnet, sepolia } from "viem/chains";

export function getChainName(chainId: SupportedChainId): string {
  switch (chainId) {
    case mainnet.id:
      return `mainnet`;
    case sepolia.id:
      return `sepolia`;
    case foundry.id:
      return `#`;
    case 42069: // Cloudchain
      return `#`;
    default:
      assertNever(chainId);
  }
}
