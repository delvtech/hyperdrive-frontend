import { ReadToken } from "@delvtech/hyperdrive-viem";
import { TokenConfig } from "./types";

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
