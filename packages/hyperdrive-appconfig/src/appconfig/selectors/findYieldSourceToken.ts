import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the yield source token.
 * @deprecated This method is too shallow to be useful, use this instead:
 * ```
 * // Find the yield source token
 * appConfig.tokens.find(token => token.address === yieldSourceTokenAddress);
 * ```
 *
 */
export function findYieldSourceToken({
  yieldSourceTokenAddress,
  tokens,
}: {
  yieldSourceTokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig {
  const yieldSourceToken = tokens.find(
    (token) => yieldSourceTokenAddress === token.address,
  );

  if (!yieldSourceToken) {
    throw new Error(
      `Missing token ${yieldSourceTokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return yieldSourceToken;
}
