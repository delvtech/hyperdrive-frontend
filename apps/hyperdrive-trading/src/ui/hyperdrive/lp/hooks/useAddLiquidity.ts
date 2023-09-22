import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address } from "wagmi";
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
  const readWriteHyperdrive = useReadWriteHyperdrive(market.address);
  const queryClient = useQueryClient();

  const { mutate: addLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (
        !!contribution &&
        !!minAPR &&
        !!maxAPR &&
        !!destination &&
        enabled &&
        readWriteHyperdrive
      ) {
        readWriteHyperdrive.addLiquidity({
          contribution,
          minAPR,
          maxAPR,
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
    addLiquidity,
    addLiquidityStatus: status,
  };
}
