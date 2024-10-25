// This interface is intentionally empty to allow for declaration merging with

import { ChainId } from "src/chains/chains";
import { ProtocolId } from "src/protocols";
import { rewardFunctions } from "src/rewards/rewards";

export interface YieldSourceIdMap {
  // This interface is intentionally empty to allow for declaration merging.
  // DO NOT MODIFY THIS INTERFACE HERE.
}

// YieldSourceId is a union of all keys in YieldSourceIdMap
export type YieldSourceId = keyof YieldSourceIdMap;

// Base interface with common properties
interface YieldSourceBase {
  chainId: ChainId;
  id: YieldSourceId;
  shortName: string;
  protocol: ProtocolId;
  /**
   * If true, the yield source's shares token will be considered 1 to 1 with the
   * base token. Defaults to false.
   *
   * @deprecated  TODO: Move this onto HyperdriveConfig
   */
  isSharesPeggedToBase?: boolean;
  /**
   * Number of days in the past to consider for historical rates. This should be
   * used to calculate LP APY and Yield Source APYs.
   */
  historicalRatePeriod: number;
}

// Interface when RewardFunctionKey is provided
export interface YieldSourceWithReward<
  RewardFunctionKey extends keyof typeof rewardFunctions,
> extends YieldSourceBase {
  rewards: {
    functionName: RewardFunctionKey;
    args: Parameters<(typeof rewardFunctions)[RewardFunctionKey]>;
  };
}

// Interface when RewardFunctionKey is not provided
export interface YieldSourceWithoutReward extends YieldSourceBase {
  rewards?: undefined;
}

// Union type that enforces the presence of rewards based on RewardFunctionKey
export type YieldSource<
  RewardFunctionKey extends
    | keyof typeof rewardFunctions
    | undefined = undefined,
> = RewardFunctionKey extends keyof typeof rewardFunctions
  ? YieldSourceWithReward<RewardFunctionKey>
  : YieldSourceWithoutReward;
