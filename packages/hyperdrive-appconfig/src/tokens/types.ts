import { Address } from "abitype";

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
