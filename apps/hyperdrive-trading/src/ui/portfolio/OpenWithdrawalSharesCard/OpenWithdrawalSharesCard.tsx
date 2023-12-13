import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { useAccount } from "wagmi";
import { calculateShareValue } from "./calculateShareValue";

interface LpPortfolioCardProps {
  hyperdrive: Hyperdrive;
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
            <div className="mb-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="">Shares balance</p>
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
              </div>
              <div className="flex justify-between">
                <p className="">Current value</p>
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
              </div>
              <div className="flex justify-between">
                <p className="">Withdrawable</p>
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
              </div>
            </div>
            <p className="text-center text-body">
              Note: Withdrawal shares are considered idle capital and are not
              used to back new positions. They continue to earn the variable
              rate from the yield source.
            </p>
            <div className="daisy-card-actions">
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
                    className="daisy-btn-neutral daisy-btn daisy-btn-wide m-auto mt-2 hover:daisy-btn-ghost"
                    onClick={showModal}
                  >
                    Claim withdrawal shares
                  </button>
                )}
              </Modal>
            </div>
          </div>
        ) : null}
      </div>
    </Well>
  );
}
