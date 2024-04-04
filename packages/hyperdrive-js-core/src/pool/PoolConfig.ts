import { FunctionReturn } from "@delvtech/evm-client";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";

// Given the unlikely scenario that getPoolConfig will have a second argument,
// we can infer that the first element is always the PoolConfig. This approach
// minimizes update points when the PoolConfig type changes in new versons.
export type PoolConfig = FunctionReturn<
  typeof IHyperdrive.abi,
  "getPoolConfig"
>;
