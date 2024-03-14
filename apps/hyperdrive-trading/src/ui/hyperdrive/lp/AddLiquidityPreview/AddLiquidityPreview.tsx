import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface AddLiquidityPreviewProps {
  hyperdrive: HyperdriveConfig;
  lpSharesOut: bigint | undefined;
  slippagePaid: bigint | undefined;
  poolShareAfterDeposit: bigint | undefined;
  depositAmount: bigint | undefined;
  depositTokenDecimals: number;
  depositTokenSymbol: string;
}

export function AddLiquidityPreview({
  hyperdrive,
  lpSharesOut,
  poolShareAfterDeposit,
  depositAmount,
  depositTokenSymbol,
  depositTokenDecimals,
  slippagePaid,
}: AddLiquidityPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="You deposit"
        value={
          <p className="font-bold">
            {depositAmount
              ? `${formatBalance({
                  balance: depositAmount,
                  decimals: depositTokenDecimals,
                  places: 4,
                })} ${depositTokenSymbol}`
              : "-"}
          </p>
        }
      />
      <LabelValue
        label="Slippage paid"
        value={
          <span
            className={classNames(
              "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
              { "border-b border-dashed border-current": slippagePaid },
            )}
            data-tip="Slippage paid for adding liquidity"
          >
            {slippagePaid
              ? `${formatBalance({
                  balance: slippagePaid,
                  decimals: depositTokenDecimals,
                  places: 4,
                })} ${depositTokenSymbol}`
              : "-"}
          </span>
        }
      />
      <LabelValue
        label="Your pool share"
        value={
          <span
            className={classNames(
              "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
              {
                "border-b border-dashed border-current": poolShareAfterDeposit,
              },
            )}
            data-tip="Your share of the total liquidity in the pool"
          >
            {poolShareAfterDeposit
              ? `${dnum.format(
                  [poolShareAfterDeposit, hyperdrive.decimals],
                  4,
                )}%`
              : "-"}
          </span>
        }
      />
    </div>
  );
}
