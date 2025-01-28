import {
  AnyReward,
  appConfig,
  getAddLiquidityRewardConfigs,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { queryClient } from "src/network/queryClient";
import { getRewardResolverQuery } from "src/ui/rewards/hooks/getRewardResolverQuery";

export function useAddLiquidityRewards({
  hyperdriveConfig,
  enabled = true,
}: {
  hyperdriveConfig: HyperdriveConfig;
  enabled?: boolean;
}): {
  rewards: AnyReward[] | undefined;
  status: "error" | "success" | "loading";
} {
  const rewardConfigs = getAddLiquidityRewardConfigs({
    hyperdriveAddress: hyperdriveConfig.address,
    chainId: hyperdriveConfig.chainId,
    appConfig,
  });

  const queryEnabled = !!rewardConfigs?.length && enabled;
  const { data: rewards, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "addLiquidityRewards",
      params: {
        chainId: hyperdriveConfig.chainId,
        hyperdriveAddress: hyperdriveConfig.address,
      },
    }),
    enabled: queryEnabled,
    staleTime: Infinity,
    queryFn: queryEnabled
      ? async () => {
          // TODO: We might be re-inventing useQueries here..
          return (
            await Promise.all(
              rewardConfigs.map((rewardConfig) =>
                queryClient.fetchQuery(
                  getRewardResolverQuery({
                    rewardConfig,
                    chainId: hyperdriveConfig.chainId,
                  }),
                ),
              ),
            )
          ).flat();
        }
      : undefined,
  });

  return {
    rewards,
    status,
  };
}
