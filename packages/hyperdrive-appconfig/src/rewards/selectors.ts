import { AppConfig } from "src/appconfig/AppConfig";
import { EMPTY_ARRAY } from "src/base/constants";
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

export function getRewardResolvers({
  resolverIds,
}: {
  resolverIds: RewardResolverId[];
}): RewardsResolver[] {
  const resolvers = resolverIds
    .map((resolverId) => getRewardsResolver({ resolverId }))
    .filter((resolver) => !!resolver);

  if (resolvers.length) {
    return resolvers;
  }

  return EMPTY_ARRAY;
}

export function getYieldSourceRewardResolverIds({
  yieldSourceId,
  chainId,
  appConfig,
}: {
  yieldSourceId: YieldSourceId;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] {
  const yieldSourceRewardId = getYieldSourceRewardId({
    chainId,
    yieldSourceId,
  });
  return appConfig.rewards[yieldSourceRewardId] ?? EMPTY_ARRAY;
}

export function getOpenShortRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] {
  const openShortRewardId = getOpenShortRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[openShortRewardId] ?? EMPTY_ARRAY;
}

export function getAddLiquidityRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverId[] {
  const addLiquidityId = getAddLiquidityRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[addLiquidityId] ?? EMPTY_ARRAY;
}
