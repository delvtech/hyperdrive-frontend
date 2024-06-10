import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ClosedLongsTable } from "src/ui/hyperdrive/longs/ClosedLongsTable/ClosedLongsTable";
import { OpenLongsTable } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTable";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { useAccount } from "wagmi";
export function LongsTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const appConfig = useAppConfig();
  const { address: account } = useAccount();
  // const { openLongs } = useOpenLongs({
  //   account,
  //   hyperdriveAddress: hyperdrive.address,
  // });
  // const { totalLongsValue, isLoading } = useTotalLongsValue({
  //   hyperdrive,
  //   account,
  //   openLongs,
  // });
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
              {/* {!isLoading ? (
                <>
                  {openLongs?.length ? (
                    <p className="text-sm text-neutral-content">
                      Total Value:{" "}
                      {formatBalance({
                        balance: totalLongsValue || 0n,
                        decimals: baseToken.decimals,
                        places: baseToken.places,
                      })}{" "}
                      {baseToken.symbol}
                    </p>
                  ) : undefined}
                </>
              ) : (
                <Skeleton width={100} />
              )} */}
            </div>
            {/* <div className="flex items-center gap-4">
              {account && openLongs?.length ? (
                <OpenLongModalButton
                  modalId="open-long"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              <OpenClosedFilter />
            </div> */}
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
