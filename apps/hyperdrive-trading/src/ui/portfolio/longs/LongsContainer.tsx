import { Link } from "@tanstack/react-router";
import groupBy from "lodash.groupby";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { usePortfolioLongsData } from "src/ui/portfolio/longs/usePortfolioLongsData";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { Address } from "viem";
import { OpenLongsTableDesktop } from "./OpenLongsTable/OpenLongsTableDesktop";

export function OpenLongsContainer({
  account,
}: {
  account: Address | undefined;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const { openLongPositions, openLongPositionsStatus } = usePortfolioLongsData({
    account,
  });

  console.log(openLongPositions, "open long postions");

  const hyperdrivesByChainAndYieldSource = groupBy(
    appConfig.hyperdrives,
    (hyperdrive) => `${hyperdrive.chainId}-${hyperdrive.yieldSource}`,
  );

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
                className="daisy-link"
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
      {Object.entries(hyperdrivesByChainAndYieldSource).map(
        ([key, hyperdrives], i) => (
          <OpenLongsTableDesktop
            key={i}
            hyperdrives={hyperdrives}
            account={account}
          />
        ),
      )}
    </PositionContainer>
  );
}
