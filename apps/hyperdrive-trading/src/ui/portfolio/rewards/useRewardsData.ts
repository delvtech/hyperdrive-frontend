import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Rewards, RewardsApi } from "src/rewards/generated/RewardsClient";
import { Address } from "viem";

export function usePortfolioRewardsData({
  account,
}: {
  account: Address | undefined;
}): {
  rewards: Rewards | undefined;
  rewardsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account;
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey("rewards", { account }),
    queryFn: queryEnabled
      ? async () => {
          const rewardsApi = new RewardsApi({
            baseUrl: import.meta.env.VITE_REWARDS_BASE_URL,
          });
          const response = await rewardsApi.get.rewardsDetail(account);
          return response.rewards;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
