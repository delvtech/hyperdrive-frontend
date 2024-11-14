import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getToken } from "src/tokens/selectors";
import { TokenConfig } from "src/tokens/types";
import { YieldSourceConfig } from "src/yieldSources/types";
import { Address, zeroAddress } from "viem";

/**
 * Returns a strongly typed HyperdriveConfig for the hyperdrive address and
 * chain id
 */
export function getHyperdriveConfig({
  hyperdriveChainId,
  hyperdriveAddress,
  appConfig,
}: {
  hyperdriveChainId: number;
  hyperdriveAddress: Address;
  appConfig: AppConfig;
}): HyperdriveConfig {
  const hyperdriveConfig = appConfig.hyperdrives.find(
    (hyperdriveConfig) =>
      hyperdriveConfig.address === hyperdriveAddress &&
      hyperdriveConfig.chainId === hyperdriveChainId,
  );

  if (!hyperdriveConfig) {
    throw new Error(
      `Missing hyperdrive config ${hyperdriveAddress} for chain ${hyperdriveChainId}. Make sure your appconfig's "hyperdrives" property is properly constructed.`,
    );
  }

  return hyperdriveConfig;
}

/**
 * Gets the YieldSourceConfig for a given hyperdrive
 */
export function getYieldSource({
  hyperdriveChainId,
  hyperdriveAddress,
  appConfig,
}: {
  hyperdriveChainId: number;
  hyperdriveAddress: Address;
  appConfig: AppConfig;
}): YieldSourceConfig {
  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: hyperdriveChainId,
    hyperdriveAddress,
    appConfig,
  });

  return appConfig.yieldSources[hyperdriveConfig.yieldSource];
}

/**
 * Retrieves the base token associated with a specific Hyperdrive address. This
 * token is used to denominate both `vaultSharePrice` and `lpSharePrice`, and
 * serves as the input token for Hyperdrives that accept a base token. If the
 * pool's configuration does not specify a base token (e.g., it is set to the
 * zero address), the function will attempt to return a fallback base token.
 */
export function getBaseToken({
  hyperdriveChainId,
  hyperdriveAddress,
  appConfig,
}: {
  hyperdriveChainId: number;
  hyperdriveAddress: Address;
  appConfig: AppConfig;
}): TokenConfig {
  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: hyperdriveChainId,
    hyperdriveAddress,
    appConfig,
  });

  let baseToken: TokenConfig | null | undefined;

  // If there's no base token on pool config, see if there's a fallback
  if (hyperdriveConfig.poolConfig.baseToken !== zeroAddress) {
    baseToken = getToken({
      chainId: hyperdriveConfig.chainId,
      tokenAddress: hyperdriveConfig.poolConfig.baseToken,
      appConfig,
    });
  } else if (hyperdriveConfig.baseTokenFallback) {
    baseToken = getToken({
      chainId: hyperdriveConfig.baseTokenFallback.chainId,
      tokenAddress: hyperdriveConfig.baseTokenFallback.address,
      appConfig,
    });
  }

  // At this point your appconfig is broken
  if (!baseToken) {
    throw new Error(
      `Missing base token for hyperdrive: ${hyperdriveAddress}, baseToken address: ${hyperdriveConfig.poolConfig.baseToken}, chainId: ${hyperdriveChainId}`,
    );
  }

  return baseToken;
}
