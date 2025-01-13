import {
  AnyReward,
  getRewardsFn2,
  RewardResolverKey,
} from "@delvtech/hyperdrive-appconfig";
import { UseQueryOptions } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export function getRewardResolverQuery({
  resolverId,
  chainId,
}: {
  chainId: number;
  resolverId: RewardResolverKey;
}): UseQueryOptions<AnyReward[]> {
  const resolver = getRewardsFn2({ rewardFn: resolverId });
  const queryEnabled = !!resolver;
  return {
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "rewardResolver",
      params: {
        resolverId,
      },
    }),
    enabled: queryEnabled,
    staleTime: Infinity,
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId,
          }) as PublicClient;
          return resolver(publicClient);
        }
      : undefined,
  };
}
