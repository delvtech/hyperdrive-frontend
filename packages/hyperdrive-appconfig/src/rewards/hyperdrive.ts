import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { AnyRewardId } from "src/rewards/actions/types";
import { RewardConfigId } from "src/rewards/resolvers";
import { Address } from "viem";

export interface HyperdriveRewardsMap {
  short?: RewardConfigId[];
  lp?: RewardConfigId[];
}

/**
 * Parse a hyperdrive's rewards into the reward system
 */
export function getHyperdriveRewards({
  hyperdriveAddress,
  chainId,
  rewardsMap,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  rewardsMap: {
    short?: RewardConfigId[];
    lp?: RewardConfigId[];
  };
}): Record<AnyRewardId, RewardConfigId[]> {
  const rewards: Record<AnyRewardId, RewardConfigId[]> = {};
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
