import { PublicClient, Address } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { WITHDRAW_SHARES_ASSET_ID } from "./constants";
import { ReadCallOptions } from "src/base/ReadCallOptions";

export interface GetWithdrawalSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: ReadCallOptions;
}

export async function getWithdrawalShares({
  account,
  hyperdriveAddress,
  publicClient,
  options,
}: GetWithdrawalSharesOptions): Promise<bigint> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [WITHDRAW_SHARES_ASSET_ID, account],
    ...options,
  });
}
