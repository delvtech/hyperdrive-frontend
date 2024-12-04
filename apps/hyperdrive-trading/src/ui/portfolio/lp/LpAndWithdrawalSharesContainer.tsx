import { appConfig, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { usePortfolioLpData } from "src/ui/portfolio/lp/usePortfolioLpData";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { useAccount } from "wagmi";
import { OpenLpTableDesktopTwo } from "./LpAndWithdrawalSharesTable/LpAndWithdrawalSharesTable";

export function LpAndWithdrawalSharesContainer(): ReactElement {
  const { openLpPositions, openLpPositionStatus } = usePortfolioLpData();
  const { address: account } = useAccount();

  if (!account) {
    return <NoWalletConnected />;
  }

  if (openLpPositionStatus === "loading") {
    return (
      <PositionContainer>
        <LoadingState
          heading="Loading your LP Positions..."
          text="Searching for LP events, calculating current value and PnL..."
        />
      </PositionContainer>
    );
  }

  if (openLpPositionStatus === "error") {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="Error loading your LP Positions"
          text="Please refresh the page and try again."
        />
      </PositionContainer>
    );
  }

  const hasOpenPositions = openLpPositions?.some(
    (position) => position.lpShares > 0n || position.withdrawalShares > 0n,
  );

  if (!hasOpenPositions) {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="No LP Positions"
          text={
            <p className="max-w-xl">
              Visit the{" "}
              <ExternalLink
                newTab
                href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/liquidity-provider"
              >
                documentation
              </ExternalLink>{" "}
              or explore pools to open your first LP position.
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

  const hyperdrivesByChainAndYieldSource: Record<string, HyperdriveConfig[]> =
    {};

  for (const hyperdrive of appConfig.hyperdrives) {
    const key = `${hyperdrive.chainId}-${hyperdrive.yieldSource}`;
    if (!hyperdrivesByChainAndYieldSource[key]) {
      hyperdrivesByChainAndYieldSource[key] = [];
    }
    hyperdrivesByChainAndYieldSource[key].push(hyperdrive);
  }

  return (
    <PositionContainer className="mt-10">
      {Object.entries(hyperdrivesByChainAndYieldSource).map(
        ([key, hyperdrives]) => (
          <OpenLpTableDesktopTwo hyperdrives={hyperdrives} key={key} />
        ),
      )}
    </PositionContainer>
  );
}
