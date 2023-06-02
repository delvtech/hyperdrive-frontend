import { Address } from "wagmi";

export interface YieldSource {
  name: string;
  iconUrl?: string;
}

export interface AppConfig {
  /**
   * The chain id where the contracts are deployed
   */
  chainId: number;
  markets: YieldSource[];
}

export interface ContractConfig {
  address: Address;
}

/**
 * The supported term lengths in months.
 */
export type SupportedTermLength = number;

/**
 * Token interface TODO
 */
export interface Token extends ContractConfig {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl?: string;
}

/**
 * Hyperdrive market interface
 */
export interface Hyperdrive<Y extends YieldSource = YieldSource>
  extends ContractConfig {
  baseToken: Token;
  name: string;
  yieldSource: Y;
  termLength: number;
}
