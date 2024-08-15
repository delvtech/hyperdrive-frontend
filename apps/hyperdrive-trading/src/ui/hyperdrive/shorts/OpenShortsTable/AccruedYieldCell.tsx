import { OpenShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";

export function AccruedYieldCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { bondAmount, checkpointTime } = openShort;
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  const { accruedYield } = useAccruedYield({
    hyperdrive,
    bondAmount,
    checkpointTime,
  });

  return (
    <span
      className={classNames({
        "flex w-28 justify-end": !isTailwindSmallScreen,
      })}
    >
      {formatBalance({
        balance: accruedYield || 0n,
        decimals: baseToken.decimals,
        places: baseToken.places,
      })}
    </span>
  );
}
