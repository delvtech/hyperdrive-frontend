import { PublicClient, Address, ContractFunctionResult } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ReadCallOptions } from "src/base/ReadCallOptions";

export type GetPoolConfigOptions = {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: ReadCallOptions;
};

/**
 * @deprecated use SDK
 */
export function getPoolConfig({
  publicClient,
  hyperdriveAddress,
  options,
}: GetPoolConfigOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
    ...options,
  });
}
