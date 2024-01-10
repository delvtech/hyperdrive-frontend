import { calculateFixedRateFromOpenLong, Long } from "@hyperdrive/sdk";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { PreviewTransactionRow } from "src/ui/base/components/PreviewTransactionRow";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";

interface OpenLongPreviewProps {
  hyperdrive: Hyperdrive;
  long: Long;
}

export function OpenLongPreview({
  hyperdrive,
  long,
}: OpenLongPreviewProps): ReactElement {
  const { poolConfig } = usePoolConfig(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const numDays = convertMillisecondsToDays(hyperdrive.termLengthMS);
  // The pool's curve fee is applied to the fixed rate, so if the fixed rate is
  // 4.5%, the effective fixed rate is 4%, then the pool fee is .45%.
  const poolFee = dnum.mul(
    [poolConfig?.fees.curve || 0n, 18],
    [fixedAPR?.apr || 1n, 18],
  );
  return (
    <div className="flex flex-col gap-3">
      <PreviewTransactionRow
        label="You receive"
        value={
          <span className="font-bold">{`${formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.baseToken.decimals,
            places: 4,
          })} hy${hyperdrive.baseToken.symbol}`}</span>
        }
      />
      <PreviewTransactionRow
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
      <PreviewTransactionRow
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
                    decimals: hyperdrive.baseToken.decimals,
                  }),
                  hyperdrive.baseToken.decimals,
                )}% APR`
              : "0% APR"}
          </span>
        }
      />
      <PreviewTransactionRow
        label="Yield at maturity"
        value={
          <div
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip={`Total ${hyperdrive.baseToken.symbol} expected in return at the end of the term, excluding fees.`}
          >
            {long.bondAmount > 0 ? (
              <>
                <span>{long.bondAmount > long.baseAmountPaid ? "+" : ""}</span>
                <span>
                  {long.baseAmountPaid
                    ? `${formatBalance({
                        balance: long.bondAmount - long.baseAmountPaid,
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })} ${hyperdrive.baseToken.symbol}`
                    : undefined}
                </span>
              </>
            ) : (
              `0 ${hyperdrive.baseToken.symbol}`
            )}
          </div>
        }
      />
      <PreviewTransactionRow
        label="Matures in"
        value={`${numDays} days, ${new Date(
          Date.now() + Number(hyperdrive.termLengthMS),
        ).toLocaleDateString()}`}
      />
    </div>
  );
}
