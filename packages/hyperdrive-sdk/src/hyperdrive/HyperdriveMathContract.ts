import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { ICachedReadContract } from "src/contract/cached/CachedReadContract";

export type IReadHyperdriveMathContract = ICachedReadContract<
  typeof HyperdriveMathABI
>;
