import { HyperdriveABI } from "@hyperdrive/core";
import {
  Contract,
  IReadContract,
  IReadWriteContract,
} from "src/contract/Contract";

export type ReadHyperdriveContract = IReadContract<typeof HyperdriveABI>;
export type ReadWriteHyperdriveContract = IReadWriteContract<
  typeof HyperdriveABI
>;

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
