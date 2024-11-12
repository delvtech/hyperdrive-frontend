import { AppConfig } from "../appconfig/AppConfig";
import { HyperdriveConfig } from "./HyperdriveConfig";
import { findToken } from "../tokens/selectors";
import { TokenConfig } from "../tokens/types";
import { Address, zeroAddress } from "viem";

/**
 * Returns a strongly typed HyperdriveConfig for the hyperdrive address and
 * chain id
 */
export function findHyperdriveConfig({
  hyperdriveChainId,
  hyperdriveAddress,
  hyperdrives,
}: {
  hyperdriveChainId: number;
  hyperdriveAddress: Address;
  hyperdrives: HyperdriveConfig[];
}): HyperdriveConfig {
  const hyperdriveConfig = hyperdrives.find(
    (hyperdriveConfig) =>
      hyperdriveConfig.address === hyperdriveAddress &&
      hyperdriveConfig.chainId === hyperdriveChainId,
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
  hyperdriveChainId,
  hyperdriveAddress,
  appConfig,
}: {
  hyperdriveChainId: number;
  hyperdriveAddress: Address;
  appConfig: AppConfig;
}): TokenConfig {
  const hyperdriveConfig = findHyperdriveConfig({
    hyperdriveChainId: hyperdriveChainId,
    hyperdriveAddress,
    hyperdrives: appConfig.hyperdrives,
  });

  let baseToken: TokenConfig | undefined;

  // If there's no base token on pool config, see if there's a fallback
  if (hyperdriveConfig.poolConfig.baseToken !== zeroAddress) {
    baseToken = findToken({
      chainId: hyperdriveConfig.chainId,
      tokenAddress: hyperdriveConfig.poolConfig.baseToken,
      tokens: appConfig.tokens,
    });
  } else if (hyperdriveConfig.baseTokenFallback) {
    baseToken = findToken({
      chainId: hyperdriveConfig.baseTokenFallback.chainId,
      tokenAddress: hyperdriveConfig.baseTokenFallback.address,
      tokens: appConfig.tokens,
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
