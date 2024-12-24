import { appConfig, getPriceOracleFn } from "@delvtech/hyperdrive-appconfig";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { wagmiConfig } from "src/network/wagmiClient";
import { Address, PublicClient } from "viem";
export function useTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
}): {
  fiatPrice: bigint | undefined;
} {
  const { data } = useQuery(makeTokenFiatPriceQuery({ chainId, tokenAddress }));
  return { fiatPrice: data };
}
export function makeTokenFiatPriceQuery({
  chainId,
  tokenAddress,
}: {
  chainId: number;
  tokenAddress: Address | undefined;
}): UseQueryOptions<bigint> {
  const queryEnabled =
    !isTestnetChain(chainId) && !!tokenAddress && tokenAddress !== ZERO_ADDRESS;

  return {
    queryKey: makeQueryKey2({
      namespace: "tokens",
      queryId: "tokenFiatPrice",
      params: { chainId, tokenAddress },
    }),
    staleTime: Infinity,
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId,
          }) as PublicClient;

          const priceOracleFn = getPriceOracleFn({
            chainId,
            tokenAddress,
            appConfig,
          });

          return priceOracleFn({
            chainId,
            denomination: "usd",
            publicClient,
            tokenAddress,
          });
        }
      : undefined,
  };
}
