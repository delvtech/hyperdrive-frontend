import { appConfig, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { OpenLongsTableDesktop } from "src/ui/portfolio/longs/OpenLongsTable/OpenLongsTableDesktop";
import { TotalOpenLongsValue } from "src/ui/portfolio/longs/TotalOpenLongsValue/TotalOpenLongsValue";
import {
  OpenLongPositionsData,
  usePortfolioLongsData,
} from "src/ui/portfolio/longs/usePortfolioLongsData";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading";
import { useAccount } from "wagmi";

export function OpenLongsContainer(): ReactElement {
  const { address: account } = useAccount();
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsData();
  if (!account) {
    return <NoWalletConnected />;
  }

  if (openLongPositionsStatus === "loading") {
    return (
      <PositionContainer>
        <LoadingState
          heading="Loading your Longs..."
          text="Searching for Long events, calculating current value and PnL..."
        />
      </PositionContainer>
    );
  }

  if (openLongPositions?.every((position) => !position.openLongs.length)) {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="No Longs found"
          text={
            <p className="max-w-xl">
              Visit the{" "}
              <ExternalLink
                href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/longs-fixed-rates"
                newTab
              >
                documentation
              </ExternalLink>{" "}
              or explore pools to open your first Long position.
            </p>
          }
          action={
            <Link className="daisy-btn daisy-btn-primary rounded-full" to="/">
              View Pools
            </Link>
          }
        />
      </PositionContainer>
    );
  }

  return (
    <PositionContainer className="mt-10">
      {openLongPositions &&
        appConfig.hyperdrives
          .filter((hyperdrive) => {
            const openLongs = findOpenLongs(
              openLongPositions,
              hyperdrive,
            )?.openLongs;
            // Ensure this hyperdrive pool has open positions before rendering.
            return openLongPositionsStatus === "success" && openLongs?.length;
          })
          .map((hyperdrive) => {
            const openLongs = findOpenLongs(
              openLongPositions,
              hyperdrive,
            )?.openLongs;
            return (
              <div className="flex flex-col gap-6" key={hyperdrive.address}>
                <PositionTableHeading
                  hyperdrive={hyperdrive}
                  rightElement={<TotalOpenLongsValue hyperdrive={hyperdrive} />}
                />
                <OpenLongsTableDesktop
                  hyperdrive={hyperdrive}
                  openLongs={openLongs}
                />
              </div>
            );
          })}
    </PositionContainer>
  );
}

function findOpenLongs(
  openLongPositions: OpenLongPositionsData,
  hyperdrive: HyperdriveConfig,
) {
  return openLongPositions.find(
    (position) =>
      position.hyperdrive.address === hyperdrive.address &&
      position.hyperdrive.chainId === hyperdrive.chainId,
  );
}
