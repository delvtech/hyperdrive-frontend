import type { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { AnyRewardId } from "src/rewards/actions/types";
import { RewardConfigId } from "src/rewards/resolvers";
import { TokenConfig } from "src/tokens/types";
import { PublicClient } from "viem";

export interface HyperdriveConfigResolverResult {
  hyperdriveConfig: HyperdriveConfig;
  sharesTokenConfig?: TokenConfig;
  baseTokenConfig?: TokenConfig;
  rewards?: Record<AnyRewardId, RewardConfigId[]>;
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
