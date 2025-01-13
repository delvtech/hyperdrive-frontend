import { AppConfig } from "src/appconfig/AppConfig";
import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { getYieldSourceRewardId } from "src/rewards/actions/yieldSource";
import { RewardResolverId, rewardResolvers } from "src/rewards/resolvers";
import { RewardsResolver } from "src/rewards/types";
import { YieldSourceId } from "src/yieldSources/types";
import { Address } from "viem";

export function getRewardsResolver({
  resolverId,
}: {
  resolverId: RewardResolverId;
}): RewardsResolver | undefined {
  return rewardResolvers[resolverId];
}

export function getYieldSourceRewardResolverIds({
  yieldSourceId,
  chainId,
  appConfig,
}: {
  yieldSourceId: YieldSourceId;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] | undefined {
  const yieldSourceRewardId = getYieldSourceRewardId({
    chainId,
    yieldSourceId,
  });
  return appConfig.rewards[yieldSourceRewardId];
}

export function getOpenShortRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] | undefined {
  const openShortRewardId = getOpenShortRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[openShortRewardId];
}

export function getAddLiquidityRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] | undefined {
  const addLiquidityId = getAddLiquidityRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[addLiquidityId];
}
