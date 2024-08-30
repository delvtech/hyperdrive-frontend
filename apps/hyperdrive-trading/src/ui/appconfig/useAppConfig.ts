import { AppConfig, appConfig } from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId();

  // split config into mainnet and testnet
  const { testnetConfig, mainnetConfig } = useMemo(() => {
    const { chains, hyperdrives, registries, tokens, ...nonSpecific } =
      appConfig;

    const testnetConfig: AppConfig = {
      ...nonSpecific,
      chains: {},
      hyperdrives: [],
      registries: {},
      tokens: [],
    };
    const mainnetConfig: AppConfig = {
      ...nonSpecific,
      chains: {},
      hyperdrives: [],
      registries: {},
      tokens: [],
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

    // tokens
    for (const token of tokens) {
      if (isTestnetChain(token.chainId)) {
        testnetConfig.tokens.push(token);
      } else {
        mainnetConfig.tokens.push(token);
      }
    }

    return { testnetConfig, mainnetConfig };
  }, []);

  return isTestnetChain(chainId) ? testnetConfig : mainnetConfig;
}
