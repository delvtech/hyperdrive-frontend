import {
  hyperdriveConfigs,
  SupportedChainId,
} from "src/config/hyperdrive.config";
import { HyperdriveConfig } from "src/config/HyperdriveConfig";

export function getHyperdriveConfig(
  chainId: SupportedChainId,
): HyperdriveConfig {
  return hyperdriveConfigs[chainId];
}
