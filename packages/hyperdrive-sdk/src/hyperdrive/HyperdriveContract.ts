import { HyperdriveABI } from "@hyperdrive/core";
import { IContract } from "src/contract/Contract";

/**
 * Represents a contract utilizing the Hyperdrive ABI
 */
export type HyperdriveContract = IContract<typeof HyperdriveABI>;
