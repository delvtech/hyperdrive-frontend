import { PublicClient, Address, ContractFunctionResult } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";

interface GetPoolInfoOptions {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getPoolInfo({
  publicClient,
  hyperdriveAddress,
}: GetPoolInfoOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolInfo">
> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
  });
}
