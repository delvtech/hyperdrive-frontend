import { HyperdriveABI } from "src/abis/Hyperdrive";
import { FunctionReturnType } from "src/base/abitype";
export type Checkpoint = FunctionReturnType<
  typeof HyperdriveABI,
  "getCheckpoint"
>[0];
