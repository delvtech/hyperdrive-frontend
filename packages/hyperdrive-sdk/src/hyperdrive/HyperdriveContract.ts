import { HyperdriveABI } from "@hyperdrive/core";
import {
  Contract,
  IReadableContract,
  IWritableContract,
} from "src/contract/Contract";

export type ReadableHyperdriveContract = IReadableContract<
  typeof HyperdriveABI
>;
export type WritableHyperdriveContract = IWritableContract<
  typeof HyperdriveABI
>;

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
