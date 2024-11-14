import { AppConfig } from "src/appconfig/AppConfig";
import { priceOracles } from "src/tokens/priceOracles/priceOracles";
import { PriceOracleFn, TokenConfig } from "src/tokens/types";
import { Address, zeroAddress } from "viem";

/**
 * Returns a strongly typed TokenConfig for the token address and chain id.
 */
export function getToken({
  chainId,
  tokenAddress,
  appConfig,
}: {
  chainId: number;
  tokenAddress: Address;
  appConfig: AppConfig;
}): TokenConfig | null {
  if (tokenAddress === zeroAddress) {
    return null;
  }

  const token = appConfig.tokens.find(
    (token) =>
      token.address.toLowerCase() == tokenAddress.toLowerCase() &&
      token.chainId === chainId,
  );

  if (!token) {
    throw new Error(
      `Missing token config ${tokenAddress} for chain ${chainId}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return token;
}

export function getPriceOracleFn({
  chainId,
  tokenAddress,
  appConfig,
}: {
  chainId: number;
  tokenAddress: Address;
  appConfig: AppConfig;
}): PriceOracleFn {
  const token = getToken({ chainId, tokenAddress, appConfig });

  if (!token) {
    throw new Error(
      `Missing token config ${tokenAddress} for chain ${chainId}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  return priceOracles[token.priceOracle];
}
