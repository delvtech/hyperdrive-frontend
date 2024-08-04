import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import type { QueryStatusWithIdle } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesIn } from "src/ui/hyperdrive/hooks/usePrepareSharesIn";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
import { useAccount, useBlockNumber, usePublicClient } from "wagmi";

interface UsePreviewAddLiquidityOptions {
  hyperdriveAddress: Address;
  destination: Address | undefined;
  contribution: bigint | undefined;
  minApr: bigint | undefined;
  minLpSharePrice: bigint | undefined;
  maxApr: bigint | undefined;
  asBase?: boolean;
  enabled?: boolean;
  ethValue?: bigint;
}

interface UsePreviewAddLiquidityResult {
  status: QueryStatusWithIdle;
  previewAddLiquidityError: string;
  lpSharesOut: bigint | undefined;
}

export function usePreviewAddLiquidity({
  hyperdriveAddress,
  destination,
  contribution,
  minApr,
  minLpSharePrice,
  maxApr,
  asBase = true,
  enabled = true,
  ethValue,
}: UsePreviewAddLiquidityOptions): UsePreviewAddLiquidityResult {
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    minApr !== undefined &&
    minLpSharePrice !== undefined &&
    !!maxApr &&
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
      minApr: minApr?.toString(),
      maxApr: maxApr?.toString(),
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
            minApr,
            minLpSharePrice,
            maxApr,
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
