import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the baseToken
 * @deprecated This method is too shallow to be useful, use this instead:
 * ```
 * // Find the yield source token
 * appConfig.tokens.find(token => token.address === baseTokenAddress);
 * ```
 */
export function findBaseToken({
  baseTokenAddress,
  tokens,
}: {
  baseTokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig {
  const baseToken = tokens.find((token) => baseTokenAddress === token.address);

  if (!baseToken) {
    throw new Error(
      `Missing token ${baseTokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return baseToken;
}
