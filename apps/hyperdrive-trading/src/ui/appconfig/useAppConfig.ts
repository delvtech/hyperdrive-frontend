import { AppConfig, appConfig } from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId();

  // split config into mainnet and testnet
  const { testnetConfig, mainnetConfig } = useMemo(() => {
    const { chains, hyperdrives, registries, ...nonSpecific } = appConfig;

    const testnetConfig: AppConfig = {
      chains: {},
      hyperdrives: [],
      registries: {},
      ...nonSpecific,
    };
    const mainnetConfig: AppConfig = {
      chains: {},
      hyperdrives: [],
      registries: {},
      ...nonSpecific,
    };

    // chains
    for (const [chainIdString, chain] of Object.entries(chains)) {
      const chainId = +chainIdString;
      if (isTestnetChain(chainId)) {
        testnetConfig.chains[chainId] = chain;
      } else {
        mainnetConfig.chains[chainId] = chain;
      }
    }

    // registries
    for (const [chainIdString, registry] of Object.entries(registries)) {
      const chainId = +chainIdString;
      if (isTestnetChain(chainId)) {
        testnetConfig.registries[chainId] = registry;
      } else {
        mainnetConfig.registries[chainId] = registry;
      }
    }

    // hyperdrives
    for (const hyperdrive of hyperdrives) {
      if (isTestnetChain(hyperdrive.chainId)) {
        testnetConfig.hyperdrives.push(hyperdrive);
      } else {
        mainnetConfig.hyperdrives.push(hyperdrive);
      }
    }

    return { testnetConfig, mainnetConfig };
  }, []);

  return isTestnetChain(chainId) ? testnetConfig : mainnetConfig;
}
