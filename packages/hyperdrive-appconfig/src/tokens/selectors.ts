import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address
 * @deprecated This method is too shallow to be useful, use this instead:
 * ```
 * // Find the yield source token
 * appConfig.tokens.find(token => token.address === baseTokenAddress);
 * ```
 */
export function findToken({
  tokenAddress,
  tokens,
}: {
  tokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig {
  const token = tokens.find((token) => tokenAddress === token.address);

  if (!token) {
    throw new Error(
      `Missing token ${tokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return token;
}
