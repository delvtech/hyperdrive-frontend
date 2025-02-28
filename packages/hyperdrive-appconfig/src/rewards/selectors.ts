import { AppConfig } from "src/appconfig/AppConfig";
import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { RewardConfigId, rewardConfigs } from "src/rewards/resolvers";
import { RewardConfig } from "src/rewards/types";
import { Address } from "viem";

export function getRewardConfig({
  rewardConfigId,
}: {
  rewardConfigId: RewardConfigId;
}): RewardConfig | undefined {
  return rewardConfigs[rewardConfigId];
}

export function getOpenShortRewardConfigs({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardConfig[] | undefined {
  const openShortRewardId = getOpenShortRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[openShortRewardId]
    ?.map((rewardConfigId) => getRewardConfig({ rewardConfigId }))
    .filter(Boolean) as RewardConfig[];
}

export function getAddLiquidityRewardConfigs({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardConfig[] | undefined {
  const addLiquidityId = getAddLiquidityRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[addLiquidityId]
    ?.map((rewardConfigId) => getRewardConfig({ rewardConfigId }))
    .filter(Boolean) as RewardConfig[];
}
