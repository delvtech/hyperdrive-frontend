import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { AnyRewardKey } from "src/hyperdrives/rewards";
import { RewardResolverKey } from "src/rewards/rewards";
import { TokenConfig } from "src/tokens/types";
import { PublicClient } from "viem";

export interface HyperdriveConfigResolverResult {
  hyperdriveConfig: HyperdriveConfig;
  sharesTokenConfig?: TokenConfig;
  baseTokenConfig?: TokenConfig;
  rewards?: Record<AnyRewardKey, RewardResolverKey[]>;
}

export type HyperdriveConfigResolver = (
  hyperdrive: ReadHyperdrive,
  publicClient: PublicClient,
  /**
   * Block number to clamp the beginning of event requests to. This is useful
   * for L2s that have too many blocks where the default "earliest" blockTag
   * would timeout.
   */
  earliestBlock?: bigint,
) => Promise<HyperdriveConfigResolverResult>;
