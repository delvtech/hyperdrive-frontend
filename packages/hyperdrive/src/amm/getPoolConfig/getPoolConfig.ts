import { PublicClient, Address, ContractFunctionResult } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";

interface GetPoolConfigOptions {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getPoolConfig({
  publicClient,
  hyperdriveAddress,
}: GetPoolConfigOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
> {
  return await publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
  });
}
