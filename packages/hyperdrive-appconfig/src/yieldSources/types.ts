// This interface is intentionally empty to allow for declaration merging with

import { ChainId } from "src/chains/chains";
import { ProtocolId } from "src/protocols";
import { RewardFunctions } from "src/rewards/rewards";

export interface YieldSourceIdMap {
  // This interface is intentionally empty to allow for declaration merging.
  // DO NOT MODIFY THIS INTERFACE HERE.
}

// YieldSourceId is a union of all keys in YieldSourceIdMap
export type YieldSourceId = keyof YieldSourceIdMap;

export interface YieldSource<
  RewardFunctionKey extends
    | keyof typeof RewardFunctions
    | undefined = undefined,
> {
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

  rewards?: RewardFunctionKey extends keyof typeof RewardFunctions
    ? {
        functionName: RewardFunctionKey;
        args: Parameters<(typeof RewardFunctions)[RewardFunctionKey]>;
      }
    : undefined;
}
