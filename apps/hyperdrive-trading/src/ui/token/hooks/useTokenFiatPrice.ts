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
  enabled = true,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
  enabled?: boolean;
}): {
  fiatPrice: bigint | undefined;
} {
  const { data, error } = useQuery(
    makeTokenFiatPriceQuery({ chainId, tokenAddress, enabled })
  );
  return { fiatPrice: data };
}
export function makeTokenFiatPriceQuery({
  chainId,
  tokenAddress,
  enabled,
}: {
  chainId: number;
  tokenAddress: Address | undefined;
  enabled?: boolean;
}): UseQueryOptions<bigint> {
  const queryEnabled =
    !isTestnetChain(chainId) &&
    !!tokenAddress &&
    tokenAddress !== ZERO_ADDRESS &&
    enabled;

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

export async function getTokenFiatPrice({
  chainId,
  tokenAddress,
}: {
  chainId: number;
  tokenAddress: Address;
}): Promise<bigint> {
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
