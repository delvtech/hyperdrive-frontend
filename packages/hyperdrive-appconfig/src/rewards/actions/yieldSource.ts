import { RewardResolverId } from "src/rewards/resolvers";
import { YieldSourceId } from "src/yieldSources/types";

/**
 * The id to find rewards for a given yield source and chain id.
 */
export type YieldSourceRewardId = `yieldSource:${number}:${string}`;

export function getYieldSourceRewardId({
  chainId,
  yieldSourceId,
}: {
  chainId: number;
  yieldSourceId: YieldSourceId;
}): YieldSourceRewardId {
  return `yieldSource:${chainId}:${yieldSourceId}`;
}

export function getYieldSourceRewards({
  chainId,
  yieldSourceId,
  rewards,
}: {
  chainId: number;
  yieldSourceId: YieldSourceId;
  rewards: RewardResolverId[];
}): Record<YieldSourceRewardId, RewardResolverId[]> {
  return {
    [getYieldSourceRewardId({ chainId, yieldSourceId })]: rewards,
  };
}
