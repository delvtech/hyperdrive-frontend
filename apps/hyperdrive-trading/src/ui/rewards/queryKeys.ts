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
