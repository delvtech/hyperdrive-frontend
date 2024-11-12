// appconfigs
import { YieldSource, YieldSourceId, YieldSourceIdMap } from "./yieldSources/types";
import "./yieldSources/yieldSources";
export type YieldSourceId2 = keyof YieldSourceIdMap;

export type { AppConfig } from "./appconfig/AppConfig";
export { appConfig } from "./generated/all.appconfig";
export { mainnetAppConfig } from "./generated/mainnet.appconfig";
export { testnetAppConfig } from "./generated/testnet.appconfig";

// chains
export { makeAddressUrl } from "./chains/blockexplorer/makeAddressUrl";
export { makeTransactionUrl } from "./chains/blockexplorer/makeTransactionUrl";
export type { ChainConfig } from "./chains/chains";
export { isMainnetChain } from "./chains/isMainnetChain";

// appconfig selectors
export { findBaseToken, findHyperdriveConfig } from "./hyperdrives/selectors";
export { findToken } from "./tokens/selectors";

// hyperdrive
export type { HyperdriveConfig } from "./hyperdrives/HyperdriveConfig";

// tokens
export {
  AERO_ICON_URL,
  EETH_ICON_URL,
  EURC_ICON_URL,
  USDC_ICON_URL,
  WELL_ICON_URL,
} from "./tokens/tokenIconsUrls";
export type { TokenConfig } from "./tokens/types";

// yield sources
export { yieldSources } from "./yieldSources/yieldSources";
export type { YieldSource, YieldSourceId };

// rewards
export { rewardFunctions } from "./rewards/rewards";
export type {
  AnyReward,
  InfoReward,
  NonTransferableTokenReward,
  RewardsResolver as RewardsFn,
  TransferableTokenReward,
} from "./rewards/types";

// protocols
export { protocols } from "./protocols";
export type { Protocol, ProtocolId } from "./protocols";
