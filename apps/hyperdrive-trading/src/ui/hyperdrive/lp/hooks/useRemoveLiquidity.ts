import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address } from "wagmi";
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
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryClient = useQueryClient();

  const { mutate: removeLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (
        !!lpSharesIn &&
        minBaseAmountOut !== undefined &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        readWriteHyperdrive.removeLiquidity({
          lpSharesIn,
          minBaseAmountOut,
          destination,
          asUnderlying,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return {
    removeLiquidity,
    removeLiquidityStatus: status,
  };
}
