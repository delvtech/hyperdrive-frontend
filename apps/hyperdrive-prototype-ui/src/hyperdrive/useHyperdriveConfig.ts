import { useChainId } from "wagmi";
import {
  HyperdriveConfig,
  hyperdriveConfigs,
  SupportedChainId,
} from "./config";

export function useHyperdriveConfig(): HyperdriveConfig {
  const chainId = useChainId() as SupportedChainId;
  console.log({ hyperdriveConfigs, chainId });
  return hyperdriveConfigs[chainId];
}
