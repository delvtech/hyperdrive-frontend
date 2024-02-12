import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import {
  CachedReadContract,
  CachedReadWriteContract,
} from "@delvtech/evm-client";

export type IReadHyperdriveContract = CachedReadContract<
  typeof IHyperdrive.abi
>;
export type IReadWriteHyperdriveContract = CachedReadWriteContract<
  typeof IHyperdrive.abi
>;
