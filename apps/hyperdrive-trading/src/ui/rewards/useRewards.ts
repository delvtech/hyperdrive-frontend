import { fixed, FixedPoint, parseFixed } from "@delvtech/fixed-point-wasm";
import { PoolConfig, PoolInfo } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { Address } from "viem";
import { mainnet } from "viem/chains";
import { useChainId } from "wagmi";

// TODO @cashd: Move to AppConfig
// https://github.com/delvtech/hyperdrive-frontend/issues/1341
const eligibleMarketsForMorphoRewards: Record<number, Address[]> = {
  [mainnet.id]: ["0xc8D47DE20F7053Cc02504600596A647A482Bbc46"],
};

// Source: https://docs.morpho.org/rewards/concepts/programs
const MorphoFlatRatePerDay = 1.45e-4;
const MorphoFlatRatePerYear = parseFixed(MorphoFlatRatePerDay * 365 * 1000);

type RewardType = "MorphoFlatRate";

type UseRewardsReturn =
  | {
      id: RewardType;
      name: string;
      amount: string;
    }[]
  | undefined;

function getWeight(
  poolConfig: PoolConfig,
  positionType: "short" | "lp",
  decimals: number,
  poolInfo?: PoolInfo,
  presentValue?: bigint,
): FixedPoint {
  if (!poolInfo || !presentValue) {
    return parseFixed(0);
  }

  if (positionType === "short") {
    return parseFixed(1, 18);
  }

  const shareReserves = fixed(poolInfo.shareReserves, decimals);
  const minShareReserves = fixed(poolConfig.minimumShareReserves, decimals);
  const netShareReserves = shareReserves.sub(minShareReserves);

  return netShareReserves.div(parseFixed(presentValue, decimals));
}

export function useRewards(
  hyperdrive: HyperdriveConfig,
  positionType: "short" | "lp",
): UseRewardsReturn {
  const chainId = useChainId();

  const { poolInfo } = usePoolInfo({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { presentValue } = usePresentValue({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  if (eligibleMarketsForMorphoRewards[chainId]?.includes(hyperdrive.address)) {
    const morphoRate = MorphoFlatRatePerYear.mul(
      getWeight(
        hyperdrive.poolConfig,
        positionType,
        hyperdrive.decimals,
        poolInfo,
        presentValue,
      ),
    );

    return [
      {
        id: "MorphoFlatRate",
        name: "MORPHO",
        amount: morphoRate.format({
          decimals: 2,
        }),
      },
    ];
  }
}
