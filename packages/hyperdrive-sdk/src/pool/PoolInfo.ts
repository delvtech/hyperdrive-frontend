import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { FunctionReturnType } from "@hyperdrive/evm-client";

// Given the unlikely scenario that getPoolInfo will have a second argument,
// we can infer that the first element is always the PoolInfo. This approach
// minimizes update points when the PoolInfo type changes in new versons.
export type PoolInfo = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getPoolInfo"
>[0];
