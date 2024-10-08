import {
  HyperdriveConfig,
  appConfig,
  findBaseToken,
} from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-viem";
import classNames from "classnames";
import { ReactElement } from "react";
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

  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
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
        decimals: 18, // accrued yield is always 18 decimals
        places: baseToken.places,
      })}
    </span>
  );
}
