import { ReadToken } from "@delvtech/hyperdrive-viem";
import { Address } from "viem";

export type EmptyExtensions = Record<string, never>;

export interface TokenConfig<
  Extensions = Record<string, string | number | boolean> | EmptyExtensions,
> {
  address: Address;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  places: number;
  iconUrl: string;
  tags: string[];
  extensions: Extensions;
}

export async function getTokenConfig<
  Extensions = Record<string, string | number | boolean> | EmptyExtensions,
>({
  token,
  iconUrl,
  places,
  tags,
  extensions,
}: {
  token: ReadToken;
  tags: string[];
  iconUrl: string;
  places: number;
  extensions: Extensions;
}): Promise<TokenConfig<Extensions>> {
  return {
    chainId: await token.network.getChainId(),
    address: token.address,
    decimals: await token.getDecimals(),
    places,
    name: await token.getName(),
    symbol: await token.getSymbol(),
    iconUrl,
    tags,
    extensions,
  };
}
