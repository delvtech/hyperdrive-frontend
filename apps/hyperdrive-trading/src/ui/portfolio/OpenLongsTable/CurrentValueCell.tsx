import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { Long } from "@hyperdrive/sdk";
import classNames from "classnames";
import { ReactElement } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

export function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  // TODO: This needs to be converted to baseAmount if called w/ asBase set to false
  const { amountOut: baseAmountOut, previewCloseLongStatus } =
    usePreviewCloseLong({
      hyperdriveAddress: hyperdrive.address,
      maturityTime: row.maturity,
      bondAmountIn: row.bondAmount,
      minOutput: parseUnits("0", baseToken.decimals),
      destination: account,
      asBase: baseToken.address !== ETH_MAGIC_NUMBER,
    });

  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: baseToken.decimals,
      places: 2,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="daisy-stat flex flex-row p-0 xl:flex-col">
      <span className="daisy-stat-value text-xs font-bold md:text-md">
        {currentValue?.toString()}
      </span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${formatBalance({
              balance: baseAmountOut - row.baseAmountPaid,
              decimals: baseToken.decimals,
              places: 4,
            })} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
