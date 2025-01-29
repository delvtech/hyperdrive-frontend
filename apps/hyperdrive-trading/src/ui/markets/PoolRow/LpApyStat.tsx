import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactNode } from "react";
import { formatRate } from "src/base/formatRate";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { useAddLiquidityRewards } from "src/ui/rewards/hooks/useAddLiquidityRewards";
import { Address } from "viem";

export function LpApyStat({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): ReactNode {
  const appConfig = useAppConfigForConnectedChain();
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });
  const { rewards } = useAddLiquidityRewards({
    hyperdriveConfig: hyperdrive,
  });
  const { lpApy } = useLpApy({ chainId, hyperdriveAddress });

  // Explicit check against undefined, since we still want to show zero if the
  // LP APY is zero
  const netApyLabel =
    lpApy?.netLpApy !== undefined
      ? formatRate({
          rate: lpApy.netLpApy,
          includePercentSign: false,
        })
      : null;

  if (!rewards?.length && netApyLabel) {
    return <PercentLabel value={netApyLabel} />;
  }

  return netApyLabel ? (
    <div className="flex">
      <PercentLabel value={netApyLabel} />
      <span className="mx-1">⚡</span>
    </div>
  ) : null;
}
