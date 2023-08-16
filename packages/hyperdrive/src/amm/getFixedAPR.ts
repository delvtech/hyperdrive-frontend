import { PublicClient, Address } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { formatRate } from "src/base/formatRate";
import { ReadCallOptions } from "src/base/ReadCallOptions";

export interface GetFixedAPROptions {
  hyperdriveMathAddress: Address;
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
  options: ReadCallOptions;
}

export async function getFixedAPR({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  bondReserves,
  initialSharePrice,
  positionDuration,
  timeStretch,
  options,
}: GetFixedAPROptions): Promise<{ apr: bigint; formatted: string }> {
  const apr = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateAPRFromReserves",
    args: [
      shareReserves,
      bondReserves,
      initialSharePrice,
      positionDuration,
      timeStretch,
    ],
    ...options,
  });

  const formatted = formatRate(apr);

  return {
    apr,
    formatted,
  };
}
