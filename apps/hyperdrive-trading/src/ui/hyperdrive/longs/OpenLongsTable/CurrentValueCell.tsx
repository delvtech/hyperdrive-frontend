import { Long } from "@delvtech/hyperdrive-viem";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
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
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const {
    amountOut: baseAmountOut,
    previewCloseLongStatus,
    previewCloseLongError,
  } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
  });

  const currentValueLabel = formatBalance({
    balance: baseAmountOut || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: (baseAmountOut || 0n) - row.baseAmountPaid,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;

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
        {baseAmountOut
          ? `${profitLoss === "-0" ? "0" : profitLoss} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
export function CurrentValueCellTwo({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });

  const {
    amountOut: baseAmountOut,
    previewCloseLongStatus,
    previewCloseLongError,
  } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
  });

  const currentValueLabel = formatBalance({
    balance: baseAmountOut || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: (baseAmountOut || 0n) - row.baseAmountPaid,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;

  if (previewCloseLongStatus === "loading") {
    return (
      <div className={"flex"}>
        <Skeleton width={100} />
      </div>
    );
  }

  return (
    <div className={"flex items-center gap-2"}>
      <span className="flex items-center gap-2 text-md">
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
          "daisy-tooltip daisy-tooltip-left flex text-xs before:border",
          {
            "rounded-md border-[1px] border-success/20 bg-success/20 px-1 py-[1px] text-success":
              isPositiveChangeInValue,
            "rounded-md border-[1px] border-error/20 bg-error/20 px-1 py-[1px] text-error":
              !isPositiveChangeInValue && profitLoss !== "-0",
          },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${profitLoss === "-0" ? "0" : profitLoss} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
