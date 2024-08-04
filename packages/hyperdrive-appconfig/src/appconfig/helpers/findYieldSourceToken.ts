import type { KnownTokenExtensions } from "src/appconfig/AppConfig";
import type { TokenConfig } from "src/tokens/getTokenConfig";
import type { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import type { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the yield source token.
 */
export function findYieldSourceToken({
  yieldSourceTokenAddress,
  tokens,
}: {
  yieldSourceTokenAddress: Address;
  tokens: TokenConfig<KnownTokenExtensions>[];
}): TokenConfig<YieldSourceExtensions> {
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
): token is TokenConfig<YieldSourceExtensions> {
  return token.tags.includes("yieldSource");
}
