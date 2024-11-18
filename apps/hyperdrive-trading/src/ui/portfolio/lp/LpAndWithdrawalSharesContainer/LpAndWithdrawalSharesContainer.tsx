import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { OpenLpTableDesktop } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/LpAndWithdrawalSharesTable";
import { TotalLpValue } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/TotalLpValue";
import { usePortfolioLpData } from "src/ui/portfolio/lp/usePortfolioLpData";
import { PositionContainer } from "src/ui/portfolio/PositionContainer/PositionContainer";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading/PositionTableHeading";
import { useAccount } from "wagmi";

export function LpAndWithdrawalSharesContainer(): ReactElement {
  const { openLpPositions, openLpPositionStatus } = usePortfolioLpData();
  const { address: account } = useAccount();
  if (!account) {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="No wallet connected"
          action={<ConnectWalletButton />}
        />
      </PositionContainer>
    );
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
              <a
                className="daisy-link"
                href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/liquidity-provider"
                rel="noopener noreferrer"
                target="_blank"
              >
                documentation
              </a>{" "}
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

  return (
    <PositionContainer className="mt-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
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
                /*
		      This regex removes the term from the hyperdrive name since it's already shown in the table.
		      It matches:
		      - \d{1,3}: 1 to 3 digits
		      - d: Followed by the letter 'd'
		    */ hyperdrive.name.replace(/\d{1,3}d/, "")
              }
            />
            <OpenLpTableDesktop
              hyperdrive={hyperdrive}
              openLpPosition={openLpPosition}
              openLpPositionStatus={openLpPositionStatus}
            />
          </div>
        );
      })}
    </PositionContainer>
  );
}
