import { Address } from "viem";

export interface TokenConfig {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
}
