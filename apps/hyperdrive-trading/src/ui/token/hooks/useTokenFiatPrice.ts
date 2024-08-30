import { parseFixed } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { Address } from "viem";
import { useChains } from "wagmi";

export function useTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
}): {
  fiatPrice: bigint | undefined;
} {
  const chains = useChains();
  const chainName =
    chains?.find((network) => network.id === chainId)?.name ?? "ethereum";
  // NOTE: DefiLlama chain name identifier must be lower case.
  const defiLlamaTokenId = `${chainName.toLowerCase()}:${tokenAddress}`;

  const queryEnabled = !isTestnetChain(chainId) && !!tokenAddress;

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
