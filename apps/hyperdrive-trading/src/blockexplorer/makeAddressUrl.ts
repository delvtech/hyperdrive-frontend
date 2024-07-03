import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, mainnet, sepolia } from "viem/chains";

export function makeAddressUrl(
  address: string,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/address/${address}`;
    case sepolia.id:
      return `https://sepolia.etherscan.io/address/${address}`;
    case foundry.id:
      return `#`;
    case 42069: // Fork
      return `#`;
    default:
      assertNever(chainId);
  }
}
