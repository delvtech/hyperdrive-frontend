import { ChainConfig } from "src/chains/chains";

export function makeAddressUrl(address: string, chain: ChainConfig): string {
  return `${chain.blockExplorerUrl}/address/${address}`;
}
