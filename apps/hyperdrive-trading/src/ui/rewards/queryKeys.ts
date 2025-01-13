import { RewardResolverKey } from "@delvtech/hyperdrive-appconfig";
import "src/base/makeQueryKey";
import { Address } from "viem";

interface RewardsQueryKeys {
  /**
   * @deprecated
   */
  rewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };

  rewardResolver: {
    resolverId: RewardResolverKey;
  };

  // TODO: We may not openShortRewards and addLiquidityRewards, as these queries
  // are just list wrappers around the `rewardResolver` query above
  openShortRewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  addLiquidityRewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    rewards: RewardsQueryKeys;
  }
}
