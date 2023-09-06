import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { IReadableContract } from "src/contract/Contract";

export type ReadableHyperdriveMathContract = IReadableContract<
  typeof HyperdriveMathABI
>;
