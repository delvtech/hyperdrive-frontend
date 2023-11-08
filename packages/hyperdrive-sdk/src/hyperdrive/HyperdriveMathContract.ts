import { ICachedReadContract } from "@hyperdrive/evm-client";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";

export type IReadHyperdriveMathContract = ICachedReadContract<
  typeof MockHyperdriveMath.abi
>;
