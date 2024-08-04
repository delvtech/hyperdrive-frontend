import type { HyperdriveConfig } from "@hyperdrive/appconfig";
import { calculateRatio } from "src/base/calculateRatio";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import type { Address } from "viem";

export function useUtilizationRatio({
  hyperdrive,
  account,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
}): bigint | undefined {
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { withdrawalShares } = usePreviewRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: lpShares,
    minOutputPerShare: 1n,
    destination: account,
    // Set asBase to false because we just need the withdrawal shares amount and
    // it should always be possible to withdraw as shares
    asBase: false,
  });
  const utilizationRatio =
    !!withdrawalShares && !!lpShares
      ? calculateRatio({
          a: withdrawalShares,
          b: lpShares,
          decimals: hyperdrive.decimals,
        })
      : undefined;

  return utilizationRatio;
}
