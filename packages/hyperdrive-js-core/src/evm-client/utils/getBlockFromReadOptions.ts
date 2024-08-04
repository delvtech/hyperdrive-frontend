import type { BlockTag, ContractReadOptions } from "@delvtech/evm-client";

// TODO: Move this to @delvtech/evm-client
export type BlockLike = BlockTag | bigint;

/**
 * Extracts a block number or block tag from a `ContractReadOptions` object.
 */
export function getBlockFromReadOptions(
  options?: ContractReadOptions,
): BlockLike | undefined {
  return options?.blockNumber || options?.blockTag;
}
