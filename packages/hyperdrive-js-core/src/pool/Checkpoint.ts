import { Event, FunctionReturn } from "@delvtech/evm-client";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { Prettify } from "src/base/types";

export type Checkpoint = Prettify<
  {
    checkpointTime: bigint;
  } & FunctionReturn<typeof IHyperdrive.abi, "getCheckpoint">
>;

export type CheckpointEvent = Event<typeof IHyperdrive.abi, "CreateCheckpoint">;
