import { HyperdriveConfig, getBaseToken } from "@delvtech/hyperdrive-appconfig";
import { OpenLongPositionReceived } from "@delvtech/hyperdrive-js";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";

export function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: OpenLongPositionReceived;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
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
    tokenOutAddress: baseToken.address,
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
          <Tooltip
            className="before:z-10 before:font-inter"
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
        tooltip="Profit/Loss since open, after closing fees."
        className={classNames("text-xs before:font-inter", {
          "rounded-md border border-success/20 bg-success/20 px-1 text-success":
            isPositiveChangeInValue,
          "rounded-md border border-error/20 bg-error/20 px-1 text-error":
            !isPositiveChangeInValue && profitLoss !== "-0",
        })}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${profitLoss === "-0" ? "0" : profitLoss}`
          : undefined}
      </Tooltip>
    </div>
  );
}
