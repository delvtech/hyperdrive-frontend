import { HyperdriveABI } from "src/abis/Hyperdrive";
import { FunctionReturnType } from "src/base/abitype";

// Given the unlikely scenario that getPoolInfo will have a second argument,
// we can infer that the first element is always the PoolInfo. This approach
// minimizes update points when the PoolInfo type changes in new versons.
export type PoolInfo = FunctionReturnType<
  typeof HyperdriveABI,
  "getPoolInfo"
>[0];
