import { IERC4626HyperdriveRead } from "@hyperdrive/artifacts/IERC4626HyperdriveRead";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getErc4626HyperdriveSharesToken({
  publicClient,
  hyperdriveAddress,
  extensions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  extensions: YieldSourceExtensions;
}): Promise<TokenConfig<YieldSourceExtensions>> {
  const sharesTokenAddress = await publicClient.readContract({
    abi: IERC4626HyperdriveRead.abi,
    functionName: "vault",
    address: hyperdriveAddress,
  });

  const sharesToken = await getTokenConfig({
    address: sharesTokenAddress,
    publicClient,
    tags: ["yieldSource", "erc4626"],
    extensions,
  });

  return sharesToken;
}
