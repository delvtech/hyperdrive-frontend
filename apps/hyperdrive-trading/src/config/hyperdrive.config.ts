import { goerliHyperdriveConfig } from "./chains/goerli";
import { HyperdriveConfig } from "./HyperdriveConfig";

export const supportedChainIds = [5] as const;
export type SupportedChainId = (typeof supportedChainIds)[number];

export const hyperdriveConfigs: Record<SupportedChainId, HyperdriveConfig> = {
  5: goerliHyperdriveConfig,
};
