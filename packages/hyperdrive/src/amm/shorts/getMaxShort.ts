import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";

export interface GetMaxShortOptions {
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
  publicClient: PublicClient;
}

export interface GetMaxShortResult {
  maxBondsOut: bigint;
  formatted: string;
}

export async function getMaxShort({
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
}: GetMaxShortOptions): Promise<GetMaxShortResult> {
  const maxBondsOut = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateMaxShort",
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
    ],
  });

  return {
    maxBondsOut,
    formatted: formatUnits(maxBondsOut, baseDecimals),
  };
}
