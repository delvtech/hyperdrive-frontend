import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";

export function SizeAndPoolShareCell({
  hyperdrive,
  lpShares,
}: {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
}): ReactElement {
  const { lpSharesTotalSupply, lpSharesTotalSupplyStatus } =
    useLpSharesTotalSupply({
      hyperdriveAddress: hyperdrive.address,
      chainId: hyperdrive.chainId,
    });

  const baseToken = getBaseToken({
    appConfig,
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
  });
  const poolShare =
    !!lpShares && !!lpSharesTotalSupply
      ? calculateRatio({
          a: lpShares,
          b: lpSharesTotalSupply,
          decimals: hyperdrive?.decimals,
        })
      : 0n;
  return (
    <div className="flex flex-col font-dmMono">
      <span>
        {formatBalance({
          balance: lpShares,
          decimals: hyperdrive?.decimals,
          places: baseToken?.places || 2,
        })}
      </span>
      <p className="text-neutral-content">
        {lpSharesTotalSupplyStatus === "success" ? (
          `${fixed(poolShare).format({ decimals: 6 })}% of pool`
        ) : (
          <Skeleton />
        )}
      </p>
    </div>
  );
}
