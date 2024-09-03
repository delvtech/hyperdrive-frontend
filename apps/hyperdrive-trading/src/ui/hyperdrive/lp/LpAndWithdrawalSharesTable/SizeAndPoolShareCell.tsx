import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";

export function SizeAndPoolShareCell({
  hyperdrive,
  lpShares,
}: {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
}): ReactElement {
  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { tokens } = useAppConfig();

  const baseToken = tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const poolShare =
    !!lpShares && !!lpSharesTotalSupply
      ? calculateRatio({
          a: lpShares,
          b: lpSharesTotalSupply,
          decimals: baseToken?.decimals || 18,
        })
      : 0n;
  return (
    <div className="flex flex-col font-dmMono">
      <span>
        {formatBalance({
          balance: lpShares,
          decimals: baseToken?.decimals || 18,
          places: baseToken?.places || 2,
        })}
      </span>
      <p className="text-neutral-content">
        {!!lpShares && !!lpSharesTotalSupply ? (
          `${fixed(poolShare).format({ decimals: 6 })}% of pool`
        ) : (
          <Skeleton />
        )}
      </p>
    </div>
  );
}
