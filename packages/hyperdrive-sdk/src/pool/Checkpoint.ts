import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { FunctionReturnType } from "@hyperdrive/evm-client";

export type Checkpoint = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getCheckpoint"
>[0];
