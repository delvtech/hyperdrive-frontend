import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface AddLiquidityPreviewProps {
  hyperdrive: Hyperdrive;
  lpShares: bigint;
}

export function AddLiquidityPreview({
  hyperdrive,
  lpShares,
}: AddLiquidityPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="You receive"
        value={
          <p className="font-bold">
            {formatBalance({
              balance: lpShares,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })}{" "}
            LP
          </p>
        }
      />
    </div>
  );
}
