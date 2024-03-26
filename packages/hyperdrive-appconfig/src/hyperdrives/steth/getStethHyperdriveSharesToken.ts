import { IStETHHyperdriveRead } from "@delvtech/hyperdrive-artifacts/IStETHHyperdriveRead";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getStethHyperdriveSharesToken({
  publicClient,
  hyperdriveAddress,
  extensions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  extensions: YieldSourceExtensions;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  const sharesTokenAddress = await publicClient.readContract({
    abi: IStETHHyperdriveRead.abi,
    functionName: "lido",
    address: hyperdriveAddress,
  });

  const sharesToken = await getTokenConfig({
    address: sharesTokenAddress,
    publicClient,
    tags: ["yieldSource", "steth"],
    extensions,
    iconUrl: STETH_ICON_URL,
  });

  return sharesToken;
}
