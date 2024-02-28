import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { FunctionReturn } from "@delvtech/evm-client";

// Given the unlikely scenario that getPoolInfo will have a second argument,
// we can infer that the first element is always the PoolInfo. This approach
// minimizes update points when the PoolInfo type changes in new versons.
export type PoolInfo = FunctionReturn<typeof IHyperdrive.abi, "getPoolInfo">;
