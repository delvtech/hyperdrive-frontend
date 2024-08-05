import type { KnownTokenExtensions } from "src/appconfig/AppConfig";
import type { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import type { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the baseToken
 */
export function findBaseToken({
  baseTokenAddress,
  tokens,
}: {
  baseTokenAddress: Address;
  tokens: TokenConfig<KnownTokenExtensions>[];
}): TokenConfig<EmptyExtensions> {
  const baseToken = tokens.find((token) => baseTokenAddress === token.address);

  if (!baseToken) {
    throw new Error(
      `Missing token ${baseTokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  if (!isBaseToken(baseToken)) {
    throw new Error(
      `Misconfigured token ${baseTokenAddress}. Base tokens may not contain any extensions.`,
    );
  }

  return baseToken;
}

function isBaseToken(
  token: TokenConfig<KnownTokenExtensions>,
): token is TokenConfig<EmptyExtensions> {
  return !Object.keys(token.extensions).length;
}
