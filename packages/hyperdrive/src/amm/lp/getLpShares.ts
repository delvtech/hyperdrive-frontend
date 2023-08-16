import { PublicClient, Address } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { LP_ASSET_ID } from "./constants";
import { ReadCallOptions } from "src/base/ReadCallOptions";

export interface GetLpSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: ReadCallOptions;
}

export async function getLpShares({
  account,
  hyperdriveAddress,
  publicClient,
  options,
}: GetLpSharesOptions): Promise<bigint> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [LP_ASSET_ID, account],
    ...options,
  });
}
