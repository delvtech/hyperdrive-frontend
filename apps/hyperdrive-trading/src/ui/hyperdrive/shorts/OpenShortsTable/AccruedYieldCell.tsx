import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";

export function AccruedYieldCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { bondAmount, checkpointId } = openShort;
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { accruedYield } = useAccruedYield({
    hyperdrive,
    bondAmount,
    checkpointId,
  });

  return (
    <div className="flex flex-col gap-1">
      <span>
        {formatBalance({
          balance: accruedYield || 0n,
          decimals: baseToken.decimals,
          places: 3,
        })}
      </span>
    </div>
  );
}
