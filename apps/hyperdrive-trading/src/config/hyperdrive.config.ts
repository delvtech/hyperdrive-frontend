import { goerliHyperdriveConfig } from "./chains/goerli";
import { HyperdriveConfig } from "./HyperdriveConfig";

export type SupportedChainId = 5;

export const hyperdriveConfigs: Record<SupportedChainId, HyperdriveConfig> = {
  5: goerliHyperdriveConfig,
};
