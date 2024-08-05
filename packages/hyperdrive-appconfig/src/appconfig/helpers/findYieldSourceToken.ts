import { KnownTokenExtensions } from "src/appconfig/AppConfig";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSource } from "src/yieldSources/extensions";
import { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the yield source token.
 */
export function findYieldSourceToken({
  yieldSourceTokenAddress,
  tokens,
}: {
  yieldSourceTokenAddress: Address;
  tokens: TokenConfig<KnownTokenExtensions>[];
}): TokenConfig<YieldSource> {
  const yieldSourceToken = tokens.find(
    (token) => yieldSourceTokenAddress === token.address,
  );

  if (!yieldSourceToken) {
    throw new Error(
      `Missing token ${yieldSourceTokenAddress}. Make sure your appconfig's "tokens" property is properly constructed.`,
    );
  }

  if (!isYieldSourceToken(yieldSourceToken)) {
    throw new Error(
      `Misconfigured token ${yieldSourceTokenAddress}. Yield source tokens must contain the "yieldSource" tag.`,
    );
  }

  return yieldSourceToken;
}

function isYieldSourceToken(
  token: TokenConfig<KnownTokenExtensions>,
): token is TokenConfig<YieldSource> {
  return token.tags.includes("yieldSource");
}
