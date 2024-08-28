import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address if it exists.
 */
export function findToken({
  tokenAddress,
  tokens,
}: {
  tokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig | undefined {
  const token = tokens.find((token) => tokenAddress === token.address);

  return token;
}
