import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { TokenConfig } from "src/tokens/types";
import { PublicClient } from "viem";

export type HyperdriveConfigResolver = (
  hyperdrive: ReadHyperdrive,
  publicClient: PublicClient,
  /**
   * Block number to clamp the beginning of event requests to. This is useful
   * for L2s that have too many blocks where the default "earliest" blockTag
   * would timeout.
   */
  earliestBlock?: bigint,
) => Promise<{
  hyperdriveConfig: HyperdriveConfig;
  sharesTokenConfig?: TokenConfig;
  baseTokenConfig?: TokenConfig;
  rewards?: string[];
}>;
