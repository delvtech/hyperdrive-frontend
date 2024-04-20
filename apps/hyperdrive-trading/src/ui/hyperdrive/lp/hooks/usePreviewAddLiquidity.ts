import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdriveModel } from "src/ui/hyperdrive/hooks/model/useReadHyperdriveModel";
import { Address } from "viem";
import { useAccount, usePublicClient } from "wagmi";

interface UsePreviewAddLiquidityOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minAPR: bigint | undefined;
  minLpSharePrice: bigint | undefined;
  maxAPR: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
  ethValue?: bigint;
}

interface UsePreviewAddLiquidityResult {
  status: "error" | "idle" | "loading" | "success";
  lpSharesOut: bigint | undefined;
}

export function usePreviewAddLiquidity({
  hyperdriveAddress,
  destination,
  contribution,
  minAPR,
  minLpSharePrice,
  maxAPR,
  asBase = true,
  enabled = true,
  ethValue,
}: UsePreviewAddLiquidityOptions): UsePreviewAddLiquidityResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();
  const hyperdriveModel = useReadHyperdriveModel(hyperdriveAddress);
  const queryEnabled =
    minAPR !== undefined &&
    minLpSharePrice !== undefined &&
    !!maxAPR &&
    !!contribution &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!hyperdriveModel;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewAddLiquidity", {
      hyperdrive: hyperdriveAddress,
      destination,
      contribution: contribution?.toString(),
      minAPR: minAPR?.toString(),
      maxAPR: maxAPR?.toString(),
      minLpSharePrice: minLpSharePrice?.toString(),
      asBase,
      ethValue: ethValue?.toString(),
    }),
    queryFn: queryEnabled
      ? () => {
          if (asBase) {
            return hyperdriveModel.previewAddLiquidityWithBase({
              destination,
              contribution,
              minAPR,
              minLpSharePrice,
              maxAPR,
            });
          }

          return hyperdriveModel.previewAddLiquidityWithShares({
            destination,
            contribution,
            minAPR,
            minLpSharePrice,
            maxAPR,
            ethValue,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    status,
    lpSharesOut: data?.lpSharesOut,
  };
}
