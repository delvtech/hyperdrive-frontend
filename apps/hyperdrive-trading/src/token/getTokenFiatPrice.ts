import { parseFixed } from "@delvtech/fixed-point-wasm";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { base, gnosis, linea, mainnet } from "viem/chains";

export async function getTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: string;
  chainId: number;
}): Promise<bigint | undefined> {
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
  const price = data?.coins?.[defiLlamaTokenId]?.price ?? 0n;
  return parseFixed(price).bigint;
}

// NOTE: DefiLlama chain name identifier must be lower case.
export const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};
