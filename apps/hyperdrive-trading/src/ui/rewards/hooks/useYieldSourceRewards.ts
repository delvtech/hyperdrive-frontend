import {
  AnyReward,
  getYieldSourceRewardConfigs,
  YieldSourceId,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { queryClient } from "src/network/queryClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { getRewardResolverQuery } from "src/ui/rewards/hooks/getRewardResolverQuery";

export function useYieldSourceRewards({
  yieldSourceId,
  chainId,
  enabled = true,
}: {
  yieldSourceId: YieldSourceId;
  chainId: number;
  enabled?: boolean;
}): {
  rewards: AnyReward[] | undefined;
  status: "error" | "success" | "loading";
} {
  const appConfig = useAppConfigForConnectedChain();
  const rewardConfigs = getYieldSourceRewardConfigs({
    yieldSourceId,
    chainId,
    appConfig,
  });

  const queryEnabled = !!rewardConfigs?.length && enabled;
  const { data: rewards, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "yieldSourceRewards",
      params: {
        chainId,
        yieldSourceId,
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
                    chainId,
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
