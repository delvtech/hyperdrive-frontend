import { Address } from "abitype";
import { chains } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { yieldSources } from "src/yieldSources";

export interface AppConfig {
  /**
   * Registry addresses by Chain ID
   */
  registries: Record<number, Address>;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig[];
  protocols: typeof protocols;
  yieldSources: typeof yieldSources;
  chains: typeof chains;
}
