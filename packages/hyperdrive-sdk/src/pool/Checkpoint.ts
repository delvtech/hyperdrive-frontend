import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { Event, FunctionReturn } from "@delvtech/evm-client";

export type Checkpoint = FunctionReturn<
  typeof IHyperdrive.abi,
  "getCheckpoint"
>;

export type CheckpointEvent = Event<typeof IHyperdrive.abi, "CreateCheckpoint">;
