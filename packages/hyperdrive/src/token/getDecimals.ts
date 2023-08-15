import { ERC20MintableABI } from "src/abis/ERC20Mintable";
import { Address, PublicClient } from "viem";

interface GetDecimalsOptions {
  tokenAddress: Address;
  publicClient: PublicClient;
}

export async function getDecimals({
  tokenAddress,
  publicClient,
}: GetDecimalsOptions): Promise<number> {
  return publicClient.readContract({
    address: tokenAddress,
    abi: ERC20MintableABI,
    functionName: "decimals",
  });
}
