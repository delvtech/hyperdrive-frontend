// appconfigs
export type { AppConfig } from "src/appconfig/AppConfig";
export { ethereumAppConfig } from "src/generated/1.appconfig";
export { gnosisAppConfig } from "src/generated/100.appconfig";
export { sepoliaAppConfig } from "src/generated/11155111.appconfig";
export { lineaMainnetAppConfig } from "src/generated/59144.appconfig";
export { baseAppConfig } from "src/generated/8453.appconfig";
export { appConfig } from "src/generated/all.appconfig";
export { mainnetAppConfig } from "src/generated/mainnet.appconfig";
export { testnetAppConfig } from "src/generated/testnet.appconfig";

// chains
export { makeAddressUrl } from "src/chains/blockexplorer/makeAddressUrl";
export { makeTransactionUrl } from "src/chains/blockexplorer/makeTransactionUrl";
export type { ChainConfig } from "src/chains/chains";
export { isMainnetChain } from "src/chains/isMainnetChain";

// appconfig selectors
export { findBaseToken, findHyperdriveConfig } from "src/hyperdrives/selectors";
export { findToken } from "src/tokens/selectors";

// hyperdrive
export type { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";

// tokens
export type { TokenConfig } from "src/tokens/getTokenConfig";
export {
  EETH_ICON_URL,
  EURC_ICON_URL,
  USDC_ICON_URL,
  WELL_ICON_URL,
} from "src/tokens/tokenIconsUrls";

// yield sources
export type { YieldSource, YieldSourceId } from "src/yieldSources/types";
export { yieldSources } from "src/yieldSources/yieldSources";

// rewards
export type { AnyReward as Reward, RewardsFn } from "src/rewards/types";
// import { fetchMorphoRewards } from "src/rewards/morpho";

// export const rewardsFunctions = {
//   fetchMorphoRewards,
// };
// called like this:
// import {rewardsFunctions, findYieldSource} from '@delvtech/appconfig';
// const yieldSource = findYieldSource({hyperdriveAddress, appConfig});
// const rewards = rewardsFunctions[yieldSource.rewardsFunctionId](...yieldSource.rewardsFunctionArgs)

// protocols
export { protocols } from "src/protocols";
export type { Protocol, ProtocolId } from "src/protocols";
