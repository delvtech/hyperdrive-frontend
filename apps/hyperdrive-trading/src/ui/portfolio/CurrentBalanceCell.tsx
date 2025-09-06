import { getBaseToken, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  type OpenLongPositionReceived,
  type OpenShort,
} from "@delvtech/hyperdrive-js";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useAssetBalance } from "src/ui/hyperdrive/hooks/useAssetBalance";
import type { Address } from "viem";

export function CurrentBalanceCell({
  row,
  account,
  hyperdrive,
}: {
  row:
    | OpenLongPositionReceived
    | (OpenShort & { hyperdrive: HyperdriveConfig });
  account: Address;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { assetBalance, assetBalanceStatus } = useAssetBalance({
    account,
    assetId: row.assetId,
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  if (assetBalanceStatus === "loading") {
    return (
      <div className={"flex"}>
        <Skeleton width={100} />
      </div>
    );
  }

  return (
    <div className="text-neutral-content">
      {formatBalance({
        balance: assetBalance || 0n,
        decimals: baseToken.decimals,
        places: baseToken.places,
      })}{" "}
      hy{baseToken.symbol}
    </div>
  );
}
