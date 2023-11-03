import { ICachedReadContract } from "@hyperdrive/evm-client";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";

export type IReadHyperdriveMathContract = ICachedReadContract<
  typeof HyperdriveMathABI
>;
