import {
  AnyReward,
  appConfig,
  getYieldSourceRewardResolverIds,
  YieldSourceId,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { queryClient } from "src/network/queryClient";
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
  const resolverIds = getYieldSourceRewardResolverIds({
    yieldSourceId,
    chainId,
    appConfig,
  });

  const queryEnabled = !!resolverIds?.length && enabled;
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
              resolverIds.map((resolver) =>
                queryClient.fetchQuery(
                  getRewardResolverQuery({
                    resolverId: resolver,
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
