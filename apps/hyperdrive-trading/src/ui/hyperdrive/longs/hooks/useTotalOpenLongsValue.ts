import { Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

export function useTotalOpenLongsValue({
  hyperdrive,
  account,
  longs,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  longs: Long[] | undefined;
}): { totalOpenLongsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const queryEnabled = !!account && !!longs && !!readHyperdrive && !!poolInfo;

  const { data: totalOpenLongsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalLongsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
      activeOpenOrClosedTab,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          let totalOpenLongsValue = 0n;

          const promises = longs.map((long) =>
            readHyperdrive.previewCloseLong({
              maturityTime: long.maturity,
              bondAmountIn: long.bondAmount,
              asBase: false,
            }),
          );

          const results = await Promise.all(promises);

          results.forEach((result) => {
            const amountOutInBase = convertSharesToBase({
              decimals: hyperdrive.decimals,
              sharesAmount: result.amountOut,
              vaultSharePrice: poolInfo?.vaultSharePrice,
            });
            totalOpenLongsValue += amountOutInBase || 0n;
          });

          return totalOpenLongsValue;
        }
      : undefined,
  });

  return { totalOpenLongsValue, isLoading };
}
