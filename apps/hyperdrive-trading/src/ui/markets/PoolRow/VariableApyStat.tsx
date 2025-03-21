import { parseFixed } from "@delvtech/fixed-point-wasm";
import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useShortRate } from "src/ui/hyperdrive/shorts/hooks/useShortRate";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { useOpenShortRewards } from "src/ui/rewards/hooks/useOpenShortRewards";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";
export function VariableApyStat({
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
  const { rewards } = useOpenShortRewards({ hyperdriveConfig: hyperdrive });
  const { vaultRate: yieldSourceRate, vaultRateStatus: yieldSourceRateStatus } =
    useYieldSourceRate({
      chainId,
      hyperdriveAddress,
    });
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { shortApr, shortRateStatus } = useShortRate({
    chainId: hyperdrive.chainId,
    // show the market short rate (aka bond amount of 1)
    bondAmount: parseFixed("1", hyperdrive.decimals).bigint,
    hyperdriveAddress: hyperdrive.address,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
    variableApy: yieldSourceRate?.netVaultRate,
  });

  const multiplierLabel =
    longPriceStatus === "success" && longPrice
      ? `${calculateMarketYieldMultiplier(longPrice).format({ decimals: 0 })}x`
      : undefined;

  if (yieldSourceRateStatus !== "success" || shortRateStatus !== "success") {
    return <Skeleton width={100} />;
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex">
        <PercentLabel
          value={formatRate({
            rate: shortApr?.apr || 0n,
            includePercentSign: false,
          })}
        />
        {rewards?.length ? <span className="mx-1">⚡</span> : null}
      </div>
      <span className="gradient-text text-left font-inter text-md font-medium">{`Up to ${multiplierLabel} exposure`}</span>
    </div>
  );
}
