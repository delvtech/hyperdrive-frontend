import { Long, PoolInfo, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQueries } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { Address } from "viem";

export function useTotalLongsValue({
  hyperdrive,
  account,
  openLongs,
  readHyperdrive,
  poolInfo,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  openLongs: Long[] | undefined;
  readHyperdrive: ReadHyperdrive | undefined;
  poolInfo: PoolInfo | undefined;
}): { totalLongsValue: bigint | undefined; isLoading: boolean } {
  let totalLongsValue = 0n;
  let isLoading = false;
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
        queryFn: () =>
          readHyperdrive?.previewCloseLong({
            maturityTime: long.maturity,
            bondAmountIn: long.bondAmount,
            destination: account as Address,
            asBase: false,
            minAmountOut: parseUnits("0", 18),
            options: {
              from: account,
            },
          }),
      })) ?? [],
  });
  previewCloseLongQueries.forEach((query) => {
    if (query.status === "success") {
      const amountOutInBase = convertSharesToBase({
        decimals: hyperdrive.decimals,
        sharesAmount: query.data,
        vaultSharePrice: poolInfo?.vaultSharePrice,
      });
      totalLongsValue += amountOutInBase || 0n;
    }
    if (query.status === "loading") {
      isLoading = true;
    }
  });
  return { totalLongsValue, isLoading };
}
