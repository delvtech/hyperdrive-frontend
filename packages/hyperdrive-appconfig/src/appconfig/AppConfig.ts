import { Address } from "abitype";
import { ChainConfig, ChainId } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";
import { ZapConfig } from "src/zaps/ZapConfig";

export interface AppConfig {
  chains: Record<ChainId, ChainConfig>;
  /**
   * Registry addresses by Chain ID
   */
  registries: Record<ChainId, Address>;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig[];
  protocols: typeof protocols;
  yieldSources: typeof yieldSources;
  zaps: Record<ChainId, ZapConfig>;
}
