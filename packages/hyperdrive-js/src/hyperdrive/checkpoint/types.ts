import {
  ContractReadOptions,
  EventLog,
  FunctionReturn,
  Pretty,
} from "@delvtech/drift";
import { HyperdriveAbi } from "src/hyperdrive/abi";

export type Checkpoint = Pretty<
  {
    checkpointTime: bigint;
  } & FunctionReturn<HyperdriveAbi, "getCheckpoint">
>;

export type CheckpointEvent = EventLog<HyperdriveAbi, "CreateCheckpoint">;

export type GetCheckpointTimeParams = (
  | {
      /**
       * A timestamp that falls within the checkpoint.
       */
      timestamp?: bigint;
      blockNumber?: never;
    }
  | {
      timestamp?: never;
      /**
       * A block number that falls within the checkpoint.
       */
      blockNumber?: bigint;
    }
) & {
  options?: ContractReadOptions;
};

export type GetCheckpointParams = (
  | {
      /**
       * The time of the checkpoint.
       */
      checkpointTime?: bigint;
      timestamp?: never;
      blockNumber?: never;
    }
  | {
      checkpointTime?: never;
      /**
       * A timestamp that falls within the checkpoint.
       */
      timestamp?: bigint;
      blockNumber?: never;
    }
  | {
      checkpointTime?: never;
      timestamp?: never;
      /**
       * A block number that falls within the checkpoint.
       */
      blockNumber?: bigint;
    }
) & {
  options?: ContractReadOptions;
};
