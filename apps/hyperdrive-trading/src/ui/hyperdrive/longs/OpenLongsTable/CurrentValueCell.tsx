import {
  HyperdriveConfig,
  appConfig,
  getBaseToken,
} from "@delvtech/hyperdrive-appconfig";
import { OpenLongPositionReceived } from "@delvtech/hyperdrive-js";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";

export function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: OpenLongPositionReceived;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const {
    amountOut: baseAmountOut,
    previewCloseLongStatus,
    previewCloseLongError,
  } = usePreviewCloseLong({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.details?.bondAmount || 0n,
  });

  const currentValueLabel = formatBalance({
    balance: baseAmountOut || 0n,
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const profitLoss = formatBalance({
    balance: (baseAmountOut || 0n) - (row.details?.baseAmountPaid || 0n),
    decimals: baseToken.decimals,
    places: baseToken.places,
  });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > (row.details?.baseAmountPaid || 0n);

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
        {baseAmountOut
          ? `${profitLoss === "-0" ? "0" : profitLoss}`
          : undefined}
      </div>
    </div>
  );
}
