import { PublicClient, Address, Transport, Chain } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { WITHDRAW_SHARES_ASSET_ID } from "./constants";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetWithdrawalSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
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

export function getWithdrawalSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetWithdrawalSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getWithdrawalShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("withdrawal-shares", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () => getWithdrawalShares({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
