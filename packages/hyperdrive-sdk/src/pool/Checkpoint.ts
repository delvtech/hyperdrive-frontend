import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { ContractEvent, FunctionReturnType } from "@hyperdrive/evm-client";

export type Checkpoint = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getCheckpoint"
>[0];

export type CheckpointEvent = ContractEvent<
  typeof IHyperdrive.abi,
  "CreateCheckpoint"
>;
