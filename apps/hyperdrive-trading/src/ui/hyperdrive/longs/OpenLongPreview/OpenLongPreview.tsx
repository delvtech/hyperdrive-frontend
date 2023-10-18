import { Long } from "@hyperdrive/sdk";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface OpenLongPreviewProps {
  hyperdrive: Hyperdrive;
  long: Long;
}

export function OpenLongPreview({
  hyperdrive,
  long,
}: OpenLongPreviewProps): ReactElement {
  const numDays = convertMillisecondsToDays(hyperdrive.termLengthMS);
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
        <p>Fixed rate</p>
        <div className="flex items-center">
          {long.bondAmount > 0 ? (
            <>
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
              {calculateAnnualizedPercentageChange({
                amountBefore: long.baseAmountPaid,
                amountAfter: long.bondAmount,
                days: numDays,
              })}
            </>
          ) : (
            "0"
          )}
          % APR
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
