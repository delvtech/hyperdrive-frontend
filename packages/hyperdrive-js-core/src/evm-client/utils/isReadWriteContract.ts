import {
  CachedReadContract,
  CachedReadWriteContract,
} from "@delvtech/evm-client";

// TODO: Consider better type checking if more use cases arise, possibly with a
// library like zod.
export function isReadWriteContract(
  contract: CachedReadContract<any> | CachedReadWriteContract<any>,
): contract is CachedReadWriteContract {
  return "write" in contract;
}
