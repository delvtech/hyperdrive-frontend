import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  type EmptyExtensions,
  type HyperdriveConfig,
  type TokenConfig,
  type YieldSourceExtensions,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import type { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { useUtilizationRatio } from "src/ui/hyperdrive/lp/hooks/useUtilizationRatio";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface OpenLpSharesCardProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenLpSharesCard({
  hyperdrive,
}: OpenLpSharesCardProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { lpShares, lpSharesStatus } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });

  const subHeading = getSubHeadingLabel(baseToken, hyperdrive, sharesToken);
  const { baseAmountPaid, baseValue, openLpPositionStatus } = useOpenLpPosition(
    {
      hyperdriveAddress: hyperdrive.address,
      account,
    },
  );

  const isFetchingLpShares =
    lpSharesStatus === "loading" || openLpPositionStatus === "loading";
  const profit = baseValue - baseAmountPaid;
  const isPositiveChangeInValue = profit > 0n;
  const formattedProfit = formatBalance({
    balance: profit,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const utilizationRatio = useUtilizationRatio({
    hyperdrive,
    account,
  });

  const poolShare =
    !!lpShares && !!lpSharesTotalSupply
      ? calculateRatio({
          a: lpShares,
          b: lpSharesTotalSupply,
          decimals: baseToken.decimals,
        })
      : 0n;

  return (
    <Well elevation="flat">
      <div className="flex h-full w-80 flex-col justify-center gap-4">
        {lpShares !== 0n ? (
          <>
            <span className="daisy-card-title mt-2 font-bold">
              Your Liquidity
            </span>
            <LabelValue
              label={`${baseToken.symbol}-LP Shares`}
              value={
                <p>
                  {lpShares !== undefined ? (
                    formatBalance({
                      balance: lpShares || 0n,
                      decimals: hyperdrive.decimals,
                      places: baseToken.places,
                    })
                  ) : (
                    <Skeleton />
                  )}
                </p>
              }
            />
            <LabelValue
              label="Current Value"
              value={
                <p>
                  {!!poolInfo && !!lpShares ? (
                    `${formatBalance({
                      balance: baseValue,
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
              label="Profit/Loss"
              value={
                <div
                  data-tip={
                    "Profit or loss on your LP position since you opened it."
                  }
                  className={classNames(
                    "daisy-tooltip flex cursor-help items-center border-current border-b border-dashed before:border",
                    { "text-success": isPositiveChangeInValue },
                    {
                      "text-error":
                        !isPositiveChangeInValue &&
                        formattedProfit !== "-0" &&
                        !isFetchingLpShares,
                    },
                  )}
                >
                  {isPositiveChangeInValue ? "+" : ""}
                  {/* format balance could return -0 if the bigint value is a small negative number */}
                  {formattedProfit === "-0" ? "0" : formattedProfit}{" "}
                  {baseToken.symbol}
                </div>
              }
            />
            <h6 className="mt-4 font-medium text-gray-50">Pool Metrics</h6>

            <LabelValue
              label="Pool Share"
              value={
                <p
                  className="daisy-tooltip inline-flex cursor-help items-center gap-1 border-current border-b border-dashed before:border"
                  data-tip="Your share of the total liquidity in the pool"
                >
                  {!!lpShares && !!lpSharesTotalSupply ? (
                    `${dnum.format([poolShare, baseToken.decimals], 6)}%`
                  ) : (
                    <Skeleton />
                  )}
                </p>
              }
            />
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p
                    className="daisy-tooltip mb-1 inline-flex cursor-help items-center border-current border-b border-dashed text-neutral-content before:border"
                    data-tip="Your ratio of idle capital to capital being used to back Longs and Shorts."
                  >
                    Utilization Ratio
                  </p>
                  <p>
                    {utilizationRatio
                      ? `${dnum.format(
                          [utilizationRatio, baseToken.decimals],
                          2,
                        )}%`
                      : "0%"}
                  </p>
                </div>
              </div>
              <progress
                className="daisy-progress"
                value={
                  // Don't let the progress bar go over 100%
                  // TODO: This happens in negative interest scenarios (open a
                  // short for 10M bonds on the devnet, say) and we should
                  // remove this defensive coding once negative interest is
                  // fixed.
                  Math.min(
                    +formatUnits(utilizationRatio || 0n, baseToken.decimals),
                    100,
                  )
                }
                max="100"
              />
            </div>
            <div className="daisy-card-actions mt-4 w-full">
              <Modal
                modalId="withdrawalLpModal"
                modalHeader={
                  <ModalHeader
                    heading="Remove Liquidity"
                    subHeading={subHeading}
                  />
                }
                modalContent={
                  <div>
                    <button
                      className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute top-4 right-4"
                      onClick={() => (window as any).withdrawalLpModal.close()}
                    >
                      <XMarkIcon className="w-6 " title="Close" />
                    </button>
                    <RemoveLiquidityForm
                      hyperdrive={hyperdrive}
                      lpShares={lpShares || 0n}
                    />
                  </div>
                }
              >
                {({ showModal }) => (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
                    onClick={() => {
                      return showModal();
                    }}
                  >
                    Remove liquidity
                  </button>
                )}
              </Modal>
              <p className="mt-2 text-center text-neutral-content text-xs">
                Liquidity is used to back open Long and Short positions. Any
                idle liquidity earns the Yield Source APY.
              </p>
            </div>
          </>
        ) : (
          <NonIdealState
            heading="You have no LP positions"
            text="Add liquidity, switch wallets, or view your closed LP positions"
          />
        )}
      </div>
    </Well>
  );
}

function getSubHeadingLabel(
  baseToken: TokenConfig<EmptyExtensions>,
  hyperdrive: HyperdriveConfig,
  sharesToken: TokenConfig<YieldSourceExtensions>,
) {
  if (
    hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
    hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled
  ) {
    return `Redeem your LP shares for ${baseToken.symbol} or ${sharesToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    return `Redeem your LP shares for ${baseToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    return `Redeem your LP shares for ${sharesToken.symbol}`;
  }

  // This should never happen and is just to prevent typescript from complaining
  throw new Error("Cannot create subheading label");
}
