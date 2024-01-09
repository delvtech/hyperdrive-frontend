import { calculateFixedRateFromOpenLong, Long } from "@hyperdrive/sdk";
import * as dnum from "dnum";
import { ReactElement, ReactNode } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
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
          <div className="flex flex-col items-end gap-2">
            {long.bondAmount > 0 ? (
              <>
                <span
                  className="daisy-tooltip daisy-tooltip-top cursor-help border-b border-dashed border-current before:border"
                  data-tip="Your net fixed rate after pool fees and slippage are applied."
                >
                  <span className="font-bold">
                    {`${formatRate(
                      calculateFixedRateFromOpenLong({
                        positionDuration: poolConfig?.positionDuration || 0n,
                        baseAmount: long.baseAmountPaid,
                        bondAmount: long.bondAmount,
                        decimals: hyperdrive.baseToken.decimals,
                      }),
                      hyperdrive.baseToken.decimals,
                    )}% APR`}
                  </span>
                </span>
                <div className="daisy-badge daisy-badge-md text-success">
                  <span>
                    {long.bondAmount > long.baseAmountPaid ? "+" : ""}
                  </span>
                  {long.baseAmountPaid
                    ? `${formatBalance({
                        balance: long.bondAmount - long.baseAmountPaid,
                        decimals: hyperdrive.baseToken.decimals,
                        places: 4,
                      })} ${hyperdrive.baseToken.symbol}`
                    : undefined}
                </div>
              </>
            ) : (
              "0% APR"
            )}
          </div>
        }
      />
      <PreviewTransactionRow
        label="Matures in"
        value={
          <>
            {numDays} days,{" "}
            {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
          </>
        }
      />
    </div>
  );
}

function PreviewTransactionRow({
  label: label,
  value: value,
}: {
  label: ReactNode;
  value: ReactNode;
}): JSX.Element {
  return (
    <div className="flex justify-between text-md">
      <p className="text-neutral-content">{label}</p>
      <p>{value}</p>
    </div>
  );
}
