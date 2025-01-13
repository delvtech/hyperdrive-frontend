import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { AnyRewardId } from "src/rewards/actions/types";
import { RewardResolverId } from "src/rewards/resolvers";
import { Address } from "viem";

export interface HyperdriveRewardsMap {
  short?: RewardResolverId[];
  lp?: RewardResolverId[];
}

/**
 * Parse a hyperdrive's rewards into the reward system
 */
export function parseHyperdriveRewardsMap({
  hyperdriveAddress,
  chainId,
  rewardsMap,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  rewardsMap: {
    long?: RewardResolverId[];
    short?: RewardResolverId[];
    lp?: RewardResolverId[];
  };
}): Record<AnyRewardId, RewardResolverId[]> {
  const rewards: Record<AnyRewardId, RewardResolverId[]> = {};
  rewardsMap?.short?.forEach((reward) => {
    const key = getOpenShortRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  rewardsMap?.lp?.forEach((reward) => {
    const key = getAddLiquidityRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  return rewards;
}
