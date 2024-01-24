import { yieldSourceProtocols } from "src/appconfig/yieldSources/yieldSourceProtocols";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { Address } from "viem";

export interface AppConfig {
  chainId: number;
  hyperdrives: HyperdriveConfig[];

  yieldSources: typeof yieldSources;
  yieldSourceProtocols: typeof yieldSourceProtocols;
}

interface ContractConfig {
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
export interface HyperdriveConfig extends ContractConfig {
  /**
   * The base token for hyperdrive deposits, eg: DAI or ETH
   */
  baseToken: Token;

  /**
   * The shares token for hyperdrive deposits, eg: sDAI or stETH
   */
  sharesToken: Token;

  name: string;
  yieldSource: keyof typeof yieldSources;
  termLengthMS: number;
}
