import { SparklesIcon, WalletIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLpSharesCard } from "src/ui/portfolio/OpenLpSharesCard/OpenLpSharesCard";
import { OpenWithdrawalSharesCard } from "src/ui/portfolio/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { useAccount } from "wagmi";

export function LpTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();

  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const { lpShares, lpSharesStatus } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { withdrawalShares, withdrawalSharesStatus } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col items-center lg:min-w-[720px]">
          <div className="flex w-full justify-between px-4 py-8 md:px-0">
            <h5 className="font-bold">LP positions</h5>
            <OpenClosedFilter />
          </div>

          {activeOpenOrClosedTab === "Open" ? (
            <div className="flex gap-8 pb-8">
              {(() => {
                if (!account) {
                  return (
                    <NonIdealState
                      heading="No wallet connected"
                      text="Connect your wallet to view your Longs."
                      icon={<WalletIcon height="64" />}
                      action={<ConnectWalletButton />}
                    />
                  );
                }
                if (
                  !withdrawalShares &&
                  !lpShares &&
                  lpSharesStatus === "success" &&
                  withdrawalSharesStatus === "success"
                ) {
                  return (
                    <NonIdealState
                      heading="There are no LP positions in this wallet"
                      text="Add liquidity to populate this space with your positions."
                      icon={<SparklesIcon height="64" />}
                    />
                  );
                }
                return (
                  <div className="flex flex-col gap-6 md:flex-row">
                    <OpenLpSharesCard hyperdrive={hyperdrive} />{" "}
                    {withdrawalShares ? (
                      <OpenWithdrawalSharesCard hyperdrive={hyperdrive} />
                    ) : undefined}
                  </div>
                );
              })()}
            </div>
          ) : (
            <ClosedLpTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
      transactionForm={<AddLiquidityForm hyperdrive={hyperdrive} />}
      transactionFormHeading={"Add Liquidity"}
    />
  );
}
