import { Event, FunctionReturn } from "@delvtech/evm-client";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";

export type Checkpoint = FunctionReturn<
  typeof IHyperdrive.abi,
  "getCheckpoint"
>;

export type CheckpointEvent = Event<typeof IHyperdrive.abi, "CreateCheckpoint">;
