import { HyperdriveConfig, getBaseToken } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { getWithdrawalSharesCurrentValue } from "src/ui/hyperdrive/withdrawalShares/getWithdrawalSharesCurrentValue";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/withdrawalShares/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenWithdrawalSharesCard({
  hyperdrive,
}: LpPortfolioCardProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    decimals: hyperdrive.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares: balanceOfWithdrawalShares,
    baseProceedsFromPreview,
    withdrawalSharesRedeemedFromPreview,
  });

  return (
    <Well elevation="flat">
      <div className="flex h-full w-80 flex-col items-center gap-4">
        <span className="daisy-card-title font-bold">
          Queued for Withdrawal
        </span>
        {balanceOfWithdrawalShares !== 0n ? (
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 flex flex-col gap-3">
              <LabelValue
                label="Total"
                value={
                  <p>
                    {withdrawalSharesCurrentValue ? (
                      `${formatBalance({
                        balance: withdrawalSharesCurrentValue,
                        decimals: baseToken.decimals,
                        places: baseToken.places,
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
                    {baseProceedsFromPreview !== undefined ? (
                      `${formatBalance({
                        balance: baseProceedsFromPreview,
                        decimals: baseToken.decimals,
                        places: baseToken.places,
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
                modalId="redeemWithdrawalShares"
                modalHeader={
                  <ModalHeader
                    heading="Confirm Withdraw"
                    subHeading={
                      "Remove liquidity that is queued for withdrawal"
                    }
                  />
                }
                modalContent={
                  <RedeemWithdrawalSharesForm hyperdrive={hyperdrive} />
                }
              >
                {({ showModal }) => (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
                    disabled={!baseProceedsFromPreview}
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
