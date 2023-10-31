import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenLpTable } from "src/ui/portfolio/OpenLpTable/OpenLpTable";
import { OpenShortsTable } from "src/ui/portfolio/OpenShortsTable/OpenShortsTable";
import {
  PositionTab,
  PositionTabs,
} from "src/ui/portfolio/PositionTabs/PositionTabs";

export type OpenOrClosedTab = "Open" | "Closed";

export function PositionsSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const activePositionTab =
    (searchParams.get("position") as PositionTab) || "Longs";
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  // Run effect when mounted to set the search params to the default
  useEffect(() => {
    setSearchParams({
      position: activePositionTab,
      openOrClosed: activeOpenOrClosedTab,
    });
  }, []);

  const handleChangeTab = (position: PositionTab) => {
    setSearchParams({
      ...searchParams,
      position,
      openOrClosed: "Open",
    });
  };

  const handleChangeOpenOrClosedTab = (openOrClosed: OpenOrClosedTab) => {
    setSearchParams({
      ...searchParams,
      position: activePositionTab,
      openOrClosed,
    });
  };

  return (
    <div>
      <div className="mb-4 flex w-full items-end justify-between border-b-2">
        <PositionTabs
          onTabClick={handleChangeTab}
          activePositionTab={activePositionTab}
        />

        <div className="daisy-tabs mb-1">
          <button
            onClick={() => handleChangeOpenOrClosedTab("Open")}
            className={classNames("daisy-tab", {
              "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
            })}
          >
            Open
          </button>
          <button
            onClick={() => handleChangeOpenOrClosedTab("Closed")}
            className={classNames("daisy-tab", {
              "daisy-tab-active font-medium":
                activeOpenOrClosedTab === "Closed",
            })}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-full">
          {(() => {
            switch (activePositionTab) {
              case "Longs": {
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenLongsTable hyperdrive={hyperdrive} />;
                }
                return <ClosedLongsTable hyperdrive={hyperdrive} />;
              }
              case "Shorts": {
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenShortsTable hyperdrive={hyperdrive} />;
                }
                return <ClosedShortsTable hyperdrive={hyperdrive} />;
              }
              case "LP":
                if (activeOpenOrClosedTab === "Open") {
                  return (
                    <>
                      <div className="flex w-full gap-4">
                        <div className="flex w-[400px] shrink-0">
                          <Well elevation="flat" block>
                            <div className="space-y-4">
                              <span className="text-h5 font-bold">
                                LP Shares
                              </span>
                              <div className="flex flex-col justify-between gap-1">
                                <div className="flex justify-between">
                                  <p className="">Pool share</p>
                                  <p className="flex flex-col text-right ">
                                    0.23%
                                  </p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="">Current value</p>
                                  <p className="font-bold">610.224 WETH</p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="">Max withdraw</p>
                                  <p className="flex flex-col text-right ">
                                    <span>373.7 WETH</span>
                                    <span>197.96 Withdrawal shares</span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <Stat
                                  label={"LP balance"}
                                  value={`5681.27 shares`}
                                />
                                <div className="daisy-btn-group gap-0.5">
                                  <button className="daisy-btn-primary daisy-btn-sm daisy-btn">
                                    Deposit
                                  </button>
                                  <button className="daisy-btn-primary daisy-btn-sm daisy-btn">
                                    Withdraw
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Well>
                        </div>
                        <div className="flex w-[400px] shrink-0">
                          <Well elevation="flat" block>
                            <div className="space-y-4">
                              <span className="text-h5 font-bold">
                                Withdrawal Shares
                              </span>
                              <div className="flex flex-col justify-between gap-1">
                                <div className="flex justify-between">
                                  <p className="">Pool share</p>
                                  <p className="flex flex-col text-right ">
                                    0.23%
                                  </p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="">Current value</p>
                                  <p className="font-bold">610.224 WETH</p>
                                </div>
                                <div className="flex justify-between">
                                  <p className="">Max withdraw</p>
                                  <p className="flex flex-col text-right ">
                                    <span>373.7 WETH</span>
                                    <span>197.96 Withdrawal shares</span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <Stat
                                  label={"Withdrawal Shares balance"}
                                  value={`5681.27`}
                                />
                                <button className="daisy-btn-primary daisy-btn-sm daisy-btn">
                                  Redeem
                                </button>
                              </div>
                            </div>
                          </Well>
                        </div>
                      </div>
                      <OpenLpTable hyperdrive={hyperdrive} />
                    </>
                  );
                }
                return <ClosedLpTable hyperdrive={hyperdrive} />;
              default:
                assertNever(activePositionTab);
            }
          })()}
        </div>
      </div>
    </div>
  );
}
