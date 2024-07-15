import { Block, Network, NetworkGetBlockOptions } from "@delvtech/evm-client";
import { BlockNotFoundError } from "src/errors/BlockNotFoundError";

/**
 * A utility that tries to fetch a block from a given network and throws an
 * error if no block is found. Useful for unified error handling when fetching
 * blocks that may not exist.
 * @throws `BlockNotFoundError`
 */
export async function getBlockOrThrow(
  network: Network,
  options?: NetworkGetBlockOptions,
): Promise<Block> {
  const fetched = await network.getBlock(options);
  if (!fetched) {
    throw new BlockNotFoundError(options);
  }
  return fetched;
}
