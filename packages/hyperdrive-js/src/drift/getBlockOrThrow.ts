import {
  Block,
  ContractReadOptions,
  Drift,
  GetBlockParams,
} from "@delvtech/drift";
import { BlockNotFoundError } from "src/errors/BlockNotFoundError";

export type GetBlockOrThrowParams = GetBlockParams & ContractReadOptions;

/**
 * A utility that tries to fetch a block from a given network and throws an
 * error if no block is found. Useful for unified error handling when fetching
 * blocks that may not exist.
 * @throws `BlockNotFoundError`
 */
export async function getBlockOrThrow(
  drift: Drift,
  options?: GetBlockOrThrowParams,
): Promise<Block> {
  const fetched = await drift.getBlock(options);
  if (!fetched) {
    throw new BlockNotFoundError(options);
  }
  return fetched;
}
