import { useReadWriteHyperdrive } from "src/ui/hyperdrive/hooks/useReadWriteHyperdrive";

import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  MutationStatus,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRef } from "react";
import { Address } from "wagmi";
interface UseAddLiquidityOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  maxAPR: bigint | undefined;
  asBase?: boolean;
  /** Controls whether or not an `addLiquidity` callback will be returned to the
   * caller, useful for disabling buttons and other hooks */
  enabled?: boolean;
  onExecuted: (hash: string | undefined) => void;
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
  asBase = true,
  enabled,
  onExecuted,
}: UseAddLiquidityOptions): UseAddLiquidityResult {
  const readWriteHyperdrive = useReadWriteHyperdrive(hyperdriveAddress);
  const queryClient = useQueryClient();
  const addTransaction = useAddRecentTransaction();
  const submittedHashRef = useRef<string | undefined>(undefined);
  const mutationEnabled =
    !!contribution &&
    minAPR !== undefined &&
    maxAPR !== undefined &&
    !!destination &&
    enabled &&
    readWriteHyperdrive;

  const { mutate: addLiquidity, status } = useMutation({
    mutationFn: async () => {
      if (mutationEnabled) {
        await readWriteHyperdrive.addLiquidity({
          contribution,
          minAPR,
          maxAPR,
          destination,
          asBase,
          options: {
            onSubmitted(hash) {
              submittedHashRef.current = hash;
              addTransaction({
                hash,
                description: "Add Liquidity",
              });
            },
          },
        });
        queryClient.resetQueries();
        onExecuted?.(submittedHashRef.current);
      }
    },
  });

  return {
    // Don't return the `addLiquidity` callback if mutation isn't enabled, this
    // makes the hook feel more like useContractWrite from wagmi
    addLiquidity: mutationEnabled ? addLiquidity : undefined,
    addLiquidityStatus: status,
  };
}
