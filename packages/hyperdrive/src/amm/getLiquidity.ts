import { Address, Chain, PublicClient, Transport, formatUnits } from "viem";
import { makeQueryKey } from "src/makeQueryKey";

import { QueryObserverOptions } from "@tanstack/query-core";
import { getPoolInfo } from "src/amm/getPoolInfo";

interface GetLiquidityResult {
  liquidity: bigint;
  formatted: string;
}

/**
 * This function retrieves the market liquidity by using the following formula:
 * marketLiquidity = sharePrice * shareReserves - longsOutstanding
 *
 * @param hyperdriveAddress - The address of the hyperdrive
 * @param publicClient - The public client
 */
export async function getLiquidity(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
): Promise<GetLiquidityResult> {
  const { sharePrice, shareReserves, longsOutstanding } = await getPoolInfo({
    hyperdriveAddress,
    publicClient,
  });

  const liquidity =
    (sharePrice * shareReserves) / 10n ** 18n - longsOutstanding;

  return { liquidity, formatted: formatUnits(liquidity, 18) };
}

interface GetLiquidityQueryOptions {
  hyperdriveAddress: Address | undefined;
  publicClient: PublicClient<Transport, Chain>;
}

type GetLiquidityReturnType = Awaited<ReturnType<typeof getLiquidity>>;

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getLiquidityQuery({
  hyperdriveAddress,
  publicClient,
}: GetLiquidityQueryOptions): QueryObserverOptions<GetLiquidityReturnType> {
  const queryEnabled = !!hyperdriveAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("get-liquidity", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? () => getLiquidity(hyperdriveAddress, publicClient)
      : undefined,
  };
}
