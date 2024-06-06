import { Long } from "@delvtech/hyperdrive-viem";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";

export function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const {
    amountOut: sharesAmountOut,
    previewCloseLongStatus,
    previewCloseLongError,
  } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
    // Not all hyperdrives can close to base, but they can all close to
    // shares! To make this component easy, we'll always preview to shares
    // then do the conversion to base ourselves.
    asBase: false,
  });

  // To get the base value of the shares, just do a simple conversion
  const amountOutInBase = convertSharesToBase({
    decimals: hyperdrive.decimals,
    sharesAmount: sharesAmountOut,
    vaultSharePrice: poolInfo?.vaultSharePrice,
  });

  const currentValueLabel = formatBalance({
    balance: amountOutInBase || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: amountOutInBase - row.baseAmountPaid,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    amountOutInBase && amountOutInBase > row.baseAmountPaid;

  const cellClassName = classNames("daisy-stat flex flex-row p-0 xl:flex-col", {
    "flex w-32 flex-col items-end": !isTailwindSmallScreen,
  });

  if (previewCloseLongStatus === "loading") {
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
         have calcMaxCloseLong */}
        {previewCloseLongError ? (
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
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {amountOutInBase
          ? `${profitLoss === "-0" ? "0" : profitLoss} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
