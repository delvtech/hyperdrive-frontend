import { ReadCallOptions } from "@hyperdrive/core";
import {
  getPoolConfigQuery,
  getFixedRateQuery,
  getPoolInfoQuery,
} from "@hyperdrive/queries";
import { QueryClient } from "@tanstack/query-core";
import { Address, PublicClient } from "viem";

/**
 * The PoolActions interface provides methods for querying specific
 * configurations, statistics, and rates of a pool.
 */
export interface PoolActions {
  /**
   * Retrieves the configuration settings of a pool.
   */
  getPoolConfig: (options: ReadCallOptions) => Promise<{
    baseToken: `0x${string}`;
    initialSharePrice: bigint;
    minimumShareReserves: bigint;
    positionDuration: bigint;
    checkpointDuration: bigint;
    timeStretch: bigint;
    governance: `0x${string}`;
    feeCollector: `0x${string}`;
    fees: {
      curve: bigint;
      flat: bigint;
      governance: bigint;
    };
    oracleSize: bigint;
    updateGap: bigint;
  }>;

  /**
   * Retrieves info about the pool's reserves and other state about the pool.
   */
  getPoolInfo: (options: ReadCallOptions) => Promise<{
    shareReserves: bigint;
    bondReserves: bigint;
    lpTotalSupply: bigint;
    sharePrice: bigint;
    longsOutstanding: bigint;
    longAverageMaturityTime: bigint;
    shortsOutstanding: bigint;
    shortAverageMaturityTime: bigint;
    shortBaseVolume: bigint;
    withdrawalSharesReadyToWithdraw: bigint;
    withdrawalSharesProceeds: bigint;
    lpSharePrice: bigint;
  }>;

  /**
   * Fetches the pool's APR.
   */
  getFixedRate: (options: ReadCallOptions) => Promise<{
    apr: bigint;
    formatted: string;
  }>;
}

export function configurePoolActions({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient: queryClientFromOptions,
}: {
  hyperdriveAddress: Address;
  hyperdriveMathAddress: Address;
  publicClient: PublicClient;
  queryClient?: QueryClient;
}): PoolActions {
  const queryClient = queryClientFromOptions
    ? queryClientFromOptions
    : new QueryClient();

  return {
    getPoolConfig: (options: ReadCallOptions) =>
      queryClient.fetchQuery(
        getPoolConfigQuery({
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getPoolInfo: (options: ReadCallOptions) =>
      queryClient.fetchQuery(
        getPoolInfoQuery({ hyperdriveAddress, publicClient, options }),
      ),
    getFixedRate: (options: ReadCallOptions) =>
      queryClient.fetchQuery(
        getFixedRateQuery({
          hyperdriveAddress,
          hyperdriveMathAddress,
          publicClient,
          queryClient,
          options,
        }),
      ),
  };
}
