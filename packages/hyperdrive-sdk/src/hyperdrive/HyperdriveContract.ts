import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ICachedContract } from "src/contract/cached/CachedContract";
import { ICachedReadContract } from "src/contract/cached/CachedReadContract";
import { ICachedReadWriteContract } from "src/contract/cached/CachedReadWriteContract";

export type IReadHyperdriveContract = ICachedReadContract<typeof HyperdriveABI>;
export type IReadWriteHyperdriveContract = ICachedReadWriteContract<
  typeof HyperdriveABI
>;

/**
 * Represents a contract utilizing the Hyperdrive ABI that includes caching
 */
export type IHyperdriveContract = ICachedContract<typeof HyperdriveABI>;
