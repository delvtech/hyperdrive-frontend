import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getStethHyperdriveSharesToken({
  publicClient,
  sharesTokenAddress,
  extensions,
}: {
  publicClient: PublicClient;
  sharesTokenAddress: Address;
  extensions: YieldSourceExtensions;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  const sharesToken = await getTokenConfig({
    address: sharesTokenAddress,
    publicClient,
    tags: ["yieldSource", "steth"],
    extensions,
    iconUrl: STETH_ICON_URL,
  });

  return sharesToken;
}
