import { ChainId } from "src/chains/chains";
import { ProtocolId } from "src/protocols";
import { rewardFunctions } from "src/rewards/rewards";

// Base interface with common properties
export interface YieldSourceDefinition {
  id: string;
  chainId: ChainId;
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
