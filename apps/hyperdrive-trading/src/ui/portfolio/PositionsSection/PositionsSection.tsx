import { useQuery } from "@tanstack/react-query";
import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { ClosedShortsTable } from "src/ui/portfolio/ClosedShortsTable/ClosedShortsTable";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenLpPosition } from "src/ui/portfolio/OpenLpPosition/OpenLpPosition";
import { OpenShortsTable } from "src/ui/portfolio/OpenShortsTable/OpenShortsTable";
import {
  PositionTab,
  PositionTabs,
} from "src/ui/portfolio/PositionTabs/PositionTabs";
import { useAccount } from "wagmi";

export type OpenOrClosedTab = "Open" | "Closed";

export function PositionsSection({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("shortPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });

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

        <div className="daisy-tabs-boxed mb-1">
          <button
            onClick={() => handleChangeOpenOrClosedTab("Open")}
            className={classNames("daisy-tab text-sm", {
              "daisy-tab-active !bg-base-300 !text-white":
                activeOpenOrClosedTab === "Open",
            })}
          >
            Open
          </button>
          <button
            onClick={() => handleChangeOpenOrClosedTab("Closed")}
            className={classNames("daisy-tab text-sm", {
              "daisy-tab-active !bg-base-300 !text-white":
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
                if (activeOpenOrClosedTab === "Open" && shorts) {
                  return (
                    <OpenShortsTable shorts={shorts} hyperdrive={hyperdrive} />
                  );
                }
                return <ClosedShortsTable hyperdrive={hyperdrive} />;
              }
              case "LP":
                if (activeOpenOrClosedTab === "Open") {
                  return <OpenLpPosition hyperdrive={hyperdrive} />;
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
