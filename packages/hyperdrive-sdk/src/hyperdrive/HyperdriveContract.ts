import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { ICachedContract } from "src/contract/cached/CachedContract";
import { ICachedReadContract } from "src/contract/cached/CachedReadContract/CachedReadContract";
import { ICachedReadWriteContract } from "src/contract/cached/CachedReadWriteContract";

export type IReadHyperdriveContract = ICachedReadContract<
  typeof IHyperdrive.abi
>;
export type IReadWriteHyperdriveContract = ICachedReadWriteContract<
  typeof IHyperdrive.abi
>;

/**
 * Represents a contract utilizing the Hyperdrive ABI that includes caching
 */
export type IHyperdriveContract = ICachedContract<typeof IHyperdrive.abi>;
