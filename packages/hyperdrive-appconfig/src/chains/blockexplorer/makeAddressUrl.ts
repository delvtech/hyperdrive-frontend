import { ChainConfig } from "../chains";

export function makeAddressUrl(address: string, chain: ChainConfig): string {
  return `${chain.blockExplorerUrl}/address/${address}`;
}
