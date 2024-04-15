import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface AddLiquidityPreviewProps {
  hyperdrive: HyperdriveConfig;
  poolShareAfterDeposit: bigint | undefined;
  depositAmount: bigint | undefined;
  lpSharesOut: bigint | undefined;
  depositTokenDecimals: number;
  depositTokenPlaces: number;
  depositTokenSymbol: string;
}

export function AddLiquidityPreview({
  hyperdrive,
  poolShareAfterDeposit,
  depositAmount,
  depositTokenSymbol,
  depositTokenDecimals,
  depositTokenPlaces,
  lpSharesOut,
}: AddLiquidityPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="flex flex-col gap-3">
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
      <LabelValue
        label="You deposit"
        value={
          <p>
            {depositAmount
              ? `${formatBalance({
                  balance: depositAmount,
                  decimals: depositTokenDecimals,
                  places: depositTokenPlaces,
                })} ${depositTokenSymbol}`
              : "-"}
          </p>
        }
      />
      <LabelValue
        label="You receive"
        value={
          <p className="font-bold">
            {lpSharesOut
              ? `${formatBalance({
                  balance: lpSharesOut,
                  decimals: hyperdrive.decimals,
                  places: baseToken.places,
                })} ${baseToken.symbol}-LP`
              : "-"}
          </p>
        }
      />
    </div>
  );
}
