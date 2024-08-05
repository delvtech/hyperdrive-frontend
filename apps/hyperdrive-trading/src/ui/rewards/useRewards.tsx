import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import { ReactNode, useMemo } from "react";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";

// warning  Fast refresh only works when a file only exports components. Move your component(s) to a separate file
// react-refresh/only-export-components

const eligibleMarketsForMorphoRewards: Address[] = [
  "0xC7cb718D5f1c5B4839045aed2620FABc1cF13CD3",
  "0xfA8dB2177F1e1eE4327c9b9d1389b1173bC5A5e2",
];

const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = MorphoFlatRatePerDay * 365 * 1000;

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

export function useLpRewards(hyperdriveAddress: Address): UseRewardsReturn {
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress,
  });

  const { presentValue } = usePresentValue({
    hyperdriveAddress,
  });

  const rate = useMemo(() => {
    if (!poolInfo || !presentValue) {
      return;
    }

    const weight = fixed(poolInfo.shareReserves, 18).div(presentValue, 18);
    const morphoFlatRate = parseFixed(MorphoFlatRatePerYear, 18);

    return morphoFlatRate.mul(weight);
  }, [poolInfo, presentValue]);

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
