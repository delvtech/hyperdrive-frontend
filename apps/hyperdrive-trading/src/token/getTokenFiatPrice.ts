import { parseFixed } from "@delvtech/fixed-point-wasm";
import { appConfig, getToken } from "@delvtech/hyperdrive-appconfig";
import { fetchCoinGeckoPrice } from "src/token/coingecko";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address } from "viem";
import { base, gnosis, linea, mainnet } from "viem/chains";

export async function getTokenFiatPrice({
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
  let price = data?.coins?.[defiLlamaTokenId]?.price;
  if (price === undefined) {
    // fallback to coingecko if defillama is not available
    const tokenConfig = getToken({
      chainId,
      tokenAddress,
      appConfig,
    });
    price = await fetchCoinGeckoPrice(tokenConfig!.symbol);
  }
  return parseFixed(price).bigint;
}

// NOTE: DefiLlama chain name identifier must be lower case.
export const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};
