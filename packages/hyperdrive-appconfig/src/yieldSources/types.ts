import { ChainId } from "src/chains/chains";
import { ProtocolId } from "src/protocols";
import { rewardFunctions } from "src/rewards/rewards";

/**
 * The comprehensive list of all yield source ids. To add a new yield source,
 * add the id to this union type, then create the YieldSource object in its
 * respective file.
 */
export type YieldSourceId =
  | "morphoCbethUsdc"
  | "cbeth"
  | "mwEth"
  | "mwEurc"
  | "mwUsdc"
  | "stkWell"
  | "snars"
  | "aeroUsdcAero"
  | "gnosisWsteth"
  | "sxdai"
  | "gnosisSgyd"
  | "rseth"
  | "lineaEzeth"
  | "makerDsr"
  | "lidoSteth"
  | "morphoSusdeDai"
  | "morphoUsdeDai"
  | "morphoWstethUsdc"
  | "morphoWstethUsda"
  | "reth"
  | "ezeth"
  | "stusd"
  | "eeth"
  | "usds"
  | "susds"
  | "susde"
  | "sgyd";

// Base interface with common properties
export interface YieldSourceConfig {
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
