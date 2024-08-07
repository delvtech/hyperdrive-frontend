import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactNode, useMemo } from "react";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";

const eligibleMarketsForMorphoRewards: Address[] = [
  "0xC7cb718D5f1c5B4839045aed2620FABc1cF13CD3",
  "0xfA8dB2177F1e1eE4327c9b9d1389b1173bC5A5e2",
];

const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);

type UseRewardsReturn =
  | {
      key: string;
      name: ReactNode;
      amount: ReactNode;
    }[]
  | undefined;

export function useShortRewards(hyperdriveAddress: Address): UseRewardsReturn {
  const rate = parseFixed(MorphoFlatRatePerYear, 18);
  if (eligibleMarketsForMorphoRewards.includes(hyperdriveAddress)) {
    return [
      {
        key: "MorphoFlatRateRewards",
        name: (
          <p className="flex items-center gap-1 text-neutral-content">MORPHO</p>
        ),
        amount: (
          <div>
            <p className="flex items-center gap-1">
              {rate?.format({
                decimals: 2,
              })}{" "}
              <img
                src="https://cdn.morpho.org/assets/logos/morpho.svg"
                className="h-4"
              />
            </p>

            <p className="text-2xs text-neutral-content">per $1000 / yr</p>
          </div>
        ),
      },
    ];
  }
}

export function useRewards(
  hyperdrive: HyperdriveConfig,
  positionType: "short" | "lp"
): UseRewardsReturn {
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

  if (eligibleMarketsForMorphoRewards.includes(hyperdrive.address)) {
    const morphoRate = MorphoFlatRatePerYear.mul(weight);

    return [
      {
        key: "MorphoFlatRateRewards",
        name: (
          <p className="flex items-center gap-1 text-neutral-content">MORPHO</p>
        ),
        amount: (
          <div>
            <p className="flex items-center gap-1">
              {morphoRate.format({
                decimals: 2,
              })}{" "}
              <img
                src="https://cdn.morpho.org/assets/logos/morpho.svg"
                className="inline h-4"
              />
            </p>

            <p className="text-2xs text-neutral-content">per $1000 / yr</p>
          </div>
        ),
      },
    ];
  }
}
