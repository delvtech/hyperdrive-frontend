import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import {
  calculateShareValue,
  calculateShareValueFromPreview,
} from "@hyperdrive/sdk";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/lp/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenWithdrawalSharesCard({
  hyperdrive,
}: LpPortfolioCardProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const {
    baseAmountOut: withdrawalSharesBaseWithdrawable,
    sharesRedeemed: withdrawalSharesRedeemable,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: withdrawalShares,
    minBaseAmountOutPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  return (
    <Well elevation="flat">
      <div className="flex h-full w-80 flex-col items-center gap-4">
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
                        decimals: baseToken.decimals,
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
                      withdrawalSharesBaseWithdrawable !== undefined &&
                      withdrawalSharesRedeemable !== undefined &&
                      withdrawalSharesRedeemable > 0 ? (
                        `${formatBalance({
                          balance: calculateShareValueFromPreview({
                            amount: withdrawalShares,
                            sharesIn: withdrawalSharesRedeemable,
                            baseOut: withdrawalSharesBaseWithdrawable,
                            decimals: baseToken.decimals,
                          }),
                          decimals: baseToken.decimals,
                          places: 4,
                        })} ${baseToken.symbol}`
                      ) : (
                        `${formatBalance({
                          balance: calculateShareValue({
                            amount: withdrawalShares,
                            price: poolInfo.lpSharePrice,
                            decimals: baseToken.decimals,
                          }),
                          decimals: baseToken.decimals,
                          places: 4,
                        })} ${baseToken.symbol}`
                      )
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                }
              />
              <LabelValue
                label="Withdrawable"
                value={
                  <p>
                    {withdrawalSharesBaseWithdrawable !== undefined ? (
                      `${formatBalance({
                        balance: withdrawalSharesBaseWithdrawable,
                        decimals: baseToken.decimals,
                        places: 4,
                      })} ${baseToken.symbol}`
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                }
              />
            </div>
            <div className="daisy-card-actions">
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
                    className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
                    onClick={showModal}
                  >
                    Claim withdrawal shares
                  </button>
                )}
              </Modal>
              <p className="mt-2 text-center text-xs text-neutral-content">
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
