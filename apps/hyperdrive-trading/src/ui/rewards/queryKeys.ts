import { RewardConfigId, YieldSourceId } from "@delvtech/hyperdrive-appconfig";
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
    rewardConfigId: RewardConfigId;
    chainId: number;
  };

  /**
   * The `unclaimedRewards` query fetches the total unclaimed rewards for a
   * given account across all hyperdrives and chains.
   *
   */
  unclaimedRewards: {
    account: Address | undefined;
    chainIds: number[];
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
