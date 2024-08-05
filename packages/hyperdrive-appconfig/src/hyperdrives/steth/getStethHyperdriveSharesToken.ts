import { ReadToken } from "@delvtech/hyperdrive-viem";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSource } from "src/yieldSources/extensions";

export async function getStethHyperdriveSharesToken({
  sharesToken,
  extensions,
}: {
  sharesToken: ReadToken;
  extensions: YieldSource;
}): Promise<TokenConfig<YieldSource>> {
  return getTokenConfig({
    token: sharesToken,
    tags: ["yieldSource", "steth"],
    extensions,
    iconUrl: STETH_ICON_URL,
    places: 4,
  });
}
