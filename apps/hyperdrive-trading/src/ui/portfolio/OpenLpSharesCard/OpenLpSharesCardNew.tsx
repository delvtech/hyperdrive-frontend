import { InboxIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
import { RemoveLiquidityFormNew } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityFormNew";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { NO_LP_SHARES_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface OpenLpSharesCardProps {
  hyperdrive: Hyperdrive;
}

export function OpenLpSharesCardNew({
  hyperdrive,
}: OpenLpSharesCardProps): ReactElement {
  const { address: account } = useAccount();
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });
  const { isFlagEnabled: showNewForm } = useFeatureFlag(
    NO_LP_SHARES_FEATURE_FLAG,
  );

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

  const poolShare =
    !!lpShares && !!lpSharesTotalSupply
      ? calculateRatio({
          a: lpShares,
          b: lpSharesTotalSupply,
          decimals: hyperdrive.baseToken.decimals,
        })
      : 0n;

  return (
    <div className="flex flex-col">
      {lpShares !== 0n ? (
        <div>
          <div className="daisy-stats daisy-stats-vertical bg-base-100">
            <div className="daisy-stat px-0">
              <div className="daisy-stat-title">Current value</div>
              <div className="daisy-stat-value">
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
              </div>
              <div className="daisy-stat-desc flex gap-2">
                <span>
                  LP Shares{" "}
                  {!!lpShares ? (
                    <span className="daisy-badge daisy-badge-ghost daisy-badge-neutral daisy-badge-xs">
                      {formatBalance({
                        balance: lpShares,
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })}
                    </span>
                  ) : (
                    <Skeleton />
                  )}
                </span>
                <span>
                  Pool share{" "}
                  <span className="daisy-badge daisy-badge-ghost daisy-badge-neutral daisy-badge-xs">
                    {!!lpShares && !!lpSharesTotalSupply ? (
                      `${dnum.format(
                        [poolShare, hyperdrive.baseToken.decimals],
                        6,
                      )}%`
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
                    showNewForm ? (
                      <RemoveLiquidityFormNew
                        hyperdrive={hyperdrive}
                        lpShares={lpShares || 0n}
                        onRemoveLiquidity={(e) => {
                          // preventDefault since we don't want to close the modal while the
                          // tx is temporarily pending the user's signature in their wallet.
                          e.preventDefault();
                        }}
                      />
                    ) : (
                      <RemoveLiquidityForm
                        hyperdrive={hyperdrive}
                        lpShares={lpShares || 0n}
                        onRemoveLiquidity={(e) => {
                          // preventDefault since we don't want to close the modal while the
                          // tx is temporarily pending the user's signature in their wallet.
                          e.preventDefault();
                        }}
                      />
                    )
                  }
                >
                  {({ showModal }) => (
                    <button
                      className="daisy-btn-neutral daisy-btn daisy-btn-wide daisy-btn-sm m-auto hover:daisy-btn-ghost"
                      onClick={showModal}
                    >
                      Remove liquidity
                    </button>
                  )}
                </Modal>
              </div>
            </div>
            <div className="daisy-stat px-0">
              <div className="daisy-stat-title">Utilization ratio</div>
              <div className="daisy-stat-value">
                {!!lpBaseWithdrawable && !!withdrawalSharesOut ? (
                  `${dnum.format(
                    [utilizationRatio, hyperdrive.baseToken.decimals],
                    2,
                  )}%`
                ) : (
                  <Skeleton />
                )}
              </div>
              <div className="daisy-stat-desc flex gap-2">
                <progress
                  className="daisy-progress mt-1"
                  value={
                    // Don't let the progress bar go over 100%
                    // TODO: This happens in negative interest scenarios (open a
                    // short for 10M bonds on the devnet, say) and we should
                    // remove this defensive coding once negative interest is
                    // fixed.
                    Math.min(
                      +formatUnits(
                        utilizationRatio,
                        hyperdrive.baseToken.decimals,
                      ),
                      100,
                    )
                  }
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <p className="text-center text-body">
              Note: When you withdraw liquidity, you get back{" "}
              {hyperdrive.baseToken.symbol} and withdrawal shares proportional
              to your utilization ratio.
            </p>
          </div>
        </div>
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
    dnum.divide([a, decimals], [b, decimals], decimals),
    dnum.from("100", decimals),
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
      modalContent={<AddLiquidityForm hyperdrive={hyperdrive} />}
    >
      {({ showModal }) => (
        <button
          className={classNames(
            "daisy-btn-neutral daisy-btn daisy-btn-sm  hover:daisy-btn-ghost",
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
