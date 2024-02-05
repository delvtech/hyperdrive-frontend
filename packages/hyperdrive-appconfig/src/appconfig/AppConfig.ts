import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { TokenConfig } from "src/tokens/TokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export type AnyTokenConfigExtensions =
  | YieldSourceExtensions
  | Record<string, string | number | boolean>;

export interface AppConfig {
  chainId: number;
  tags: Tag[];
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig<AnyTokenConfigExtensions>[];
  protocols: typeof protocols;
}
