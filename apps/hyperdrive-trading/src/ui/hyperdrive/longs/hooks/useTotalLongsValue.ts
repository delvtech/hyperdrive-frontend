import { Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQueries } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useTotalLongsValue({
  hyperdrive,
  account,
  openLongs,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  openLongs: Long[] | undefined;
}): { totalLongsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  let isLoading = true;

  const queryEnabled =
    !!account && !!openLongs && !!readHyperdrive && !!poolInfo;
  const previewCloseLongQueries = useQueries({
    queries:
      openLongs?.map((long) => ({
        queryKey: makeQueryKey("previewCloseLong", {
          hyperdriveAddress: hyperdrive.address,
          bondAmountIn: long.bondAmount?.toString(),
          minOutput: parseUnits("0", 18).toString(),
          destination: account,
          asBase: false,
        }),
        enabled: queryEnabled,
        queryFn: queryEnabled
          ? () =>
              readHyperdrive?.previewCloseLong({
                maturityTime: long.maturity,
                bondAmountIn: long.bondAmount,
                destination: account,
                asBase: false,
                minAmountOut: parseUnits("0", 18),
                options: {
                  from: account,
                },
              })
          : undefined,
      })) ?? [],
  });

  const allQueriesSucceeded = previewCloseLongQueries.every(
    (query) => query.status === "success",
  );
  let totalLongsValue = 0n;
  if (allQueriesSucceeded) {
    previewCloseLongQueries.forEach((query) => {
      const amountOutInBase = convertSharesToBase({
        decimals: hyperdrive.decimals,
        sharesAmount: query.data,
        vaultSharePrice: poolInfo?.vaultSharePrice,
      });
      totalLongsValue += amountOutInBase || 0n;
    });
  }

  isLoading = previewCloseLongQueries.some(
    (query) => query.status === "loading",
  );

  return { totalLongsValue, isLoading };
}
