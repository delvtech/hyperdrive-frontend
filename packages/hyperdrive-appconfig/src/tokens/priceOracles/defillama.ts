import { parseFixed } from "src/base/fixedPoint";
import { ETH_MAGIC_NUMBER } from "src/tokens/ETH_MAGIC_NUMBER";
import { PriceOracleFn } from "src/tokens/types";
import { base, gnosis, linea, mainnet } from "viem/chains";

// NOTE: DefiLlama chain name identifier must be lower case.
const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};

export const fetchDefiLlamaTokenPrice: PriceOracleFn = async ({
  chainId,
  tokenAddress,
}) => {
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
};
