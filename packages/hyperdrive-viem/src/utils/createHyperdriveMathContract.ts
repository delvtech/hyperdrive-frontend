import { HyperdriveMathABI } from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { CreateHyperdriveContractOptions } from "src/utils/createHyperdriveContract";

export function createHyperdriveMathContract<
  TOptions extends CreateHyperdriveContractOptions,
>({ address, publicClient, cache }: TOptions): ViemHyperdriveMathContract {
  return new ViemCachedReadContract({
    abi: HyperdriveMathABI,
    address,
    publicClient,
    cache,
  });
}

// Defaulting to read-only contract because the Math Contract only has pure functions.
type ViemHyperdriveMathContract = ViemCachedReadContract<
  typeof HyperdriveMathABI
>;
