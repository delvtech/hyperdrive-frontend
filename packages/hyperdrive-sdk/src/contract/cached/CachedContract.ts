import { Abi } from "abitype";
import { ICachedReadableContract } from "src/contract/cached/CachedReadableContract";
import { ICachedWritableContract } from "src/contract/cached/CachedWritableContract";

export type ICachedContract<TAbi extends Abi = Abi> =
  | ICachedReadableContract<TAbi>
  | ICachedWritableContract<TAbi>;
