import { HyperdriveABI } from "src/abis/Hyperdrive";
import { FunctionReturnType } from "src/base/abitype";

export type PoolInfo = FunctionReturnType<
  typeof HyperdriveABI,
  "getPoolInfo"
>[0];
