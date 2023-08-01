import { HyperdriveABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { MutationStatus } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { queryClient } from "src/network/queryClient";
import { Address, useContractWrite, usePublicClient } from "wagmi";
interface UseRemoveLiquidityOptions {
  market: Hyperdrive;
  lpSharesIn: bigint | undefined;
  minBaseAmountOut: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UseRemoveLiquidityResult {
  removeLiquidity: (() => void) | undefined;
  removeLiquidityStatus: MutationStatus;
}

export function useRemoveLiquidity({
  market,
  lpSharesIn,
  minBaseAmountOut,
  destination,
  asUnderlying = true,
  enabled,
}: UseRemoveLiquidityOptions): UseRemoveLiquidityResult {
  const queryEnabled =
    !!lpSharesIn && minBaseAmountOut !== undefined && !!destination && enabled;
  const publicClient = usePublicClient();
  const addRecentTransaction = useAddRecentTransaction();
  const { write: removeLiquidity, status } = useContractWrite({
    abi: HyperdriveABI,
    address: market.address,
    functionName: "removeLiquidity",
    args: queryEnabled
      ? [lpSharesIn, minBaseAmountOut, destination, asUnderlying]
      : undefined,
    // TODO: better gas optimization
    gas: 500_000n,
    onSuccess: async (data) => {
      addRecentTransaction({
        hash: data.hash,
        description: "Remove Liquidity",
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
    removeLiquidity,
    removeLiquidityStatus: status,
  };
}
