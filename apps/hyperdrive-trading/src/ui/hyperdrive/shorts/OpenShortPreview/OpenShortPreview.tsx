import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface OpenShortPreviewProps {
  market: HyperdriveConfig;
  costBasis?: bigint;
  shortSize?: bigint;
}

export function OpenShortPreview({
  market,
  costBasis,
  shortSize,
}: OpenShortPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: market.baseToken,
    tokens: appConfig.tokens,
  });
  const termLengthMS = Number(market.poolConfig.positionDuration * 1000n);
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="Short size"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="The amount of pool liquidity deposited into the yield source."
          >
            {shortSize
              ? `${formatBalance({
                  balance: shortSize,
                  decimals: baseToken.decimals,
                  places: 6,
                })} ${baseToken.symbol}`
              : `0` + ` ${baseToken.symbol}`}
          </span>
        }
      />
      <LabelValue
        label="You pay"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="The upfront cost to open a short."
          >
            {costBasis
              ? `${formatBalance({
                  balance: costBasis,
                  decimals: baseToken.decimals,
                  places: 6,
                })} ${baseToken.symbol}`
              : `0 ${baseToken.symbol}`}
          </span>
        }
      />

      <LabelValue
        label="Matures in"
        value={`${convertMillisecondsToDays(termLengthMS)} days, ${new Date(
          Date.now() + termLengthMS,
        ).toLocaleDateString()}`}
      />
    </div>
  );
}
