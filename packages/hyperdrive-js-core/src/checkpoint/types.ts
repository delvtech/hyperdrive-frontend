import {
  ContractReadOptions,
  Event,
  FunctionReturn,
} from "@delvtech/evm-client";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { Prettify } from "src/base/types";

export type Checkpoint = Prettify<
  {
    checkpointTime: bigint;
  } & FunctionReturn<typeof IHyperdrive.abi, "getCheckpoint">
>;

export type CheckpointEvent = Event<typeof IHyperdrive.abi, "CreateCheckpoint">;

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
