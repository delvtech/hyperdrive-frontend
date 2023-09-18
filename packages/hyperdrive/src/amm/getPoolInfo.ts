import { PublicClient, Address, ContractFunctionResult } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ReadCallOptions } from "src/base/ReadCallOptions";

export interface GetPoolInfoOptions {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: ReadCallOptions;
}

/**
 * @deprecated use SDK
 */
export async function getPoolInfo({
  publicClient,
  hyperdriveAddress,
  options,
}: GetPoolInfoOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolInfo">
> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
    ...options,
  });
}
