import { useChainId } from "wagmi";
import { hyperdriveConfigs, SupportedChainId } from "./config";

export function useHyperdriveConfig() {
  const chainId = useChainId() as SupportedChainId;
  console.log({hyperdriveConfigs, chainId})
  return hyperdriveConfigs[chainId];
}
