import { QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, Transport, Chain } from "viem";
import { LP } from "src/amm/lp/types";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { LP_ASSET_ID } from "./constants";

export interface GetLPSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getLP({
  account,
  hyperdriveAddress,
  publicClient,
}: GetLPSharesOptions): Promise<LP> {
  const lpShares = await publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "balanceOf",
    args: [LP_ASSET_ID, account],
  });

  return {
    hyperdriveAddress,
    assetId: LP_ASSET_ID,
    lpShares: lpShares,
  };
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
export function getLPQuery({
  hyperdriveAddress,
  publicClient,
  account,
}: Partial<GetLPSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getLP>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;
  return {
    enabled: queryEnabled,
    queryKey: ["@hyperdrive/core", "lp-shares", { hyperdriveAddress, account }],
    queryFn: queryEnabled
      ? () => getLP({ account, hyperdriveAddress, publicClient })
      : undefined,
  };
}
