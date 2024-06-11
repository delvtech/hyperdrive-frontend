import { OpenShort } from "@delvtech/hyperdrive-viem";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { formatUnits } from "viem";

export function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const {
    amountOut: currentValueInBase,
    marketEstimate,
    previewCloseShortStatus,
    previewCloseShortError,
  } = usePreviewCloseShort({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
  });
  if (marketEstimate && currentValueInBase) {
    console.log("marketEstimate", formatUnits(marketEstimate, 18));
    console.log("preview amount out", formatUnits(currentValueInBase, 18));
  }

  const currentValueLabel = formatBalance({
    balance: currentValueInBase || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: (currentValueInBase || 0n) - openShort.baseAmountPaid,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    currentValueInBase && currentValueInBase > openShort.baseAmountPaid;

  const cellClassName = classNames("daisy-stat p-0", {
    "flex w-32 flex-col items-end": !isTailwindSmallScreen,
  });

  if (previewCloseShortStatus === "loading") {
    return (
      <div className={cellClassName}>
        <Skeleton width={100} />
      </div>
    );
  }

  return (
    <div className={cellClassName}>
      <span className="daisy-stat-value flex items-center gap-2 text-md font-bold">
        {/* warning icon with tooltip for liquidity issues
         TODO: Add "Current withdrawabale amount: xxx" to the tooltip once we
         have calcMaxCloseShort */}
        {previewCloseShortError ? (
          <span
            className="daisy-tooltip before:font-normal"
            data-tip="This position cannot be fully closed at this time"
          >
            <ExclamationTriangleIcon className="size-4 text-warning" />
          </span>
        ) : (
          ""
        )}{" "}
        {currentValueLabel}
      </span>

      {/* the current value of the user's position */}
      {currentValueInBase && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open, after closing fees."}
          className={classNames(
            "daisy-tooltip daisy-tooltip-left mt-1 flex text-xs before:border",
            {
              "text-success": isPositiveChangeInValue,
              "text-error": !isPositiveChangeInValue && profitLoss !== "-0",
            },
          )}
        >
          {/* the Profit/Loss badge indicator */}
          <span>{isPositiveChangeInValue ? "+" : ""}</span>
          {profitLoss
            ? `${profitLoss === "-0" ? "" : `${profitLoss} ${baseToken.symbol}`}`
            : undefined}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
