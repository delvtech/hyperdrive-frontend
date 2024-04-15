import { ReadErc4626 } from "@delvtech/hyperdrive-viem";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export async function getErc4626HyperdriveSharesToken({
  sharesToken,
  extensions,
  iconUrl,
}: {
  sharesToken: ReadErc4626;
  extensions: YieldSourceExtensions;
  iconUrl: string;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  return getTokenConfig({
    token: sharesToken,
    tags: ["yieldSource", "erc4626"],
    extensions,
    iconUrl,
    places: 2,
  });
}
