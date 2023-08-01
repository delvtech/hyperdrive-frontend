import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import { queryClient } from "src/network/queryClient";
import { waitForTransactionAndInvalidateCache } from "src/network/waitForTransactionAndInvalidateCache";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  usePublicClient,
} from "wagmi";
interface UseAddLiquidityOptions {
  market: Hyperdrive;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  maxAPR: bigint | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseAddLiquidityResult {
  addLiquidity: (() => void) | undefined;
  addLiquidityStatus: MutationStatus;
}

export function useAddLiquidity({
  market,
  destination,
  contribution,
  minAPR,
  maxAPR,
  asUnderlying = true,
  enabled,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const queryEnabled =
    minAPR !== undefined &&
    !!maxAPR &&
    !!contribution &&
    !!destination &&
    enabled;

  const requiresEth = asUnderlying && market.baseToken.address === ZERO_ADDRESS;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "addLiquidity",
    enabled: queryEnabled,
    args: queryEnabled
      ? [contribution, minAPR, maxAPR, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    // Used when ETH is the base asset (e.g. StethHyperdrive) and
    // asUnderlying is true.
    value: requiresEth && contribution ? contribution : 0n,
  });
  const publicClient = usePublicClient();
  const addRecentTransaction = useAddRecentTransaction();
  const { write: addLiquidity, status } = useContractWrite({
    ...config,
    onSuccess: async (data) => {
      addRecentTransaction({ hash: data.hash, description: "Add Liquidity" });
      await waitForTransactionAndInvalidateCache({
        publicClient,
        hash: data.hash,
        queryClient,
      });
    },
  });
  return {
    addLiquidity,
    addLiquidityStatus: status,
  };
}
