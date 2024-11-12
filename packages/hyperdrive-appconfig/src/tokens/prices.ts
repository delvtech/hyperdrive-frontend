import { Address } from "abitype";
import { parseFixed } from "../base/fixedPoint";
import { ETH_MAGIC_NUMBER } from "./ETH_MAGIC_NUMBER";
import { base, gnosis, linea, mainnet } from "viem/chains";

/**
 * temporary while we transition to fiat price resolvers
 * TODO: Don't export this
 */
export async function getDefiLlamaTokenPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address;
  chainId: number;
}): Promise<bigint> {
  // Always use mainnet ETH as the reference for native ETH price, regardless of
  // the current chain.
  let defiLlamaTokenId = `${defiLlamaChainNameIdentifier[chainId]}:${tokenAddress}`;
  if (tokenAddress === ETH_MAGIC_NUMBER) {
    defiLlamaTokenId = `ethereum:${ETH_MAGIC_NUMBER}`;
  }

  const response = await fetch(
    `https://coins.llama.fi/prices/current/${defiLlamaTokenId}`,
  );
  const data = await response.json();
  const price = data?.coins?.[defiLlamaTokenId]?.price;
  return parseFixed(price).bigint;
}

// NOTE: DefiLlama chain name identifier must be lower case.
const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};
