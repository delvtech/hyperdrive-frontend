import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useAccount, useBlockNumber, usePublicClient } from "wagmi";

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
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const queryEnabled =
    minAPR !== undefined &&
    minLpSharePrice !== undefined &&
    !!maxAPR &&
    !!contribution &&
    !!destination &&
    !!publicClient &&
    !!account &&
    enabled &&
    !!readHyperdrive;

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
      blockNumber: blockNumber?.toString(),
    }),
    queryFn: queryEnabled
      ? () => {
          return readHyperdrive.previewAddLiquidity({
            destination,
            contribution,
            minAPR,
            minLpSharePrice,
            maxAPR,
            asBase,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    status: queryEnabled ? status : "idle",
    lpSharesOut: data?.lpSharesOut,
  };
}
