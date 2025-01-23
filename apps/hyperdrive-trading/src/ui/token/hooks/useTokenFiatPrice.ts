import { AppConfig, getPriceOracleFn } from "@delvtech/hyperdrive-appconfig";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { isTestnetChain2 } from "src/chains/isTestnetChain";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
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
  const appConfig = useAppConfigForConnectedChain();
  const { data } = useQuery(
    makeTokenFiatPriceQuery({ chainId, tokenAddress, enabled, appConfig })
  );
  return { fiatPrice: data };
}

export function makeTokenFiatPriceQuery({
  chainId,
  tokenAddress,
  appConfig,
  enabled = true,
}: {
  chainId: number;
  tokenAddress: Address | undefined;
  appConfig: AppConfig;
  enabled?: boolean;
}): UseQueryOptions<bigint> {
  const queryEnabled =
    !isTestnetChain2(chainId) &&
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
