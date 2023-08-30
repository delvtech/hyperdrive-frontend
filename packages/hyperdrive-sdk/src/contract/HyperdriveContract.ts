import { HyperdriveABI } from "@hyperdrive/core";
import {
  Contract,
  ReadableContract,
  WritableContract,
} from "src/contract/Contract";

export type ReadableHyperdriveContract = ReadableContract<typeof HyperdriveABI>;
export type WritableHyperdriveContract = WritableContract<typeof HyperdriveABI>;
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
