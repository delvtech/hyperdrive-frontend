import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Address } from "wagmi";
interface UseAddLiquidityOptions {
  hyperdriveAddress: Address;
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
  hyperdriveAddress,
  destination,
  contribution,
  minAPR,
  maxAPR,
  asUnderlying = true,
  enabled,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
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
        await readWriteHyperdrive.addLiquidity({
          contribution,
          minAPR,
          maxAPR,
          destination,
          asUnderlying,
          options: {
            onSubmitted(hash) {
              addTransaction({
                hash,
                description: "addLiquidity",
              });
            },
          },
        });
        queryClient.invalidateQueries();
      }
    },
  });

  return {
    addLiquidity,
    addLiquidityStatus: status,
  };
}
