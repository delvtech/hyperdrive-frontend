import { AppConfig } from "src/appconfig/AppConfig";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { findToken } from "src/tokens/selectors";
import { Address, zeroAddress } from "viem";

/**
 * Returns a strongly typed TokenConfig for the yield source token.
 */
export function findHyperdriveConfig({
  hyperdrives,
  hyperdriveAddress,
}: {
  hyperdrives: HyperdriveConfig[];
  hyperdriveAddress: Address;
}): HyperdriveConfig {
  const hyperdriveConfig = hyperdrives.find(
    (hyperdriveConfig) => hyperdriveConfig.address === hyperdriveAddress,
  );

  if (!hyperdriveConfig) {
    throw new Error(
      `Missing hyperdrive config ${hyperdriveAddress}. Make sure your appconfig's "hyperdrives" property is properly constructed.`,
    );
  }

  return hyperdriveConfig;
}
/**
 * Retrieves the base token associated with a specific Hyperdrive address. This
 * token is used to denominate both `vaultSharePrice` and `lpSharePrice`, and
 * serves as the input token for Hyperdrives that accept a base token. If the
 * pool's configuration does not specify a base token (e.g., it is set to the
 * zero address), the function will attempt to return a fallback base token.
 */
export function findBaseToken({
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

  // If there's no base token on pool config, see if there's a fallback
  if (
    hyperdriveConfig.poolConfig.baseToken === zeroAddress &&
    hyperdriveConfig.baseTokenFallback
  ) {
    return findToken({
      tokenAddress: hyperdriveConfig.baseTokenFallback.address,
      tokens: appConfig.tokens,
    });
  }

  // Otherwise, use the pool's base token
  const baseToken = findToken({
    tokenAddress: hyperdriveConfig.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });

  // At this point your appconfig is broken
  if (!baseToken) {
    throw new Error(`Missing base token for hyperdrive: ${hyperdriveAddress}.`);
  }
  return baseToken;
}
