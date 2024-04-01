import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getErc4626HyperdriveSharesToken({
  publicClient,
  sharesTokenAddress,
  extensions,
  iconUrl,
}: {
  publicClient: PublicClient;
  sharesTokenAddress: Address;
  extensions: YieldSourceExtensions;
  iconUrl: string;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  const sharesToken = await getTokenConfig({
    address: sharesTokenAddress,
    publicClient,
    tags: ["yieldSource", "erc4626"],
    extensions,
    iconUrl,
  });

  return sharesToken;
}
