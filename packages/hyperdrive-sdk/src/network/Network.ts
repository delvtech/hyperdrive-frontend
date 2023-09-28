import { BlockTag } from "src/contract/Contract";

/**
 * An interface representing data the SDK needs to get from the network.
 */
export interface INetwork {
  /**
   * Get a block number from a block tag. If no block tag is provided, the
   * latest block number is returned.
   */
  getBlockNumber(blockTag?: BlockTag): Promise<bigint>;
}
