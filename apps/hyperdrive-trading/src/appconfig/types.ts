import { YieldSource } from "src/appconfig/yieldSources/yieldSources";
import { Address } from "viem";

export interface AppConfig {
  chainId: number;
  hyperdrives: Hyperdrive[];
  yieldSources: Record<string, YieldSource>;
}

export interface ContractConfig {
  address: Address;
}

export interface Token extends ContractConfig {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
}

/**
 * The appconfig a hyperdrive instance
 */
export interface Hyperdrive extends ContractConfig {
  baseToken: Token;
  name: string;
  yieldSource: string;
  termLengthMS: number;
}
