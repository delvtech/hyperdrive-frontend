import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { IReadContract } from "src/contract/Contract";

export type ReadHyperdriveMathContract = IReadContract<
  typeof HyperdriveMathABI
>;
