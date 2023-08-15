import { Address, PublicClient, formatUnits } from "viem";

import { getPoolInfo } from "src/amm/getPoolInfo";
import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";

interface GetLiquidityResult {
  liquidity: bigint;
  formatted: string;
}

/**
 * This function retrieves the market liquidity by using the following formula:
 * marketLiquidity = lpSharePrice * shareReserves - longsOutstanding
 *
 * @param hyperdriveAddress - The address of the hyperdrive
 * @param publicClient - The public client
 */
export async function getLiquidity(
  hyperdriveAddress: Address,
  publicClient: PublicClient,
): Promise<GetLiquidityResult> {
  const { lpSharePrice, shareReserves, longsOutstanding } = await getPoolInfo({
    hyperdriveAddress,
    publicClient,
  });

  const liquidity =
    multiplyBigInt([lpSharePrice, shareReserves], 18) - longsOutstanding;

  return { liquidity, formatted: formatUnits(liquidity, 18) };
}
