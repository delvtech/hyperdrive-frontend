import {
  ContractEvent,
  ContractReadOptions,
  FunctionReturn,
  Pretty,
} from "@delvtech/drift";
import { HyperdriveAbi } from "src/hyperdrive/base/abi";

export type Checkpoint = Pretty<
  {
    checkpointTime: bigint;
  } & FunctionReturn<HyperdriveAbi, "getCheckpoint">
>;

export type CheckpointEvent = ContractEvent<HyperdriveAbi, "CreateCheckpoint">;

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
