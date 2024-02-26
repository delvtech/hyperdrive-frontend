import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { calculateTotalValueFromPrice } from "src/base/calculateTotalValueFromPrice";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
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
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });

  const { proceeds: lpBaseWithdrawable, withdrawalShares } =
    usePreviewRemoveLiquidity({
      hyperdriveAddress: hyperdrive.address,
      lpSharesIn: lpShares,
      minOutputPerShare: 1n,
      destination: account,
    });

  const utilizationRatio =
    !!withdrawalShares && !!lpShares
      ? calculateRatio({
          a: withdrawalShares,
          b: lpShares,
          decimals: baseToken.decimals,
        })
      : 0n;
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
      <div className="flex h-full w-80 flex-col items-center justify-center gap-4">
        {lpShares !== 0n ? (
          <>
            <span className="daisy-card-title font-bold">LP Shares</span>
            <LabelValue
              label="Pool share"
              value={
                <p
                  className="daisy-tooltip inline-flex cursor-help items-center gap-1 border-b border-dashed border-current"
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
            <LabelValue
              label="Current value"
              value={
                <p>
                  {!!poolInfo && !!lpShares ? (
                    `${formatBalance({
                      balance: calculateTotalValueFromPrice({
                        amount: lpShares,
                        price: poolInfo.lpSharePrice,
                        decimals: baseToken.decimals,
                      }),
                      decimals: baseToken.decimals,
                      places: 4,
                    })} ${baseToken.symbol}`
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
                    className="daisy-tooltip mb-1 inline-flex cursor-help items-center border-b border-dashed border-current text-neutral-content"
                    data-tip="Your ratio of idle capital to capital being used to back Longs and Shorts."
                  >
                    Utilization ratio
                  </p>
                  <p>
                    {!!lpBaseWithdrawable && !!withdrawalShares ? (
                      `${dnum.format(
                        [utilizationRatio, baseToken.decimals],
                        2,
                      )}%`
                    ) : (
                      <Skeleton />
                    )}
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
                    +formatUnits(utilizationRatio, baseToken.decimals),
                    100,
                  )
                }
                max="100"
              ></progress>
            </div>

            <div className="daisy-card-actions mt-4 w-full">
              <Modal
                modalId={"withdrawalLpModal"}
                modalContent={
                  <RemoveLiquidityForm
                    hyperdrive={hyperdrive}
                    lpShares={lpShares || 0n}
                  />
                }
              >
                {({ showModal }) => (
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
                    onClick={showModal}
                  >
                    Remove liquidity
                  </button>
                )}
              </Modal>
              <p className="mt-2 text-center text-xs text-neutral-content">
                Liquidity is used to back open Long and Short positions. Any
                idle liquidity earns the yield source&apos;s variable rate.
              </p>
            </div>
          </>
        ) : (
          <NonIdealState
            heading="You have no LP positions"
            text="Add liquidity, switch wallets, or view your closed LP positions."
          />
        )}
      </div>
    </Well>
  );
}
