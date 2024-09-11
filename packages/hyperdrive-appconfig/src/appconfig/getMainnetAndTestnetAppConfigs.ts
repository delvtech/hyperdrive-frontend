import { AppConfig } from "src/appconfig/AppConfig";

export function getMainnetAndTestnetAppConfigs(appConfig: AppConfig): {
  mainnetConfig: AppConfig;
  testnetConfig: AppConfig;
} {
  const testnetConfig: AppConfig = {
    ...appConfig,
    registries: {},
    hyperdrives: [],
    chains: {},
  };

  const mainnetConfig: AppConfig = {
    ...appConfig,
    registries: {},
    hyperdrives: [],
    chains: {},
  };

  // Populate the registries
  for (const [chainIdString, registry] of Object.entries(
    appConfig.registries,
  )) {
    const chainId = +chainIdString;
    const isTestnet = appConfig.chains[chainId].isTestnet;
    if (isTestnet) {
      testnetConfig.registries[chainId] = registry;
    } else {
      mainnetConfig.registries[chainId] = registry;
    }
  }

  // Populate the hyperdrives
  for (const hyperdrive of appConfig.hyperdrives) {
    const isTestnet = appConfig.chains[hyperdrive.chainId].isTestnet;
    if (isTestnet) {
      testnetConfig.hyperdrives.push(hyperdrive);
    } else {
      mainnetConfig.hyperdrives.push(hyperdrive);
    }
  }

  // Populate the chains
  for (const [chainIdString, chain] of Object.entries(appConfig.chains)) {
    if (chain.isTestnet) {
      testnetConfig.chains[+chainIdString] = chain;
    } else {
      mainnetConfig.chains[+chainIdString] = chain;
    }
  }
  // also include chains for any fallbackBaseTokens that might exist
  for (const hyperdrive of appConfig.hyperdrives) {
    const isTestnet = appConfig.chains[hyperdrive.chainId].isTestnet;
    if (hyperdrive.baseTokenFallback?.chainId) {
      if (isTestnet) {
        testnetConfig.chains[hyperdrive.baseTokenFallback.chainId] =
          appConfig.chains[hyperdrive.baseTokenFallback.chainId];
      } else {
        mainnetConfig.chains[hyperdrive.baseTokenFallback.chainId] =
          appConfig.chains[hyperdrive.baseTokenFallback.chainId];
      }
    }
  }

  return { mainnetConfig, testnetConfig };
}
