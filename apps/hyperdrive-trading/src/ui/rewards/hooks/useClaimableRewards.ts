import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { Reward, RewardsApi } from "src/rewards/generated/RewardsClient";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useClaimableRewards({
  account,
}: {
  account: Address | undefined;
}): {
  rewards: Reward[] | undefined;
  rewardsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const queryEnabled = !!account && !!publicClient;
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "unclaimedRewards",
      params: { account },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const rewardsApi = new RewardsApi({
            baseUrl: import.meta.env.VITE_REWARDS_BASE_URL,
          });

          try {
            const response = await rewardsApi.get.rewardsStubDetail(account);
            return response.rewards;
          } catch (error: any) {
            // This throws a 404 if the account does not have any rewards, which
            // is fine, just return an empty array and display no rewards
            if (error.error.error === "No rewards found for this address") {
              return [];
            }
            // There are no other well-known errors we can catch, so re-throw
            throw error;
          }
        }
      : undefined,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
