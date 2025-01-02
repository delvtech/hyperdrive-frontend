import {
  appConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useEstimateShortMarketValue } from "src/ui/hyperdrive/shorts/hooks/useEstimateShortMarketValue";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";

export function CurrentShortsValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();

  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const {
    amountOut: currentValueInBase,
    previewCloseShortStatus,
    previewCloseShortError,
  } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
  });

  const { marketEstimate } = useEstimateShortMarketValue({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
  });

  const currentValueLabel = formatBalance({
    balance: currentValueInBase || marketEstimate || 0n,
    decimals: hyperdrive.decimals,
    places: baseToken.places,
  });

  const profitLossAsBigInt =
    (currentValueInBase || 0n) - openShort.baseAmountPaid;

  const profitLoss = formatBalance({
    balance: profitLossAsBigInt,
    decimals: hyperdrive.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue = profitLossAsBigInt > 0n;

  if (previewCloseShortStatus === "loading") {
    return (
      <div
        className={classNames("daisy-stat p-0", {
          "flex w-32 flex-col items-end": !isTailwindSmallScreen,
        })}
      >
        <Skeleton width={100} />
      </div>
    );
  }

  return (
    <div className={"flex items-center gap-2"}>
      <span className="flex items-center gap-2 text-md">
        {previewCloseShortError ? (
          <Tooltip
            className="before:z-10 before:text-start before:font-inter"
            tooltip="This position cannot be fully closed at this time"
          >
            <ExclamationTriangleIcon className="size-4 text-warning" />
          </Tooltip>
        ) : (
          ""
        )}{" "}
        {currentValueLabel}
      </span>
      <Tooltip
        tooltip={"Profit/Loss since open, after closing fees."}
        className={classNames("text-xs before:z-10 before:font-inter", {
          "rounded-md border border-success/20 bg-success/20 px-1 text-success":
            isPositiveChangeInValue,
          "rounded-md border border-error/20 bg-error/20 px-1 text-error":
            !isPositiveChangeInValue && profitLoss !== "-0",
        })}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {profitLoss}
      </Tooltip>
    </div>
  );
}
