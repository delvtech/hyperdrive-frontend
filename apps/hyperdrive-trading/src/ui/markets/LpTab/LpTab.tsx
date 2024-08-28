import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { AddLiquidityModalButton } from "src/ui/hyperdrive/lp/AddLiquidityModalButton/AddLiquidityModalButton";
import { ClosedLpTable } from "src/ui/hyperdrive/lp/ClosedLpTable/ClosedLpTable";
import { OpenLpSharesCard } from "src/ui/hyperdrive/lp/OpenLpSharesCard/OpenLpSharesCard";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { OpenWithdrawalSharesCard } from "src/ui/hyperdrive/withdrawalShares/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

export function LpTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();
  const { marketState } = useMarketState(hyperdrive.address);
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
          <div className="flex w-full flex-col justify-between gap-8 p-8 lg:flex-row lg:items-center lg:gap-0">
            <h5 className="font-medium">LP Position</h5>
            <div className="flex items-center gap-4">
              {(lpShares && lpSharesStatus === "success") ||
              (withdrawalShares && withdrawalSharesStatus === "success") ? (
                <AddLiquidityModalButton
                  modalId="add-lp"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              <OpenClosedFilter />
            </div>
          </div>

          {activeOpenOrClosedTab === "open" ? (
            <>
              {(() => {
                if (!account) {
                  return (
                    <div className="my-28">
                      <NonIdealState
                        heading="No wallet connected"
                        text="Connect your wallet to view your positions."
                        action={<ConnectWalletButton />}
                      />
                    </div>
                  );
                }
                if (chainId !== hyperdrive.chainId) {
                  return (
                    <div className="my-28">
                      <NonIdealState
                        heading="Wrong Network"
                        text="Please switch to the correct network to view your LP positions"
                        action={
                          <button
                            className="daisy-btn daisy-btn-warning rounded-full"
                            onClick={() =>
                              switchChain({ chainId: hyperdrive.chainId })
                            }
                          >
                            Switch Network
                          </button>
                        }
                      />
                    </div>
                  );
                }

                if (
                  lpSharesStatus === "loading" ||
                  withdrawalSharesStatus === "loading"
                ) {
                  return (
                    <LoadingState
                      heading="Loading your LP positions..."
                      text="Searching for LP events, calculating current value and PnL..."
                    />
                  );
                }

                if (
                  !withdrawalShares &&
                  !lpShares &&
                  lpSharesStatus === "success" &&
                  withdrawalSharesStatus === "success"
                ) {
                  if (marketState?.isPaused) {
                    return (
                      <div className="my-28">
                        <NonIdealState
                          heading="Market Paused"
                          text="This market is currently paused. You cannot open new positions but you may close existing ones."
                        />
                      </div>
                    );
                  }
                  return (
                    <div className="my-20">
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
                    </div>
                  );
                }

                return (
                  <div className="my-20 flex flex-col gap-6 md:flex-row">
                    <OpenLpSharesCard hyperdrive={hyperdrive} />{" "}
                    {withdrawalShares ? (
                      <OpenWithdrawalSharesCard hyperdrive={hyperdrive} />
                    ) : undefined}
                  </div>
                );
              })()}
            </>
          ) : (
            <ClosedLpTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}
