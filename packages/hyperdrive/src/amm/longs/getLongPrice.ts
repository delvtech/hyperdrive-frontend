import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";

export interface GetLongPriceOptions {
  hyperdriveMathAddress: Address;
  baseDecimals: number;
  /**
   * Comes from getPoolInfo
   */
  shareReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  bondReserves: bigint;
  /**
   * Comes from getPoolConfig
   */
  initialSharePrice: bigint;
  /**
   * Comes from getPoolConfig
   */
  positionDuration: bigint;
  /**
   * Comes from getPoolConfig
   */
  timeStretch: bigint;
  publicClient: PublicClient;
}

export interface GetLongPriceResult {
  price: bigint;
  formatted: string;
}

/**
 * @deprecated use SDK instead
 */
export async function getLongPrice({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  bondReserves,
  initialSharePrice,
  baseDecimals,
  timeStretch,
}: GetLongPriceOptions): Promise<GetLongPriceResult> {
  const price = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateSpotPrice",
    args: [shareReserves, bondReserves, initialSharePrice, timeStretch],
  });

  return {
    price,
    formatted: formatUnits(price, baseDecimals),
  };
}
