import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import groupBy from "lodash.groupby";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { OpenShortsTableDesktop } from "src/ui/portfolio/shorts/OpenShortsTable/OpenShortsTableDesktop";
import { usePortfolioShortsData } from "src/ui/portfolio/shorts/usePortfolioShortsData";
import { useAccount } from "wagmi";

export function OpenShortsContainer(): ReactElement | null {
  const { address: account } = useAccount();
  const { openShortPositions, openShortPositionsStatus } =
    usePortfolioShortsData();
  const hyperdrivesByChainAndYieldSource = groupBy(
    appConfig.hyperdrives,
    (hyperdrive) => `${hyperdrive.chainId}-${hyperdrive.yieldSource}`,
  );

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
      {Object.entries(hyperdrivesByChainAndYieldSource).map(
        ([key, hyperdrives]) => (
          <OpenShortsTableDesktop hyperdrives={hyperdrives} key={key} />
        ),
      )}
    </PositionContainer>
  );
}
