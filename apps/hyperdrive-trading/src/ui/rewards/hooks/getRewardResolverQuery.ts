import { AnyReward, RewardConfig } from "@delvtech/hyperdrive-appconfig";
import { UseQueryOptions } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

/**
 * Takes a given rewards resolver id from appConfig and returns the query object
 * for requesting the rewards.
 *
 * For example:
 * const { data } = useQuery(
 *   getRewardResolverQuery({
 *     resolverId: 'fetchLineaRewards',
 *     chainId: linea.id,
 *     appConfig
 *   })
 * );
 * ```
 */
export function getRewardResolverQuery({
  rewardConfig,
  chainId,
}: {
  chainId: number;
  rewardConfig: RewardConfig;
}): UseQueryOptions<AnyReward[]> {
  return {
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "rewardResolver",
      params: {
        rewardConfigId: rewardConfig.id,
        chainId: chainId,
      },
    }),
    staleTime: Infinity,
    queryFn: async () => {
      const publicClient = getPublicClient(wagmiConfig as any, {
        chainId,
      }) as PublicClient;
      return rewardConfig.resolver(publicClient);
    },
  };
}
