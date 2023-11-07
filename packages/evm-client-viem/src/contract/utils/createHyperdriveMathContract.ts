import { SimpleCache } from "@hyperdrive/evm-client";
import { HyperdriveMathABI } from "@hyperdrive/sdk";
import { ViemCachedReadContract } from "src/contract/ViemCachedReadContract";
import { Address, PublicClient } from "viem";

interface CreateHyperdriveMathContractOptions {
  address: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
}
export function createHyperdriveMathContract<
  TOptions extends CreateHyperdriveMathContractOptions,
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
