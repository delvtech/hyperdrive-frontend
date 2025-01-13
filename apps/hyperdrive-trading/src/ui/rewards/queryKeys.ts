import {
  RewardResolverId,
  YieldSourceId,
} from "@delvtech/hyperdrive-appconfig";
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
    resolverId: RewardResolverId;
  };

  // TODO: We may not need these as these queries are just list wrappers around
  // the `rewardResolver` query above
  openShortRewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  addLiquidityRewards: {
    chainId: number;
    hyperdriveAddress: Address;
  };
  yieldSourceRewards: {
    chainId: number;
    yieldSourceId: YieldSourceId;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    rewards: RewardsQueryKeys;
  }
}
