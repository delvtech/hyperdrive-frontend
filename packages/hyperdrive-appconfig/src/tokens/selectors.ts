import { TokenConfig } from "src/tokens/getTokenConfig";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address if it exists.
 */
export function findToken({
  chainId,
  tokenAddress,
  tokens,
}: {
  chainId: number;
  tokenAddress: Address;
  tokens: TokenConfig[];
}): TokenConfig | undefined {
  const token = tokens.find(
    (token) => token.address == tokenAddress && token.chainId === chainId,
  );

  return token;
}
