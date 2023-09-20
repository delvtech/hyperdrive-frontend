import { HyperdriveABI } from "src/abis/Hyperdrive";
import { FunctionReturnType } from "src/base/abitype";

export type PoolConfig = FunctionReturnType<
  typeof HyperdriveABI,
  "getPoolConfig"
>;
