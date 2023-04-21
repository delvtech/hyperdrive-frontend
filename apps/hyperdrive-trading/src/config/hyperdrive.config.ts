import { HyperdriveConfig } from "./HyperdriveConfig";
import { goerliHyperdriveConfig } from "./chains/goerli";

export const supportedChainIds = [5] as const;
export type SupportedChainId = (typeof supportedChainIds)[number];

export const hyperdriveConfigs: Record<SupportedChainId, HyperdriveConfig> = {
  5: goerliHyperdriveConfig,
};
