import { PublicClient, Address } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { LP_ASSET_ID } from "./constants";

export interface GetLpSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getLpShares({
  account,
  hyperdriveAddress,
  publicClient,
}: GetLpSharesOptions): Promise<bigint> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [LP_ASSET_ID, account],
  });
}
