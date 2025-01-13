import {
  AnyReward,
  appConfig,
  getHyperdriveConfig,
  getRewardsFn,
} from "@delvtech/hyperdrive-appconfig";
import { UseQueryOptions } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { wagmiConfig } from "src/network/wagmiClient";
import { Address, PublicClient } from "viem";

/**
 * @deprecated use a more specific rewards hook, eg: useAddLiquidityRewards or
 * useOpenShortRewards
 *
 */
export function makeRewardsQuery({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): UseQueryOptions<AnyReward[]> {
  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const rewardsFn = getRewardsFn({
    yieldSourceId: hyperdriveConfig.yieldSource,
    appConfig,
  });

  const queryEnabled = !!rewardsFn;
  return {
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "rewards",
      params: {
        chainId,
        hyperdriveAddress,
      },
    }),
    enabled: queryEnabled,
    staleTime: Infinity,
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId,
          }) as PublicClient;
          return rewardsFn(publicClient);
        }
      : undefined,
  };
}
