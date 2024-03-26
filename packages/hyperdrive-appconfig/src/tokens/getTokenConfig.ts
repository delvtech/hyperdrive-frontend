import { IERC20 } from "@delvtech/hyperdrive-artifacts/IERC20";
import { Address, PublicClient } from "viem";

export type EmptyExtensions = Record<string, never>;

export interface TokenConfig<
  Extensions = Record<string, string | number | boolean> | EmptyExtensions,
> {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  tags: string[];
  extensions: Extensions;
}

export async function getTokenConfig<
  Extensions = Record<string, string | number | boolean> | EmptyExtensions,
>({
  publicClient,
  address,
  iconUrl,
  tags,
  extensions,
}: {
  publicClient: PublicClient;
  address: Address;
  tags: string[];
  iconUrl: string;
  extensions: Extensions;
}): Promise<TokenConfig<Extensions>> {
  const token: TokenConfig<Extensions> = {
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
    iconUrl,
    tags,
    extensions,
  };

  return token;
}
