import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus, useQueryClient } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { ZERO_ADDRESS } from "src/base/constants";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  usePublicClient,
} from "wagmi";
interface UseOpenShortOptions {
  market: Hyperdrive;
  amountBondShorts: bigint | undefined;
  maxBaseAmountIn: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseOpenShortResult {
  openShort: (() => void) | undefined;
  openShortSubmittedStatus: MutationStatus;
}

export function useOpenShort({
  market,
  amountBondShorts,
  maxBaseAmountIn,
  destination,
  asUnderlying = true,
  enabled,
}: UseOpenShortOptions): UseOpenShortResult {
  const queryClient = useQueryClient();

  const queryEnabled =
    !!amountBondShorts && !!maxBaseAmountIn && !!destination && enabled;

  const requiresEth = asUnderlying && market.baseToken.address === ZERO_ADDRESS;

  const { config } = usePrepareContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "openShort",
    enabled: queryEnabled,
    args: queryEnabled
      ? [amountBondShorts, maxBaseAmountIn, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    // Used when ETH is the base asset (e.g. StethHyperdrive) and
    // asUnderlying is true.
    value: requiresEth && maxBaseAmountIn ? maxBaseAmountIn : 0n,
  });

  const publicClient = usePublicClient();
  const addRecentTransaction = useAddRecentTransaction();
  const { write: openShort, status } = useContractWrite({
    ...config,
    onSuccess: async (data) => {
      addRecentTransaction({
        hash: data.hash,
        description: "Open Short",
      });
      await publicClient.waitForTransactionReceipt({
        hash: data.hash,
        onReplaced() {
          queryClient.invalidateQueries();
        },
      });
      queryClient.invalidateQueries();
    },
  });

  return {
    openShort,
    openShortSubmittedStatus: status,
  };
}
