import { parseFixed } from "@delvtech/fixed-point-wasm";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { rewardsFork } from "src/chains/rewardsFork";
import { ClaimableReward } from "src/rewards/ClaimableReward";
import { HyperdriveRewardsApi } from "src/rewards/generated/HyperdriveRewardsApi";
import { fetchMileRewards } from "src/rewards/merkl";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
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
  const { isFlagEnabled: isHyperdriveApiRewardsEnabled } =
    useFeatureFlag("portfolio-rewards");
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "rewards",
      queryId: "unclaimedRewards",
      params: { account },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const mileRewards = await fetchMileRewards(account);

          const allRewards = [...mileRewards];
          if (isHyperdriveApiRewardsEnabled) {
            const hyperdriveRewards = await fetchHyperdriveRewardApi(account);
            allRewards.push(...hyperdriveRewards);
          }

          return allRewards;
        }
      : undefined,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
/**
 * Rewards that come from the Hyperdrive Rewards API server. This server also
 * defines the shape used for rewards everywhere else in the app.
 */
async function fetchHyperdriveRewardApi(
  account: Address,
): Promise<ClaimableReward[]> {
  const rewardsApi = new HyperdriveRewardsApi({
    baseUrl: import.meta.env.VITE_REWARDS_BASE_URL,
  });

  const response = await rewardsApi.get.rewardsUserDetail(account);
  // TODO: Remove this once claimbableAmount is no longer formatted server side
  return response.rewards.map((r) => ({
    ...r,
    chainId: rewardsFork.id,
    merkleType: "HyperdriveMerkle",
    claimableAmount: parseFixed(r.claimableAmount).bigint.toString(),
  }));
}
