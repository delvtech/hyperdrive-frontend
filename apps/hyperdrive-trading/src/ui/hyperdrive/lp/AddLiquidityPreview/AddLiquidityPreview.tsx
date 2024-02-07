import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="You receive"
        value={
          <p className="font-bold">
            {formatBalance({
              balance: lpShares,
              decimals: baseToken.decimals,
              places: 4,
            })}{" "}
            LP Shares
          </p>
        }
      />
    </div>
  );
}
