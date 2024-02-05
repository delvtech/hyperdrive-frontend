import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols/protocols";
import { Tag } from "src/tags";
import { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";

export type KnownExtensions = YieldSourceExtensions | EmptyExtensions;

export interface AppConfig {
  chainId: number;
  tags: Tag[];
  hyperdrives: HyperdriveConfig[];
  tokens: TokenConfig<KnownExtensions>[];
  protocols: typeof protocols;
}
