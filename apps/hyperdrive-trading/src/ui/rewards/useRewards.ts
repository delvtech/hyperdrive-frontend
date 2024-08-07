import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";
import { mainnet } from "viem/chains";
import { useChainId } from "wagmi";

const eligibleMarketsForMorphoRewards: Record<number, Address[]> = {
  [mainnet.id]: [
    // TODO @cashd: add morpho addresses
  ],
};

const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);

type RewardType = "MorphoFlatRate";

type UseRewardsReturn =
  | {
      key: RewardType;
      name: string;
      amount: string;
    }[]
  | undefined;

export function useRewards(
  hyperdrive: HyperdriveConfig,
  positionType: "short" | "lp"
): UseRewardsReturn {
  const chainId = useChainId();

  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
  });
  const { presentValue } = usePresentValue({
    hyperdriveAddress: hyperdrive.address,
  });

  const weight = useMemo(() => {
    if (!poolInfo || !presentValue) {
      return parseFixed(0);
    }

    if (positionType === "short") {
      return parseFixed(1, 18);
    }

    const shareReserves = fixed(poolInfo.shareReserves);
    const minShareReserves = fixed(hyperdrive.poolConfig.minimumShareReserves);
    const netShareReserves = shareReserves.sub(minShareReserves);

    return netShareReserves.div(presentValue);
  }, [poolInfo, presentValue, positionType]);

  if (eligibleMarketsForMorphoRewards[chainId]?.includes(hyperdrive.address)) {
    const morphoRate = MorphoFlatRatePerYear.mul(weight);

    return [
      {
        key: "MorphoFlatRate",
        name: "MORPHO",
        amount: morphoRate.format({
          decimals: 2,
        }),
      },
    ];
  }
}
