import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { calculateFixedRateFromOpenLong, Long } from "@hyperdrive/sdk";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";

interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
}

export function OpenLongPreview({
  hyperdrive,
  long,
}: OpenLongPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { poolConfig } = usePoolConfig(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive.address);
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const numDays = convertMillisecondsToDays(termLengthMS);
  // The pool's curve fee is applied to the fixed rate, so if the fixed rate is
  // 4.5%, the effective fixed rate is 4%, then the pool fee is .45%.
  const poolFee = dnum.mul(
    [poolConfig?.fees.curve || 0n, 18],
    [fixedAPR?.apr || 1n, 18],
  );
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="You receive"
        value={
          <span className="font-bold">{`${formatBalance({
            balance: long.bondAmount,
            decimals: baseToken.decimals,
            places: 4,
          })} hy${baseToken.symbol}`}</span>
        }
      />
      <LabelValue
        label="Pool fee"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip={`The pool fee is applied to the effective fixed rate you receive`}
          >
            {formatRate(poolFee[0], 18)}%
          </span>
        }
      />
      <LabelValue
        label="Net fixed rate"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="Your net fixed rate after pool fees and slippage are applied."
          >
            {long.bondAmount > 0
              ? `${formatRate(
                  calculateFixedRateFromOpenLong({
                    positionDuration: poolConfig?.positionDuration || 0n,
                    baseAmount: long.baseAmountPaid,
                    bondAmount: long.bondAmount,
                    decimals: baseToken.decimals,
                  }),
                  baseToken.decimals,
                )}% APR`
              : "0% APR"}
          </span>
        }
      />
      <LabelValue
        label="Yield at maturity"
        value={
          <div
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border"
            data-tip={`Total ${baseToken.symbol} expected in return at the end of the term, excluding fees.`}
          >
            {long.bondAmount > 0 ? (
              <span className="cursor-help border-b border-dashed border-success text-success">
                {long.bondAmount > long.baseAmountPaid ? "+" : ""}
                {long.baseAmountPaid
                  ? `${formatBalance({
                      balance: long.bondAmount - long.baseAmountPaid,
                      decimals: baseToken.decimals,
                      places: 4,
                    })} ${baseToken.symbol}`
                  : undefined}
              </span>
            ) : (
              <span className="cursor-help border-b border-dashed">
                0 {baseToken.symbol}
              </span>
            )}
          </div>
        }
      />
      <LabelValue
        label="Matures in"
        value={`${numDays} days, ${new Date(
          Date.now() + termLengthMS,
        ).toLocaleDateString()}`}
      />
    </div>
  );
}
