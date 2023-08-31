import { HyperdriveABI } from "@hyperdrive/core";
import {
  Contract,
  ReadableContract,
  WritableContract,
} from "src/contract/Contract";

export type ReadableHyperdriveContract = ReadableContract<typeof HyperdriveABI>;
export type WritableHyperdriveContract = WritableContract<typeof HyperdriveABI>;

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
