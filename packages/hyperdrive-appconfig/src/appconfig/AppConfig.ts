import { Address } from "abitype";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { yieldSources } from "src/yieldSources";

export interface AppConfig {
  /**
   * @deprecated AppConfig is multi-chain. Do not depend on this.
   */
  chainId: number;

  /**
   * @deprecated AppConfig is multi-chain.  Use the registries object instead.
   */
  registryAddress: Address;

  /**
   * Registry addresses by Chain ID
   */
  registries: Record<number, Address>;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig[];
  protocols: typeof protocols;
  yieldSources: typeof yieldSources;
}
