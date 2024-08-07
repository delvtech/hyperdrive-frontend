import { Address } from "abitype";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols/protocols";
import { TokenConfig } from "src/tokens/getTokenConfig";
import { yieldSources } from "src/yieldSources/extensions";

export interface AppConfig {
  chainId: number;
  registryAddress: Address;
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig[];
  protocols: typeof protocols;
  yieldSources: typeof yieldSources;
}
