import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { FunctionReturnType } from "src/base/abitype";

export type Checkpoint = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getCheckpoint"
>[0];
