import { HyperdriveConfig } from "src/config/HyperdriveConfig";
import {
  hyperdriveConfigs,
  SupportedChainId,
} from "src/config/hyperdrive.config";

export function getHyperdriveConfig(
  chainId: SupportedChainId,
): HyperdriveConfig {
  return hyperdriveConfigs[chainId];
}
