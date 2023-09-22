import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatUnits } from "viem";

interface AddLiquidityPreviewProps {
  hyperdrive: Hyperdrive;
  lpShares: bigint;
}

export function AddLiquidityPreview({
  hyperdrive,
  lpShares,
}: AddLiquidityPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 rounded border border-neutral-content bg-transparent p-4">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{hyperdrive.name}</h5>
        <Pill className="h-6">LP</Pill>
      </div>

      <div className="flex flex-col gap-y-1 tracking-wide">
        <div className="flex">
          <p className="mr-auto">LP Shares Received</p>
          <p className="font-semibold tracking-wide">
            {formatBalance({
              balance: formatUnits(lpShares, hyperdrive.baseToken.decimals),
              numDecimals: 4,
              includeCommas: false,
            })}{" "}
            LP
          </p>
        </div>
      </div>
    </div>
  );
}
