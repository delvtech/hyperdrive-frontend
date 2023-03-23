export interface HyperdriveConfig<
  Protocols extends readonly string[] = readonly string[],
  TermLengths extends readonly number[] = readonly number[],
> {
  /**
   * The chain id where the contracts are deployed
   */
  chainId: number;
  protocols: Protocols;
  supportedTermLengths: TermLengths;
  markets: HyperdriveMarket<Protocols[number], TermLengths[number]>[];
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
export interface HyperdriveMarket<P extends string, T extends number>
  extends ContractConfig {
  termLength: T;
  protocol: P;
  baseToken: Token;
}
