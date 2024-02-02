import { IERC4626HyperdriveRead } from "@hyperdrive/artifacts/dist/IERC4626HyperdriveRead";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import {
  YieldSourceExtensions,
  YieldSourceTokenConfig,
} from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getErc4626HyperdriveSharesToken({
  publicClient,
  hyperdriveAddress,
  extensions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  extensions: YieldSourceExtensions;
}): Promise<YieldSourceTokenConfig> {
  const sharesTokenAddress = await publicClient.readContract({
    abi: IERC4626HyperdriveRead.abi,
    functionName: "vault",
    address: hyperdriveAddress,
  });

  const sharesToken = await getTokenConfig<YieldSourceExtensions>({
    address: sharesTokenAddress,
    publicClient,
    tags: ["yieldSource", "erc4626"],
    extensions,
  });

  return sharesToken;
}
