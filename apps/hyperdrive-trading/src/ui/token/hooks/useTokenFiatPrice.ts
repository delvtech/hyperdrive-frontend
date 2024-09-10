import { parseFixed } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address } from "viem";
import { gnosis, linea, mainnet } from "viem/chains";

// NOTE: DefiLlama chain name identifier must be lower case.
const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
};
export function useTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
}): {
  fiatPrice: bigint | undefined;
} {
  // Always use mainnet ETH as the reference for native ETH price, regardless of
  // the current chain.
  let defiLlamaTokenId = `${defiLlamaChainNameIdentifier[chainId]}:${tokenAddress}`;
  if (tokenAddress === ETH_MAGIC_NUMBER) {
    defiLlamaTokenId = `ethereum:${ETH_MAGIC_NUMBER}`;
  }

  const queryEnabled =
    !isTestnetChain(chainId) && !!tokenAddress && tokenAddress !== ZERO_ADDRESS;

  const { data } = useQuery({
    queryKey: makeQueryKey("tokenFiatPrice", { defiLlamaTokenId }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const response = await fetch(
            `https://coins.llama.fi/prices/current/${defiLlamaTokenId}`,
          );
          const data = await response.json();
          const { price } = data.coins[defiLlamaTokenId];
          return parseFixed(price).bigint;
        }
      : undefined,
  });
  return { fiatPrice: data };
}
