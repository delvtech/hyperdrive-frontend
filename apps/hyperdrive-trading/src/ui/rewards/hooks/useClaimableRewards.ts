import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { ClaimableReward } from "src/rewards/ClaimableReward";
import { fetchMerklRewards } from "src/rewards/merklUserRewards";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useClaimableRewards({
  account,
}: {
  account: Address | undefined;
}): {
  rewards: ClaimableReward[] | undefined;
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
          return fetchMerklRewards(account);
        }
      : undefined,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
