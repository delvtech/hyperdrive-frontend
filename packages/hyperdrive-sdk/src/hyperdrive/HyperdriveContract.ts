import { HyperdriveABI } from "@hyperdrive/core";
import { ICachedContract } from "src/contract/cached/CachedContract";
import { ICachedReadContract } from "src/contract/cached/CachedReadContract";
import { ICachedReadWriteContract } from "src/contract/cached/CachedReadWriteContract";

export type ReadHyperdriveContract = ICachedReadContract<typeof HyperdriveABI>;
export type ReadWriteHyperdriveContract = ICachedReadWriteContract<
  typeof HyperdriveABI
>;

/**
 * Represents a contract utilizing the Hyperdrive ABI that includes caching
 */
export type HyperdriveContract = ICachedContract<typeof HyperdriveABI>;
