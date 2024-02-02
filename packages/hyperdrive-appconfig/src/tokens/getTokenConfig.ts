import { IERC20 } from "@hyperdrive/artifacts/dist/IERC20";
import { TokenConfig } from "src/tokens/TokenConfig";
import { getTokenIconUrl } from "src/tokens/tokenIconsUrls";
import { Address, PublicClient } from "viem";

export async function getTokenConfig<
  TExtensions = Record<string, string | number | boolean>,
>({
  publicClient,
  address,
  tags,
  extensions,
}: {
  publicClient: PublicClient;
  address: Address;
  tags: string[];
  extensions: TExtensions;
}): Promise<TokenConfig<TExtensions>> {
  const token: TokenConfig<TExtensions> = {
    address,
    decimals: await publicClient.readContract({
      address,
      abi: IERC20.abi,
      functionName: "decimals",
    }),
    name: await publicClient.readContract({
      address,
      abi: IERC20.abi,
      functionName: "name",
    }),
    symbol: await publicClient.readContract({
      address,
      abi: IERC20.abi,
      functionName: "symbol",
    }),
    iconUrl: getTokenIconUrl({
      address,
      chainId: publicClient.chain?.id as number,
    }),
    tags,
    extensions,
  };

  return token;
}
