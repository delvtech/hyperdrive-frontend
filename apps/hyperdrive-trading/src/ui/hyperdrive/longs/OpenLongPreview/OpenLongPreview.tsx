import { Long } from "@hyperdrive/sdk";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
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
    <div className="flex flex-col gap-y-4 rounded border-neutral-content bg-transparent ">
      <div className="flex flex-col gap-y-1 tracking-wide">
        <div className="flex">
          <p className="mr-auto">Term Length</p>
          <p className="font-semibold tracking-wide">
            {convertMillisecondsToDays(hyperdrive.termLengthMS)} days
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-light text-neutral-content">Matures on</p>
          <p className="tracking-wide">
            {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-light text-neutral-content">
            Claimable at maturity
          </p>
          <p className="font-semibold tracking-wide">
            {formatBalance(
              formatUnits(long.bondAmount, hyperdrive.baseToken.decimals),
              4,
            )}{" "}
            {hyperdrive.baseToken.symbol}
          </p>
        </div>
      </div>
    </div>
  );
}
