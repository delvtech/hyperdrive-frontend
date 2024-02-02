import { Address } from "viem";

export interface TokenConfig<
  TExtensions = Record<string, string | number | boolean>,
> {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
  tags: string[];
  extensions: TExtensions;
}
