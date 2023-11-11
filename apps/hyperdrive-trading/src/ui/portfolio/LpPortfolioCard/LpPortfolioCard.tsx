import { InboxIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { formatRate } from "src/base/formatRate";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: Hyperdrive;
}

export function LpPortfolioCard({
  hyperdrive,
}: LpPortfolioCardProps): ReactElement {
  const { address: account } = useAccount();
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });

  const { baseAmountOut: lpBaseWithdrawable, withdrawalSharesOut } =
    usePreviewRemoveLiquidity({
      market: hyperdrive,
      lpSharesIn: lpShares,
      minBaseAmountOut: 1n,
      destination: account,
    });

  const utilizationRatio =
    !!withdrawalSharesOut && !!lpBaseWithdrawable
      ? calculateRatio({
          a: withdrawalSharesOut,
          b: lpBaseWithdrawable,
          decimals: hyperdrive.baseToken.decimals,
        })
      : 0n;

  return (
    <Well>
      <div className="flex w-80 flex-col gap-4">
        <span className="text-h6 font-bold">LP Shares</span>
        {lpShares !== 0n ? (
          <>
            <div className="mb-4 flex flex-col gap-2">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p
                    className="daisy-tooltip inline-flex cursor-help items-center gap-1 border-b border-dashed border-current"
                    data-tip="Your share of the total liquidity in the pool"
                  >
                    Pool share
                  </p>
                  <p>
                    {!!lpShares && !!lpSharesTotalSupply ? (
                      `${formatRate(
                        calculateRatio({
                          a: lpShares,
                          b: lpSharesTotalSupply,
                          decimals: hyperdrive.baseToken.decimals,
                        }),
                        hyperdrive.baseToken.decimals,
                      )}%`
                    ) : (
                      <Skeleton />
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="">LP balance</p>
                  <p className="">
                    {!lpShares ? (
                      <Skeleton />
                    ) : (
                      formatBalance({
                        balance: lpShares,
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })
                    )}{" "}
                    Shares
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="">Current value</p>
                  <p className="font-bold">
                    {!!poolInfo && !!lpShares ? (
                      `${formatBalance({
                        balance: calculateLpValue({
                          lpShares,
                          lpSharePrice: poolInfo.lpSharePrice,
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
              </div>
              <div className="mt-4 flex flex-col">
                <div className="flex justify-between">
                  <p
                    className="daisy-tooltip mb-1 inline-flex cursor-help items-center border-b border-dashed border-current"
                    data-tip="Your ratio of idle capital to capital being used to back Longs and Shorts."
                  >
                    Utilization ratio
                  </p>
                  <p>
                    {!!lpBaseWithdrawable && !!withdrawalSharesOut ? (
                      `${formatRate(
                        utilizationRatio,
                        hyperdrive.baseToken.decimals,
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
                  Math.min(
                    +formatUnits(
                      utilizationRatio,
                      hyperdrive.baseToken.decimals,
                    ) * 100,
                    100,
                  )
                }
                max="100"
              ></progress>
              <p className="text-center text-body">
                Note: When you withdraw liquidity, you get back{" "}
                {hyperdrive.baseToken.symbol} and withdrawal shares proportional
                to your utilization ratio.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex gap-1">
                <DepositButton
                  hyperdrive={hyperdrive}
                  className="rounded-l-md rounded-r-none"
                />
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
                      className="daisy-btn-neutral daisy-btn-sm daisy-btn rounded-l-none rounded-r-md hover:daisy-btn-ghost"
                      onClick={showModal}
                    >
                      Withdraw
                    </button>
                  )}
                </Modal>
              </div>
            </div>
          </>
        ) : (
          <NonIdealState
            icon={<InboxIcon className="h-16" />}
            heading="No LP shares found."
            text="Add liquidity to receive LP shares."
            action={
              <DepositButton hyperdrive={hyperdrive} label="Add liquidity" />
            }
          />
        )}
      </div>
    </Well>
  );
}

function calculateLpValue({
  lpShares,
  lpSharePrice,
  decimals,
}: {
  lpShares: bigint;
  lpSharePrice: bigint;
  decimals: number;
}) {
  return dnum.multiply(
    [lpShares, decimals],
    [lpSharePrice, decimals],
    decimals,
  )[0];
}

function calculateRatio({
  a,
  b,
  decimals,
}: {
  a: bigint;
  b: bigint;
  decimals: number;
}) {
  return dnum.multiply(
    dnum.divide([a, decimals], [b, decimals]),
    dnum.from("100", decimals),
    decimals,
  )[0];
}

function DepositButton({
  hyperdrive,
  label = "Deposit",
  className,
}: {
  hyperdrive: Hyperdrive;
  label?: string;
  className?: string;
}) {
  return (
    <Modal
      modalId={"depositLpModal"}
      modalContent={<AddLiquidityForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <button
          className={classNames(
            "daisy-btn-neutral daisy-btn-sm daisy-btn  hover:daisy-btn-ghost",
            className,
          )}
          onClick={showModal}
        >
          {label}
        </button>
      )}
    </Modal>
  );
}
