import { Long } from "@delvtech/hyperdrive-viem";
import {
  HyperdriveConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { useConvertStethSharesToStethTokens } from "src/ui/vaults/steth/useConvertStethSharesToStethTokens";
import { getIsSteth } from "src/vaults/isSteth";
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
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  // steth markets can only close you out to steth shares, which must be
  // converted into steth tokens, which are 1:1 with eth
  const isStethHyperdrive = getIsSteth(sharesToken);
  const { amountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
    minOutput: parseUnits("0", baseToken.decimals),
    destination: account,
    // You can only withdraw as base if it's not a steth hyperdrive
    asBase: !isStethHyperdrive,
  });

  // Steth tokens are 1:1 with eth so they can be used interchangeably with the
  // base token
  const { stethTokenAmount: stethTokenAmountOut } =
    useConvertStethSharesToStethTokens({
      lidoAddress: sharesToken.address,
      stethShares: amountOut,
      enabled: isStethHyperdrive,
    });
  const amountOutOrStethTokens = isStethHyperdrive
    ? stethTokenAmountOut
    : amountOut;

  const currentValueLabel = formatBalance({
    balance: amountOutOrStethTokens || 0n,
    decimals: baseToken.decimals,
    places: 4,
  });

  const isPositiveChangeInValue =
    amountOutOrStethTokens && amountOutOrStethTokens > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="daisy-stat flex flex-row p-0 xl:flex-col">
      <span className="daisy-stat-value text-xs font-bold md:text-md">
        {currentValueLabel}
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
        {amountOutOrStethTokens
          ? `${formatBalance({
              balance: amountOutOrStethTokens - row.baseAmountPaid,
              decimals: baseToken.decimals,
              places: 4,
            })} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
