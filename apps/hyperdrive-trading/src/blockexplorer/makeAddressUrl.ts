import { blockExplorers } from "src/blockexplorer/blockExplorers";
import { gnosis, mainnet, sepolia } from "viem/chains";

export function makeAddressUrl(address: string, chainId: number): string {
  switch (chainId) {
    case mainnet.id:
    case sepolia.id:
    case gnosis.id:
      return `${blockExplorers[chainId]}/address/${address}`;

    default:
      return `#`;
  }
}
