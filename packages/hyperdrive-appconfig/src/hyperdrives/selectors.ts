import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { findToken } from "src/tokens/selectors";
import { yieldSources } from "src/yieldSources";
import { Address, zeroAddress } from "viem";

/**
 * Finds and returns the configuration for a specific Hyperdrive based on its
 * address. Throws an error if the Hyperdrive configuration is not found.
 */
export function findHyperdriveConfig({
  hyperdriveAddress,
  hyperdrives,
}: {
  hyperdriveAddress: Address;
  hyperdrives: HyperdriveConfig[];
}): HyperdriveConfig {
  const hyperdriveConfig = hyperdrives.find(
    (hyperdriveConfig) => hyperdriveConfig.address === hyperdriveAddress,
  );

  if (!hyperdriveConfig) {
    throw new Error(`Missing hyperdrive config ${hyperdriveAddress}.`);
  }

  return hyperdriveConfig;
}

/**
 * Retrieves the appropriate base token for display purposes given a specific
 * Hyperdrive address.  If the pool configuration does not specify a base
 * token, this function attempts to find a fallback base token from the
 * associated yield source. Throws an error if neither the base token nor the
 * fallback token can be located.
 *
 * **Important:** This selector is intended solely for display purposes and
 * should not be used as the definitive source of truth for a Hyperdrive's base
 * token, as the token address may still be set to the zero address on-chain.
 */
export function findDisplayBaseToken({
  hyperdriveAddress,
  appConfig,
}: {
  hyperdriveAddress: Address;
  appConfig: AppConfig;
}): TokenConfig {
  const hyperdriveConfig = findHyperdriveConfig({
    hyperdriveAddress,
    hyperdrives: appConfig.hyperdrives,
  });

  // If there's no base token specified in pool config, see if there's a
  // fallback one for display purposes on the yield source
  if (hyperdriveConfig.poolConfig.baseToken === zeroAddress) {
    const yieldSource = yieldSources[hyperdriveConfig.yieldSource];
    if (yieldSource.baseTokenFallback) {
      return findToken({
        tokenAddress: yieldSource.baseTokenFallback.address,
        tokens: appConfig.tokens,
      });
    }
  }

  const baseToken = findToken({
    tokenAddress: hyperdriveConfig.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });

  if (!baseToken) {
    throw new Error(`Missing base token for hyperdrive: ${hyperdriveAddress}.`);
  }
  return baseToken;
}
