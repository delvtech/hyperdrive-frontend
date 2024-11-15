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
          <span
            className="daisy-tooltip before:z-10 before:border before:font-inter"
            data-tip="This position cannot be fully closed at this time"
          >
            <ExclamationTriangleIcon className="size-4 text-warning" />
          </span>
        ) : (
          ""
        )}{" "}
        {currentValueLabel}
      </span>
      <div
        data-tip={"Profit/Loss since open, after closing fees."}
        className={classNames(
          "daisy-tooltip daisy-tooltip-left flex text-xs before:border before:font-inter",
          {
            "rounded-md border border-success/20 bg-success/20 px-1 text-success":
              isPositiveChangeInValue,
            "rounded-md border border-error/20 bg-error/20 px-1 text-error":
              !isPositiveChangeInValue && profitLoss !== "-0",
          },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {profitLoss}
      </div>
    </div>
  );
}
