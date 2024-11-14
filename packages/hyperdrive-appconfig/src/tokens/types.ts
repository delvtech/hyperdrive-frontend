import { Address } from "abitype";
import { PublicClient } from "viem";

export type PriceOracleId = "defillama";

export type PriceOracleFn = (args: {
  tokenAddress: Address;
  chainId: number;
  denomination: "usd";
  publicClient: PublicClient;
}) => Promise<bigint>;

export interface TokenConfig {
  address: Address;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  places: number;
  iconUrl: string;
  tags: string[];
  priceOracle: PriceOracleId;
}
