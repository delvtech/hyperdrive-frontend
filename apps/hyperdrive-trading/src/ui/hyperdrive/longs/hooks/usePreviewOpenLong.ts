import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useAccount, usePublicClient } from "wagmi";
interface UsePreviewOpenLongOptions {
  market: Hyperdrive;
  baseAmount: bigint | undefined;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  longAmountOut: bigint | undefined;
  maturityTime: bigint | undefined;
}

export function usePreviewOpenLong({
  market,
  baseAmount,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive(market.address);
  const queryEnabled = !!readHyperdrive && !!baseAmount;
  const { address: account } = useAccount();
  const { poolInfo } = usePoolInfo(market.address);
  const publicClient = usePublicClient();
  useQuery({
    queryKey: [
      "testing",
      {
        baseAmount: baseAmount?.toString(),
        publicClient,
        address: market.address,
        account,
        abi: IHyperdrive.abi,
      },
    ],
    queryFn:
      account && poolInfo && baseAmount
        ? async () => {
            return publicClient.simulateContract({
              address: market.address,
              abi: IHyperdrive.abi,
              functionName: "openLong",
              account,
              args: [
                baseAmount,
                1n,
                poolInfo.sharePrice,
                { destination: account, asBase: true, extraData: "0x" },
              ],
            });
          }
        : undefined,
  });

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      market: market.address,
      baseAmount: baseAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewOpenLong({
            baseAmount,
          })
      : undefined,
  });
  return {
    longAmountOut: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    status,
  };
}
