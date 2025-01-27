import { Address } from "abitype";
import { ChainConfig, ChainId } from "src/chains/chains";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { protocols } from "src/protocols";
import { AnyRewardId } from "src/rewards/actions/types";
import { RewardConfig } from "src/rewards/types";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";
import { ZapConfig } from "src/zaps/ZapsConfig";

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
  zaps: Record<ChainId, ZapConfig>;
  rewards: Record<AnyRewardId, RewardConfig[]>;
}
