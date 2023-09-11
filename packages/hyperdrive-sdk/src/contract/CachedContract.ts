import { Abi } from "abitype";
import { IReadableContract } from "src/contract/Contract";

export interface CachedReadableContract<TAbi extends Abi>
  extends IReadableContract<TAbi> {
  deleteRead: (...args: Parameters<IReadableContract<TAbi>["read"]>) => boolean;
  clearCache: () => void;
}

export interface CachedWritableContract<TAbi extends Abi>
  extends CachedReadableContract<TAbi> {}

export type CachedContract<TAbi extends Abi> =
  | CachedReadableContract<TAbi>
  | CachedWritableContract<TAbi>;
