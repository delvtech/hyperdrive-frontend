import { HyperdriveConfig } from "./config";
import { Market } from "./types";

export function getMarketByAddress(
  address: string | undefined,
  config: HyperdriveConfig,
): Market | undefined {
  if (!address) {
    return undefined;
  }

  return config.markets.find((market) => market.address === address);
}
