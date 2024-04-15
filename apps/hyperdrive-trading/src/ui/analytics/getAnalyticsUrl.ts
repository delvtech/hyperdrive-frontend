import { Address } from "viem";
import { sepolia } from "viem/chains";

export function getAnalyticsUrl({
  chainId,
  hyperdrive,
}: {
  chainId: number;
  hyperdrive: Address;
}): string | undefined {
  if (chainId === sepolia.id) {
    // Block Analytica doesn't checksum addresses in the url, so we must lowercase
    return `https://hyperdrive.blockanalitica.com/markets/${hyperdrive.toLowerCase()}`;
  }
}
