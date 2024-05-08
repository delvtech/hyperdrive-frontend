import { Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
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

  const queryEnabled =
    !!account && !!openLongs && !!readHyperdrive && !!poolInfo;

  const { data: totalLongsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalLongsValue", {
      hyperdriveAddress: hyperdrive.address,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const promises = openLongs.map((long) =>
            readHyperdrive?.previewCloseLong({
              maturityTime: long.maturity,
              bondAmountIn: long.bondAmount,
              destination: account,
              asBase: false,
              minAmountOut: parseUnits("0", 18),
              options: {
                from: account,
              },
            }),
          );

          const results = await Promise.all(promises);

          let totalLongsValue = 0n;
          results.forEach((result) => {
            const amountOutInBase = convertSharesToBase({
              decimals: hyperdrive.decimals,
              sharesAmount: result,
              vaultSharePrice: poolInfo?.vaultSharePrice,
            });
            totalLongsValue += amountOutInBase || 0n;
          });

          return totalLongsValue;
        }
      : undefined,
  });

  return { totalLongsValue, isLoading };
}
