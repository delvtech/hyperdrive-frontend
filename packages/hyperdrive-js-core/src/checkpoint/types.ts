import type {
  ContractReadOptions,
  Event,
  FunctionReturn,
} from "@delvtech/evm-client";
import type { Prettify } from "src/base/types";
import type { HyperdriveAbi } from "src/hyperdrive/base/abi";

export type Checkpoint = Prettify<
  {
    checkpointTime: bigint;
  } & FunctionReturn<HyperdriveAbi, "getCheckpoint">
>;

export type CheckpointEvent = Event<HyperdriveAbi, "CreateCheckpoint">;

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
