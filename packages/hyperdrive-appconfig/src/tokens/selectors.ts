import { AppConfig } from "src/appconfig/AppConfig";
import { TokenConfig } from "src/tokens/types";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address if it exists.
 */
export function getToken({
  chainId,
  tokenAddress,
  appConfig,
}: {
  chainId: number;
  tokenAddress: Address;
  appConfig: AppConfig;
}): TokenConfig | undefined {
  const token = appConfig.tokens.find(
    (token) =>
      token.address.toLowerCase() == tokenAddress.toLowerCase() &&
      token.chainId === chainId,
  );

  return token;
}
