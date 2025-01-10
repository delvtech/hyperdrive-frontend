import { appConfig, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading";
import { OpenShortsTableDesktop } from "src/ui/portfolio/shorts/OpenShortsTable/OpenShortsTableDesktop";
import { TotalOpenShortValue } from "src/ui/portfolio/shorts/OpenShortsTable/TotalOpenShortsValue";
import {
  OpenShortPositionsData,
  usePortfolioShortsData,
} from "src/ui/portfolio/shorts/usePortfolioShortsData";
import { useAccount } from "wagmi";

export function OpenShortsContainer(): ReactElement {
  const { openShortPositions, openShortPositionsStatus } =
    usePortfolioShortsData();
  const { address: account } = useAccount();
  if (!account) {
    return <NoWalletConnected />;
  }

  if (openShortPositionsStatus === "loading") {
    return (
      <PositionContainer>
        <LoadingState
          heading="Loading your Shorts..."
          text="Searching for Shorts events, calculating current value and PnL..."
        />
      </PositionContainer>
    );
  }

  if (
    openShortPositions?.every((position) => position.openShorts.length === 0)
  ) {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="No Shorts found"
          text={
            <p className="max-w-xl">
              Visit the{" "}
              <ExternalLink
                newTab
                href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/shorts-variable-rates"
                className="daisy-link"
              >
                documentation
              </ExternalLink>{" "}
              or explore pools to open your first Short position.
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
      {openShortPositions &&
        appConfig.hyperdrives
          .filter((hyperdrive) => {
            const openShorts = findOpenShorts(
              openShortPositions,
              hyperdrive,
            )?.openShorts;
            // Ensure this hyperdrive pool has open positions before rendering.
            return openShortPositionsStatus === "success" && openShorts?.length;
          })
          .map((hyperdrive) => {
            const openShorts = findOpenShorts(
              openShortPositions,
              hyperdrive,
            )?.openShorts;

            return (
              <div className="flex flex-col gap-6" key={hyperdrive.address}>
                <PositionTableHeading
                  hyperdrive={hyperdrive}
                  rightElement={<TotalOpenShortValue hyperdrive={hyperdrive} />}
                />
                <OpenShortsTableDesktop
                  hyperdrive={hyperdrive}
                  openShorts={openShorts}
                />
              </div>
            );
          })}
    </PositionContainer>
  );
}

function findOpenShorts(
  openShortPositions: OpenShortPositionsData,
  hyperdrive: HyperdriveConfig,
) {
  return openShortPositions.find(
    (position) =>
      position.hyperdrive.address === hyperdrive.address &&
      position.hyperdrive.chainId === hyperdrive.chainId,
  );
}
