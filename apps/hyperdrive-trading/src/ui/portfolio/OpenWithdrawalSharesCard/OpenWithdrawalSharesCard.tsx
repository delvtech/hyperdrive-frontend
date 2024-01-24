import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { calculateShareValue } from "src/ui/portfolio/OpenWithdrawalSharesCard/calculateShareValue";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenWithdrawalSharesCard({
  hyperdrive,
}: LpPortfolioCardProps): ReactElement {
  const { address: account } = useAccount();
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const { baseAmountOut: withdrawalSharesBaseWithdrawable } =
    usePreviewRedeemWithdrawalShares({
      market: hyperdrive,
      withdrawalSharesIn: withdrawalShares,
      minBaseAmountOutPerShare: 1n, // TODO: slippage,
      destination: account,
    });

  return (
    <Well elevation="flat">
      <div className="flex h-full w-80 flex-col justify-between gap-4">
        <span className="daisy-card-title font-bold">Withdrawal Shares</span>
        {withdrawalShares !== 0n ? (
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 flex flex-col gap-3">
              <LabelValue
                label="Shares balance"
                value={
                  <p>
                    {!withdrawalShares ? (
                      <Skeleton />
                    ) : (
                      formatBalance({
                        balance: withdrawalShares,
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })
                    )}{" "}
                    Shares
                  </p>
                }
              />
              <LabelValue
                label="Current value"
                value={
                  <p>
                    {!!poolInfo && !!withdrawalShares ? (
                      `${formatBalance({
                        balance: calculateShareValue({
                          amount: withdrawalShares,
                          price: poolInfo.lpSharePrice,
                          decimals: hyperdrive.baseToken.decimals,
                        }),
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })} ${hyperdrive.baseToken.symbol}`
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                }
              />
              <LabelValue
                label="Withdrawable"
                value={
                  <p className="font-bold">
                    {withdrawalSharesBaseWithdrawable !== undefined ? (
                      `${formatBalance({
                        balance: withdrawalSharesBaseWithdrawable,
                        decimals: hyperdrive.baseToken.decimals,
                      })} ${hyperdrive.baseToken.symbol}`
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                }
              />
            </div>
            <div className="daisy-card-actions w-full gap-6">
              <Modal
                modalId="withdrawalLpModal"
                modalContent={
                  <RedeemWithdrawalSharesForm
                    hyperdrive={hyperdrive}
                    withdrawalShares={withdrawalShares || 0n}
                  />
                }
              >
                {({ showModal }) => (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary mt-2 w-full hover:daisy-btn-ghost"
                    onClick={showModal}
                  >
                    Claim withdrawal shares
                  </button>
                )}
              </Modal>
              <p className="text-center text-sm text-neutral-content">
                Note: Withdrawal shares are considered idle capital and are not
                used to back new positions. They continue to earn the variable
                rate from the yield source.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </Well>
  );
}
