import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { calculateEquivalentShareValue } from "src/hyperdrive/calculateEquivalentShareValue";
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
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { withdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const {
    proceeds: withdrawalSharesBaseWithdrawable,
    withdrawalSharesRedeemed: withdrawalSharesRedeemable,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: withdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  return (
    <Well elevation="flat">
      <div className="flex h-full w-80 flex-col items-center gap-4">
        <span className="daisy-card-title font-bold">
          Queued for Withdrawal
        </span>
        {withdrawalShares !== 0n ? (
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 flex flex-col gap-3">
              <LabelValue
                label="Current value"
                value={
                  <p>
                    {!!poolInfo && !!withdrawalShares ? (
                      withdrawalSharesBaseWithdrawable !== undefined &&
                      withdrawalSharesRedeemable !== undefined &&
                      withdrawalSharesRedeemable > 0 ? (
                        `${formatBalance({
                          balance: calculateEquivalentShareValue({
                            targetShares: withdrawalShares,
                            referenceShares: withdrawalSharesRedeemable,
                            totalReferenceValue:
                              withdrawalSharesBaseWithdrawable,
                            decimals: baseToken.decimals,
                          }),
                          decimals: baseToken.decimals,
                          places: 4,
                        })} ${baseToken.symbol}`
                      ) : (
                        `${formatBalance({
                          balance: calculateValueFromPrice({
                            amount: withdrawalShares,
                            unitPrice: poolInfo.lpSharePrice,
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
                    Redeem
                  </button>
                )}
              </Modal>
              <p className="mt-2 text-center text-xs text-neutral-content">
                Note: Liquidity that is queued for withdraw is considered idle
                capital and is not used to back new positions. It continues to
                earn the yield source APY.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </Well>
  );
}
