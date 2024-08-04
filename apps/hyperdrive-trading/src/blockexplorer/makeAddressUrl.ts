import assertNever from "assert-never";
import type { SupportedChainId } from "src/chains/supportedChains";
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
    case 42069: // Cloudchain
      return `#`;
    default:
      assertNever(chainId);
  }
}
