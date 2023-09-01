import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { ReadableContract } from "src/contract/Contract";

export type IHyperdriveMathContract = ReadableContract<
  typeof HyperdriveMathABI
>;
