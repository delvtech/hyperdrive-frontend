import { PublicClient, Address } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { WITHDRAW_SHARES_ASSET_ID } from "./constants";

export interface GetWithdrawalSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getWithdrawalShares({
  account,
  hyperdriveAddress,
  publicClient,
}: GetWithdrawalSharesOptions): Promise<bigint> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [WITHDRAW_SHARES_ASSET_ID, account],
  });
}
