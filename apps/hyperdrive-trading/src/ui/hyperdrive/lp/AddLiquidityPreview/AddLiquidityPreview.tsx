import { ReactElement } from "react";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface AddLiquidityPreviewProps {
  hyperdrive: HyperdriveConfig;
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
            LP Shares
          </p>
        }
      />
    </div>
  );
}
