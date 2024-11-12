import { Address } from "abitype";
import { ChainConfig } from "../chains/chains";
import { HyperdriveConfig } from "../hyperdrives/HyperdriveConfig";
import { protocols } from "../protocols";
import { TokenConfig } from "../tokens/types";
import { yieldSources } from "../yieldSources/yieldSources";

export interface AppConfig {
  chains: Record<number, ChainConfig>;
  /**
   * Registry addresses by Chain ID
   */
  registries: Record<number, Address>;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig[];
  protocols: typeof protocols;
  yieldSources: typeof yieldSources;
}
