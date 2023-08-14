import { PublicClient, Address } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { LP_ASSET_ID } from "./constants";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";

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

export function getLpSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetLpSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getLpShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("lp-shares", { hyperdriveAddress, account }),
    queryFn: queryEnabled
      ? () => getLpShares({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
