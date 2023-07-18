import { PublicClient, Address, Transport, Chain } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { WITHDRAW_SHARES_ASSET_ID } from "./constants";
import { QueryObserverOptions } from "@tanstack/query-core";

export interface GetWithdrawSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getWithdrawShares({
  account,
  hyperdriveAddress,
  publicClient,
}: GetWithdrawSharesOptions): Promise<bigint> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [WITHDRAW_SHARES_ASSET_ID, account],
  });
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
export function getWithdrawSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetWithdrawSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getWithdrawShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: [
      "@hyperdrive/core",
      "withdraw-shares",
      { hyperdriveAddress, account },
    ],
    queryFn: queryEnabled
      ? () => getWithdrawShares({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
