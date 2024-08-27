import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address
 */
export function findToken({
  tokenAddress,
  tokens,
}: {
  tokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig | undefined {
  const token = tokens.find((token) => tokenAddress === token.address);

  if (!token) {
    console.error(
      `Missing token ${tokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return token;
}
