import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
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
  addLiquidityPreviewStatus: "error" | "idle" | "loading" | "success";
}

export function AddLiquidityPreview({
  hyperdrive,
  poolShareAfterDeposit,
  depositAmount,
  depositTokenSymbol,
  depositTokenDecimals,
  depositTokenPlaces,
  lpSharesOut,
  addLiquidityPreviewStatus,
}: AddLiquidityPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="flex flex-col gap-3.5 px-2">
      <LabelValue
        label="Your pool share"
        tooltipContent="Your share of the total liquidity in the pool"
        tooltipPosition="right"
        tooltipSize="small"
        value={
          addLiquidityPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames({
                "text-base-content/80": !poolShareAfterDeposit,
              })}
            >
              {poolShareAfterDeposit
                ? `${dnum.format(
                    [poolShareAfterDeposit, hyperdrive.decimals],
                    4,
                  )}%`
                : "-"}
            </span>
          )
        }
      />
      <LabelValue
        label="You deposit"
        value={
          <p
            className={classNames({
              "text-base-content/80": !depositAmount,
            })}
          >
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
          addLiquidityPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <p
              className={classNames({
                "text-base-content/80": !lpSharesOut,
                "font-bold": lpSharesOut,
              })}
            >
              {lpSharesOut
                ? `${formatBalance({
                    balance: lpSharesOut,
                    decimals: hyperdrive.decimals,
                    places: baseToken.places,
                  })} ${baseToken.symbol}-LP`
                : "-"}
            </p>
          )
        }
      />
    </div>
  );
}
