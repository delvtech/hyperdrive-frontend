import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenOrClosedTab } from "src/ui/markets/PositionsSection/PositionsSection";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLpSharesCard } from "src/ui/portfolio/OpenLpSharesCard/OpenLpSharesCard";
import { OpenWithdrawalSharesCard } from "src/ui/portfolio/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { useAccount } from "wagmi";

export function LpTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams] = useSearchParams();
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  const { address: account } = useAccount();
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="mb-8 flex items-center justify-end">
            <OpenClosedFilter />
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <div className="flex gap-8">
              <OpenLpSharesCard hyperdrive={hyperdrive} />
              {withdrawalShares ? (
                <OpenWithdrawalSharesCard hyperdrive={hyperdrive} />
              ) : undefined}
            </div>
          ) : (
            <ClosedLpTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      transactionForm={<AddLiquidityForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Add liquidity"}
      positionsLabel={"Positions"}
      faq={<LongsFAQ />}
    />
  );
}
