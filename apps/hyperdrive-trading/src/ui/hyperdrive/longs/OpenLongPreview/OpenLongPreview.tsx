import { Long } from "@hyperdrive/sdk";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
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
    <div className="flex flex-col gap-1 ">
      <div className="flex justify-between">
        <p className="">You receive</p>
        <p className="font-bold">
          {formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.baseToken.decimals,
            places: 4,
          })}{" "}
          hy{hyperdrive.baseToken.symbol}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="">Pool fee</p>
        <span
          className="daisy-tooltip daisy-tooltip-left cursor-help border-b border-dashed border-current "
          data-tip={`The pool fee is applied to the effective fixed rate you receive`}
        >
          {formatRate(poolFee[0], 18)}%
        </span>
      </div>

      <div className="flex justify-between">
        <p>Effective fixed rate</p>
        <div className="flex items-center">
          {long.bondAmount > 0 ? (
            <>
              <span
                className="daisy-tooltip daisy-tooltip-top cursor-help border-b border-dashed border-current"
                data-tip={`Your effective fixed rate after pool fees and slippage are applied.`}
              >
                <span className="font-bold">
                  {calculateAnnualizedPercentageChange({
                    amountBefore: long.baseAmountPaid,
                    amountAfter: long.bondAmount,
                    days: numDays,
                  })}
                  % APR
                </span>
              </span>
              <div
                className={
                  "daisy-badge daisy-badge-md inline-flex text-success"
                }
              >
                <span>{long.bondAmount > long.baseAmountPaid ? "+" : ""}</span>
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
            "0 % APR"
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="">Matures in</p>
        <p className="">
          {convertMillisecondsToDays(hyperdrive.termLengthMS)} days,{" "}
          {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
