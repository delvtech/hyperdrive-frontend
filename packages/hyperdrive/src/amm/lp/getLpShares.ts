import { PublicClient, Address, Transport, Chain } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { LP_ASSET_ID } from "./constants";
import { QueryObserverOptions } from "@tanstack/query-core";

export interface GetLpSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
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

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
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
    queryKey: ["@hyperdrive/core", "lp-shares", { hyperdriveAddress, account }],
    queryFn: queryEnabled
      ? () => getLpShares({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
