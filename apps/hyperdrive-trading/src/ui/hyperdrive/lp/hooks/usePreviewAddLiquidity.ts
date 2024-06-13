import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
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
  previewAddLiquidityError: string;
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
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
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
  const { data: blockNumber } = useBlockNumber({
    watch: true,
    query: { enabled: queryEnabled },
  });

  const { data, status, fetchStatus, error } = useQuery({
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
      ? async () => {
          // if adding shares as liquidity, make sure the shares get prepared before
          // going into the sdk
          const finalContribution = asBase
            ? contribution
            : await prepareSharesIn({
                appConfig,
                hyperdriveAddress,
                readHyperdrive,
                sharesAmount: contribution,
              });

          return readHyperdrive.previewAddLiquidity({
            destination,
            contribution: finalContribution,
            minAPR,
            minLpSharePrice,
            maxAPR,
            asBase,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  let queryStatus: UsePreviewAddLiquidityResult["status"] = status;
  if (fetchStatus === "idle" && status === "loading") {
    queryStatus = "idle";
  }

  return {
    status: queryStatus,
    previewAddLiquidityError: error as string,
    lpSharesOut: data?.lpSharesOut,
  };
}
