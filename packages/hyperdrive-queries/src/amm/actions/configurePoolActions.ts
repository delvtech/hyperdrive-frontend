import { ReadCallOptions } from "@hyperdrive/core";
import { QueryClient } from "@tanstack/query-core";
import { getCurrentFixedAPRQuery } from "src/amm/getFixedAPR";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { Address, PublicClient } from "viem";

export interface PoolActions {
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
  getPoolInfo: () => Promise<{
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
  getFixedRate: () => Promise<{
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
    getPoolInfo: () =>
      queryClient.fetchQuery(
        getPoolInfoQuery({ hyperdriveAddress, publicClient }),
      ),
    getFixedRate: () =>
      queryClient.fetchQuery(
        getCurrentFixedAPRQuery({
          hyperdriveAddress,
          hyperdriveMathAddress,
          publicClient,
          queryClient,
        }),
      ),
  };
}
