import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { calculateShareValue } from "src/ui/portfolio/OpenWithdrawalSharesCard/calculateShareValue";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: Hyperdrive;
}

export function OpenWithdrawalSharesCardNew({
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
    <div className="flex flex-col">
      {withdrawalShares !== 0n ? (
        <div className="daisy-stats daisy-stats-vertical bg-base-100">
          <div className="daisy-stat px-0">
            <div className="daisy-stat-title">Pending withdrawal</div>
            <div className="daisy-stat-value">
              {withdrawalSharesBaseWithdrawable !== undefined ? (
                `${formatBalance({
                  balance: withdrawalSharesBaseWithdrawable,
                  decimals: hyperdrive.baseToken.decimals,
                })} ${hyperdrive.baseToken.symbol}`
              ) : (
                <Skeleton />
              )}
            </div>

            <div className="daisy-stat-desc flex gap-2">
              <span>
                Remaining balance{" "}
                <span className="daisy-badge daisy-badge-ghost daisy-badge-neutral daisy-badge-xs">
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
                </span>
              </span>
            </div>
            <div className="daisy-stat-actions">
              <Modal
                modalId={"withdrawalLpModal"}
                modalContent={
                  <RedeemWithdrawalSharesForm
                    hyperdrive={hyperdrive}
                    withdrawalShares={withdrawalShares || 0n}
                  />
                }
              >
                {({ showModal }) => (
                  <button
                    className="daisy-btn-neutral daisy-btn-outline daisy-btn daisy-btn-wide daisy-btn-sm m-auto hover:daisy-btn-ghost"
                    onClick={showModal}
                  >
                    Claim funds
                  </button>
                )}
              </Modal>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
