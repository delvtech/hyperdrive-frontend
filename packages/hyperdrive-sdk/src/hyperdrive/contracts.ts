import { HyperdriveABI } from "src/abis/Hyperdrive";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import {
  Contract,
  ReadableContract,
  WritableContract,
} from "src/contract/Contract";

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
export type ReadableHyperdriveContract = ReadableContract<typeof HyperdriveABI>;
export type WritableHyperdriveContract = WritableContract<typeof HyperdriveABI>;
export type HyperdriveMathContract = ReadableContract<typeof HyperdriveMathABI>;
