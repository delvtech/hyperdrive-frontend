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

  const hyperdrivesByYieldSource: Record<string, HyperdriveConfig[]> = {};
  for (const hyperdrive of appConfig.hyperdrives) {
    const source = hyperdrive.yieldSource;
    hyperdrivesByYieldSource[source] = hyperdrivesByYieldSource[source] || [];
    hyperdrivesByYieldSource[source].push(hyperdrive);
  }

  return (
    <PositionContainer className="mt-10">
      {Object.entries(hyperdrivesByYieldSource).map(
        ([yieldSource, hyperdrives]) => (
          <>
            <h1>{yieldSource}</h1>
            <OpenLpTableDesktopTwo
              hyperdrives={hyperdrives}
              key={yieldSource}
            />
          </>
        ),
      )}
      {/* {appConfig.hyperdrives.map((hyperdrive) => {
        const openLpPosition = openLpPositions?.find(
          (position) =>
            position.hyperdrive.address === hyperdrive.address &&
            position.hyperdrive.chainId === hyperdrive.chainId,
        ) ?? {
          lpShares: 0n,
          withdrawalShares: 0n,
        };

        // Check if this hyperdrive pool has open positions before rendering
        if (
          openLpPosition.lpShares === 0n &&
          openLpPosition.withdrawalShares === 0n
        ) {
          return null;
        }

        return (
          <div className="flex flex-col gap-6" key={hyperdrive.address}>
            <PositionTableHeading
              hyperdrive={hyperdrive}
              rightElement={<TotalLpValue hyperdrive={hyperdrive} />}
              hyperdriveName={
                // This regex removes the term (eg: "30d") from the hyperdrive
                // name since it's already shown in the table.
                // https://regex101.com/r/f4A3th/1
                hyperdrive.name.replace(/\d{1,3}d/, "")
              }
            />
            <OpenLpTableDesktop
              hyperdrive={hyperdrive}
              openLpPosition={openLpPosition}
              openLpPositionStatus={openLpPositionStatus}
            />
          </div>
        );
      })} */}
    </PositionContainer>
  );
}
