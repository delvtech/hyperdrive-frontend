import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { FunctionReturnType } from "@hyperdrive/evm-client";

// Given the unlikely scenario that getPoolConfig will have a second argument,
// we can infer that the first element is always the PoolConfig. This approach
// minimizes update points when the PoolConfig type changes in new versons.
export type PoolConfig = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getPoolConfig"
>[0];
