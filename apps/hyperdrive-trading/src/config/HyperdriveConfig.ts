export interface HyperdriveConfig<
  SupportedProtocols extends readonly string[] = readonly string[],
> {
  /**
   * The chain id where the contracts are deployed
   */
  chainId: number;
  protocols: SupportedProtocols;
  supportedTermLengths: number[];
  markets: HyperdriveMarket<SupportedProtocols[number]>[];
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
export interface HyperdriveMarket<P extends string> extends ContractConfig {
  termLength: number;
  protocol: P;
  baseToken: Token;
}
