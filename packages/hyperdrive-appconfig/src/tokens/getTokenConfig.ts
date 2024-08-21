import { ReadToken } from "@delvtech/hyperdrive-viem";
import { Address } from "viem";

export interface TokenConfig {
  address: Address;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  places: number;
  iconUrl: string;
  tags: string[];
}

export async function getTokenConfig({
  token,
  iconUrl,
  places,
  tags,
}: {
  token: ReadToken;
  tags: string[];
  iconUrl: string;
  places: number;
}): Promise<TokenConfig> {
  return {
    chainId: await token.network.getChainId(),
    address: token.address,
    decimals: await token.getDecimals(),
    places,
    name: await token.getName(),
    symbol: await token.getSymbol(),
    iconUrl,
    tags,
  };
}
