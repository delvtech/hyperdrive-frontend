import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
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
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const { address: account } = useAccount();
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-end pt-8">
            <OpenClosedFilter />
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <div className="flex gap-8 pb-8">
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
    />
  );
}
