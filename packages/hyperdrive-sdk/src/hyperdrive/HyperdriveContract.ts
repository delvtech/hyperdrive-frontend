import { HyperdriveABI } from "@hyperdrive/core";
import { Contract } from "src/contract/Contract";

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = Contract<typeof HyperdriveABI>;
