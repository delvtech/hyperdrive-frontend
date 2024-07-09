import { ReadToken } from "@delvtech/hyperdrive-viem";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export async function getStethHyperdriveSharesToken({
  sharesToken,
  extensions,
}: {
  sharesToken: ReadToken;
  extensions: YieldSourceExtensions;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  return getTokenConfig({
    token: sharesToken,
    tags: ["yieldSource", "steth"],
    extensions,
    iconUrl: STETH_ICON_URL,
    places: 4,
  });
}
