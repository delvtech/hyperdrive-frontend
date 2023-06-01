import {
  SupportedChainId,
  supportedChainIds,
} from "src/config/hyperdrive.config";
import { HyperdriveConfig } from "src/config/HyperdriveConfig";
import { getHyperdriveConfig } from "src/config/utils/getHyperdriveConfig";
import { useChainId } from "wagmi";

export function useAppConfig(): HyperdriveConfig {
  const chainId = useChainId();
  if (!supportedChainIds.includes(chainId as SupportedChainId)) {
    // This should never happen with a properly configured wagmi config
    throw new Error(
      `Cannot fetch hyperdrive config with chain id: ${chainId}.`,
    );
  }
  return getHyperdriveConfig(chainId as SupportedChainId);
}
