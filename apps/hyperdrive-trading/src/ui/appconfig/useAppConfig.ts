import { AppConfig, appConfig } from "@hyperdrive/appconfig";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { SupportedChainId } from "src/chains/supportedChains";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId() as SupportedChainId;
  if (isTestnetChain(chainId)) {
    return {
      ...appConfig,
      hyperdrives: appConfig.hyperdrives.filter((hyperdrive) =>
        isTestnetChain(hyperdrive.chainId),
      ),
    };
  }
  return {
    ...appConfig,
    hyperdrives: appConfig.hyperdrives.filter(
      (hyperdrive) => !isTestnetChain(hyperdrive.chainId),
    ),
  };
}
