import { isTestnetChain } from "src/chains/isTestnetChain";
import { Address } from "viem";
import { base, gnosis, linea, mainnet } from "viem/chains";

const blockAnalyticaChainNames: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [base.id]: "base",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
};

export function getMarketAnalyticsUrl({
  chainId,
  hyperdrive,
}: {
  chainId: number;
  hyperdrive: Address;
}): string | undefined {
  if (isTestnetChain(chainId)) {
    return;
  }
  // Block Analytica doesn't validate checksummed addresses in the url, so we can safely lowercase
  return `https://hyperdrive.blockanalitica.com/${blockAnalyticaChainNames[chainId]}/markets/${hyperdrive.toLowerCase()}`;
}
