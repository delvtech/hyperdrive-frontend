import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { AddLiquidityModalButton } from "src/ui/hyperdrive/lp/AddLiquidityModalButton/AddLiquidityModalButton";
import { ClosedLpTable } from "src/ui/hyperdrive/lp/ClosedLpTable/ClosedLpTable";
import { OpenLpSharesCard } from "src/ui/hyperdrive/lp/OpenLpSharesCard/OpenLpSharesCard";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { OpenWithdrawalSharesCard } from "src/ui/hyperdrive/withdrawalShares/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
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
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-between px-4 py-8">
            <h5 className="font-medium">LP Position</h5>
            <div className="flex items-center gap-4">
              <AddLiquidityModalButton
                modalId="add-lp"
                hyperdrive={hyperdrive}
              />
              <OpenClosedFilter />
            </div>
          </div>

          {activeOpenOrClosedTab === "Open" ? (
            <div className="my-20 flex pb-8">
              {(() => {
                if (!account) {
                  return (
                    <NonIdealState
                      heading="No wallet connected"
                      text="Connect your wallet to view your Longs."
                      action={<ConnectWalletButton />}
                    />
                  );
                }

                if (
                  lpSharesStatus === "loading" ||
                  withdrawalSharesStatus === "loading"
                ) {
                  return <LoadingState />;
                }

                if (
                  !withdrawalShares &&
                  !lpShares &&
                  lpSharesStatus === "success" &&
                  withdrawalSharesStatus === "success"
                ) {
                  return (
                    <NonIdealState
                      heading="You have no open LP positions"
                      text="Add liquidity, switch wallets, or view your closed LP positions"
                      action={
                        <AddLiquidityModalButton
                          modalId="add-lp"
                          hyperdrive={hyperdrive}
                        />
                      }
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
    />
  );
}
