import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { calculateRatio } from "src/base/calculateRatio";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { Address } from "viem";

export function useUtilizationRatio({
  hyperdrive,
  account,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
}): bigint | undefined {
  const { lpShares } = useLpShares({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { withdrawalShares } = usePreviewRemoveLiquidity({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: lpShares,
    minOutputPerShare: 1n,
    destination: account,
    asBase: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
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
