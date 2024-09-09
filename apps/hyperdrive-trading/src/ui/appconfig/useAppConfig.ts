import { AppConfig, appConfig } from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { isMainnetChain } from "src/chains/isMainnetChain";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const connectedChainId = useChainId();

  // split config into mainnet and testnet
  const { testnetConfig, mainnetConfig } = useMemo(() => {
    const { hyperdrives, registries, ...nonSpecific } = appConfig;

    const testnetConfig: AppConfig = {
      registries: {},
      hyperdrives: [],
      ...nonSpecific,
    };
    const mainnetConfig: AppConfig = {
      registries: {},
      hyperdrives: [],
      ...nonSpecific,
    };

    // registries
    for (const [chainIdString, registry] of Object.entries(registries)) {
      const chainId = +chainIdString;
      if (isMainnetChain(chainId)) {
        mainnetConfig.registries[chainId] = registry;
      } else {
        testnetConfig.registries[chainId] = registry;
      }
    }

    // hyperdrives
    for (const hyperdrive of hyperdrives) {
      if (isMainnetChain(hyperdrive.chainId)) {
        mainnetConfig.hyperdrives.push(hyperdrive);
      } else {
        testnetConfig.hyperdrives.push(hyperdrive);
      }
    }

    return { testnetConfig, mainnetConfig };
  }, []);

  return isMainnetChain(connectedChainId) ? mainnetConfig : testnetConfig;
}
