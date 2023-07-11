import { Long } from "@hyperdrive/core";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatUnits } from "viem";

interface OpenLongPreviewProps {
  hyperdrive: Hyperdrive;
  long: Long;
}

export function OpenLongPreview({
  hyperdrive,
  long,
}: OpenLongPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 rounded border border-neutral-content bg-transparent p-4">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{hyperdrive.name}</h5>
        <Pill className="h-6">Long</Pill>
      </div>

      <div className="flex flex-col gap-y-1 tracking-wide">
        <div className="flex">
          <p className="mr-auto">Term Length</p>
          <p className="font-semibold tracking-wide">
            {convertMillisecondsToMonths(hyperdrive.termLengthMS)} months
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Matures on</p>
          <p className="font-semibold tracking-wide">
            {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Claimable at Maturity</p>
          <p className="font-semibold tracking-wide">
            {formatBalance(
              formatUnits(long.bondAmount, hyperdrive.baseToken.decimals),
              4,
              false,
            )}{" "}
            {hyperdrive.baseToken.symbol}
          </p>
        </div>
      </div>
    </div>
  );
}
