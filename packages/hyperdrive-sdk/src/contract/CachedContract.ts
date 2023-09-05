import { Abi } from "abitype";
import { ReadableContract } from "src/contract/Contract";

export interface CachedReadableContract<TAbi extends Abi>
  extends ReadableContract<TAbi> {
  deleteRead: (...args: Parameters<ReadableContract<TAbi>["read"]>) => boolean;
  clearCache: () => void;
}

export interface CachedWritableContract<TAbi extends Abi>
  extends CachedReadableContract<TAbi> {}

export type CachedContract<TAbi extends Abi> =
  | CachedReadableContract<TAbi>
  | CachedWritableContract<TAbi>;
