import { AppConfig } from "src/appconfig/AppConfig";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getToken } from "src/tokens/selectors";

export function getMainnetAndTestnetAppConfigs(appConfig: AppConfig): {
  mainnetConfig: AppConfig;
  testnetConfig: AppConfig;
} {
  const testnetConfig: AppConfig = {
    ...appConfig,
    registries: {},
    hyperdrives: [],
    tokens: [],
    chains: {},
  };

  const mainnetConfig: AppConfig = {
    ...appConfig,
    registries: {},
    hyperdrives: [],
    tokens: [],
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
    if (isTestnetChain(hyperdrive.chainId)) {
      testnetConfig.hyperdrives.push(hyperdrive);
    } else {
      mainnetConfig.hyperdrives.push(hyperdrive);
    }
  }

  // Populate the tokens
  for (const token of appConfig.tokens) {
    if (isTestnetChain(token.chainId)) {
      testnetConfig.tokens.push(token);
    } else {
      mainnetConfig.tokens.push(token);
    }
  }
  // also include tokens for any fallbackBaseTokens that might exist
  for (const hyperdrive of appConfig.hyperdrives) {
    if (!hyperdrive.baseTokenFallback) {
      continue;
    }

    const fallbackBaseToken = getToken({
      chainId: hyperdrive.baseTokenFallback.chainId,
      tokenAddress: hyperdrive.baseTokenFallback.address,
      appConfig,
    })!;

    const targetAppConfig = isTestnetChain(hyperdrive.chainId)
      ? testnetConfig
      : mainnetConfig;

    const fallbackBaseTokenAlreadyExists = !!getToken({
      chainId: fallbackBaseToken.chainId,
      tokenAddress: fallbackBaseToken.address,
      appConfig: targetAppConfig,
    });

    if (!fallbackBaseTokenAlreadyExists) {
      targetAppConfig.tokens.push(fallbackBaseToken);
    }
  }

  // Populate the chains
  for (const [chainIdString, chain] of Object.entries(appConfig.chains)) {
    if (isTestnetChain(+chainIdString)) {
      testnetConfig.chains[+chainIdString] = chain;
    } else {
      mainnetConfig.chains[+chainIdString] = chain;
    }
  }

  // also include chains for any fallbackBaseTokens that might exist
  for (const hyperdrive of appConfig.hyperdrives) {
    if (!hyperdrive.baseTokenFallback) {
      continue;
    }

    const fallbackBaseTokenChain =
      appConfig.chains[hyperdrive.baseTokenFallback.chainId];

    const targetAppConfig = isTestnetChain(hyperdrive.chainId)
      ? testnetConfig
      : mainnetConfig;

    targetAppConfig.chains[fallbackBaseTokenChain.id] = fallbackBaseTokenChain;
  }

  return { mainnetConfig, testnetConfig };
}
