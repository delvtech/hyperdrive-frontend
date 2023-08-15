import { BlockTag } from "viem";

export type ReadCallOptions =
  | {
      /** The balance of the account at a block number. */
      blockNumber?: bigint;
      blockTag?: never;
    }
  | {
      blockNumber?: never;
      /**
       * The balance of the account at a block tag.
       * @default 'latest'
       */
      blockTag?: BlockTag;
    };
