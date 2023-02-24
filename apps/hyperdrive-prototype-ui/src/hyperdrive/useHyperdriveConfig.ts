import { useChainId } from "wagmi";
import {
  HyperdriveConfig,
  hyperdriveConfigs,
  SupportedChainId,
} from "./config";

export function useHyperdriveConfig(): HyperdriveConfig {
  const chainId: SupportedChainId = (useChainId() as SupportedChainId) || 31337;
  console.log({ hyperdriveConfigs, chainId });
  return hyperdriveConfigs[chainId];
}
