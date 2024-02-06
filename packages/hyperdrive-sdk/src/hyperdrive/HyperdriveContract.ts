import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import {
  ICachedContract,
  ICachedReadContract,
  ICachedReadWriteContract,
} from "@hyperdrive/evm-client";

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
