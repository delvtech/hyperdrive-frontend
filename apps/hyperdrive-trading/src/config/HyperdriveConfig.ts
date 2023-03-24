export interface Protocol {
  name: string;
}

export interface HyperdriveConfig<
  Protocols extends readonly Protocol[] = readonly Protocol[],
> {
  /**
   * The chain id where the contracts are deployed
   */
  chainId: number;
  markets: HyperdriveMarket<Protocols[number]>[];
}

export interface ContractConfig {
  address: string;
}

/**
 * The supported term lengths in months.
 */
export type SupportedTermLength = number;

/**
 * Token interface TODO
 */
export interface Token {
  // TODO
}

/**
 * Hyperdrive market interface
 */
export interface HyperdriveMarket<P extends Protocol> extends ContractConfig {
  termLength: number;
  protocol: P;
  baseToken: Token;
}
