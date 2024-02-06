import { Address } from "viem";

/**
 * @deprecated use TokenConfig from @hyperdrive/appconfig instead
 */
export interface TokenConfigOld {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
}
