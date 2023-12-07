import { SparklesIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { ClosedLpTable } from "src/ui/portfolio/ClosedLpTable/ClosedLpTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLpSharesCard } from "src/ui/portfolio/OpenLpSharesCard/OpenLpSharesCard";
import { OpenLpSharesCardNew } from "src/ui/portfolio/OpenLpSharesCard/OpenLpSharesCardNew";
import { OpenWithdrawalSharesCard } from "src/ui/portfolio/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { OpenWithdrawalSharesCardNew } from "src/ui/portfolio/OpenWithdrawalSharesCard/OpenWithdrawalSharesCardNew";
import { NO_LP_SHARES_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";
import { useAccount } from "wagmi";

export function LpTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { isFlagEnabled: showNewLpCard } = useFeatureFlag(
    NO_LP_SHARES_FEATURE_FLAG,
  );
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-8">
            <h6>LP positions</h6>
            <OpenClosedFilter />
          </div>

          {activeOpenOrClosedTab === "Open" ? (
            <div className="flex gap-32 pb-8">
              {(() => {
                if (!account) {
                  return (
                    <NonIdealState
                      heading="No wallet connected"
                      text="Connect your wallet to view your Longs."
                      icon={<WalletIcon height="64" />}
                      action={
                        <button
                          className="daisy-btn-secondary daisy-btn mt-8"
                          onClick={() => openConnectModal?.()}
                        >
                          Connect wallet
                        </button>
                      }
                    />
                  );
                }
                if (!withdrawalShares && !lpShares) {
                  return (
                    <NonIdealState
                      heading="There are no LP positions in this wallet"
                      text="Add liquidity to populate this space with your positions."
                      icon={<SparklesIcon height="64" />}
                    />
                  );
                }
                return (
                  <>
                    {showNewLpCard ? (
                      <OpenLpSharesCardNew hyperdrive={hyperdrive} />
                    ) : (
                      <OpenLpSharesCard hyperdrive={hyperdrive} />
                    )}{" "}
                    {withdrawalShares ? (
                      showNewLpCard ? (
                        <OpenWithdrawalSharesCardNew hyperdrive={hyperdrive} />
                      ) : (
                        <OpenWithdrawalSharesCard hyperdrive={hyperdrive} />
                      )
                    ) : undefined}
                  </>
                );
              })()}
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
