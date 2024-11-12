// This interface is intentionally empty to allow for declaration merging with

import { ChainId } from "../chains/chains";
import { ProtocolId } from "../protocols";
import { rewardFunctions } from "../rewards/rewards";


export interface YieldSourceIdMap {
  // This interface is intentionally empty to allow for declaration merging.
  // DO NOT MODIFY THIS INTERFACE HERE.
}

// YieldSourceId is a union of all keys in YieldSourceIdMap
export type YieldSourceId = keyof YieldSourceIdMap;

// Base interface with common properties
export interface YieldSource {
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
  rewardsFn?: keyof typeof rewardFunctions;
}
