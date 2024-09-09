import { ChainConfig } from "@hyperdrive/appconfig";

export function makeAddressUrl(address: string, chain: ChainConfig): string {
  return `${chain.blockExplorerUrl}/address/${address}`;
}
