import { ReadErc20, ReadEth } from "@delvtech/hyperdrive-viem";
import { Address } from "viem";

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
  places: number;
  extensions: Extensions;
}

export async function getTokenConfig<
  Extensions = Record<string, string | number | boolean> | EmptyExtensions,
>({
  token,
  iconUrl,
  tags,
  extensions,
}: {
  token: ReadErc20 | ReadEth;
  tags: string[];
  iconUrl: string;
  extensions: Extensions;
}): Promise<TokenConfig<Extensions>> {
  return {
    address: token.address,
    decimals: await token.getDecimals(),
    name: await token.getName(),
    symbol: await token.getSymbol(),
    iconUrl,
    tags,
    extensions,
  };
}
