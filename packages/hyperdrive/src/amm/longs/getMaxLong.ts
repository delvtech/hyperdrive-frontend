import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";

export interface GetMaxLongOptions {
  hyperdriveMathAddress: Address;
  baseDecimals: number;
  /**
   * Comes from getPoolInfo
   */
  shareReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  sharePrice: bigint;
  /**
   * Comes from getPoolInfo
   */
  bondReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  longsOutstanding: bigint;
  /**
   * Comes from getPoolConfig
   */
  minimumShareReserves: bigint;
  /**
   * Comes from getPoolConfig
   */
  initialSharePrice: bigint;
  /**
   * Comes from getPoolConfig
   */
  timeStretch: bigint;
  /**
   * The Max number of iterations to perform before returning the result.
   */
  maxIterations: bigint;
  publicClient: PublicClient;
}

export interface GetMaxLongResult {
  maxBaseIn: bigint;
  formattedMaxBaseIn: string;
  maxBondsOut: bigint;
  formattedMaxBondsOut: string;
}

export async function getMaxLong({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  sharePrice,
  bondReserves,
  longsOutstanding,
  minimumShareReserves,
  initialSharePrice,
  baseDecimals,
  timeStretch,
  maxIterations,
}: GetMaxLongOptions): Promise<GetMaxLongResult> {
  const [maxBaseIn, maxBondsOut] = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateMaxLong",
    args: [
      {
        shareReserves,
        bondReserves,
        longsOutstanding,
        timeStretch,
        sharePrice,
        initialSharePrice,
        minimumShareReserves,
      },
      maxIterations,
    ],
  });

  return {
    maxBaseIn,
    formattedMaxBaseIn: formatUnits(maxBaseIn, baseDecimals),
    maxBondsOut,
    formattedMaxBondsOut: formatUnits(maxBondsOut, baseDecimals),
  };
}
