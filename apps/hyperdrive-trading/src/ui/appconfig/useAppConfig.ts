import { AppConfig, appConfig, protocols } from "@hyperdrive/appconfig";
import { ZERO_ADDRESS } from "src/base/constants";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { SupportedChainId } from "src/chains/supportedChains";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia } from "viem/chains";
import { useChainId } from "wagmi";

const baseSepoliaAppConfig: AppConfig = {
  chains: {},
  registries: {
    [baseSepolia.id]: ZERO_ADDRESS,
  },
  hyperdrives: [],
  tokens: [],
  protocols: protocols,
  yieldSources: {} as any,
};

const b3SepoliaAppConfig: AppConfig = {
  chains: {},
  registries: {
    [b3Sepolia.id]: ZERO_ADDRESS,
  },
  hyperdrives: [],
  tokens: [],
  protocols: protocols,
  yieldSources: {} as any,
};
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
