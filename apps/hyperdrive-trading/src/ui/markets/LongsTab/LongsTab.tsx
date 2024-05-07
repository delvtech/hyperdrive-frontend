import { Long, PoolInfo, ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { format as dnFormat } from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { parseUnits } from "src/base/parseUnits";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { ClosedLongsTable } from "src/ui/hyperdrive/longs/ClosedLongsTable/ClosedLongsTable";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { OpenLongsTable } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTable";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useTotalLongsValue } from "src/ui/hyperdrive/longs/hooks/useTotalLongsValue";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";
import { useAccount } from "wagmi";
export function LongsTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openLongs } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { totalLongsValue, isLoading } = useTotalLongsValue({
    hyperdrive,
    account,
    openLongs,
    readHyperdrive,
    poolInfo,
  });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4 p-8">
            <div className="flex flex-col items-start gap-2">
              <h5 className="font-medium">Long Positions</h5>
              {!isLoading ? (
                <p className="text-xs text-neutral-content">
                  Total Value:{" "}
                  {dnFormat([totalLongsValue || 0n, baseToken.decimals], {
                    digits: 2,
                  })}{" "}
                  {baseToken.symbol}
                </p>
              ) : (
                <Skeleton width={100} />
              )}
            </div>
            <div className="flex items-center gap-4">
              {account && openLongs?.length ? (
                <OpenLongModalButton
                  modalId="open-long"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              <OpenClosedFilter />
            </div>
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <OpenLongsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedLongsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}

function calculateTotalLongsValue({
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
}) {
  return new Promise(async (resolve) => {
    if (!readHyperdrive) {
      resolve(0);
    }
    let totalValue = 0n;
    if (openLongs && account && readHyperdrive && poolInfo) {
      const promises = openLongs.map(async (long) => {
        const sharesAmountOut = await readHyperdrive.previewCloseLong({
          maturityTime: long.maturity,
          bondAmountIn: long.bondAmount,
          destination: account,
          asBase: false,
          minAmountOut: parseUnits("0", 18),
          options: {
            from: account,
          },
        });
        const amountOutInBase = convertSharesToBase({
          decimals: hyperdrive.decimals,
          sharesAmount: sharesAmountOut,
          vaultSharePrice: poolInfo?.vaultSharePrice,
        });

        return amountOutInBase;
      });

      const results = await Promise.all(promises);
      totalValue = results.reduce((acc, val) => acc + val, 0n);
    }
    resolve(totalValue);
  });
}
