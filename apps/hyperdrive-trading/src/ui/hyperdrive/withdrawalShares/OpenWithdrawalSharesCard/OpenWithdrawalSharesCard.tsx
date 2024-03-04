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
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/withdrawalShares/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
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
    proceeds: baseProceedsFromPreviewRedeemWithdrawalShares,
    withdrawalSharesRedeemed:
      withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: withdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    baseTokenDecimals: baseToken.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares,
    baseProceedsFromPreviewRedeemWithdrawalShares,
    withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares,
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
                    {withdrawalSharesCurrentValue ? (
                      `${formatBalance({
                        balance: withdrawalSharesCurrentValue,
                        decimals: baseToken.decimals,
                        places: 4,
                      })} ${baseToken.symbol}`
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
                    {baseProceedsFromPreviewRedeemWithdrawalShares !==
                    undefined ? (
                      `${formatBalance({
                        balance: baseProceedsFromPreviewRedeemWithdrawalShares,
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
                    disabled={!baseProceedsFromPreviewRedeemWithdrawalShares}
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

function getWithdrawalSharesCurrentValue({
  lpSharePrice,
  baseTokenDecimals,
  withdrawalShares,
  withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares,
  baseProceedsFromPreviewRedeemWithdrawalShares,
}: {
  lpSharePrice: bigint | undefined;
  baseTokenDecimals: number;
  withdrawalShares: bigint | undefined;
  baseProceedsFromPreviewRedeemWithdrawalShares: bigint | undefined;
  withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares: bigint | undefined;
}): bigint | undefined {
  if (lpSharePrice === undefined || withdrawalShares === undefined) {
    return;
  }

  // Get a more accurate estimate from previewing the redeem withdrawal shares
  // and basing the current value of all of your withdrawal shares on actual
  // redemption data.
  if (
    baseProceedsFromPreviewRedeemWithdrawalShares !== undefined &&
    withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares
  ) {
    return calculateEquivalentShareValue({
      targetShares: withdrawalShares,
      referenceShares:
        withdrawalSharesRedeemedFromPreviewRedeemWithdrawalShares,
      totalReferenceValue: baseProceedsFromPreviewRedeemWithdrawalShares,
      decimals: baseTokenDecimals,
    });
  }

  // If withdrawal shares are not yet redeemable, we should just treat
  // them as the same value as lp shares.
  return calculateValueFromPrice({
    amount: withdrawalShares,
    unitPrice: lpSharePrice,
    decimals: baseTokenDecimals,
  });
}
