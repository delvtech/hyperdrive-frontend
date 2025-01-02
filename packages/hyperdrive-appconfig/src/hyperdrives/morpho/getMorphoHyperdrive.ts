import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import retry from "p-retry";
import { HyperdriveConfigResolverResult } from "src/appconfig/HyperdriveConfigResolver";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  HyperdriveRewardsMap,
  parseHyperdriveRewardsMap,
} from "src/hyperdrives/rewards";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceId } from "src/yieldSources/types";
import { yieldSources } from "src/yieldSources/yieldSources";

export async function getMorphoHyperdrive({
  hyperdrive,
  yieldSourceId,
  baseTokenTags,
  baseTokenIconUrl,
  baseTokenPlaces,
  rewardsMap,
}: {
  hyperdrive: ReadHyperdrive;
  yieldSourceId: YieldSourceId;
  baseTokenTags: string[];
  baseTokenIconUrl: string;
  baseTokenPlaces: number;
  rewardsMap?: HyperdriveRewardsMap;
}): Promise<HyperdriveConfigResolverResult> {
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  const baseToken = await hyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    tags: baseTokenTags,
    iconUrl: baseTokenIconUrl,
    places: baseTokenPlaces,
    priceOracle: "defillama",
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSourceId].shortName,
  });

  // safe to cast here because we know the pool was initialized
  const initializationBlock = await retry(
    async () => hyperdrive.getInitializationBlock(),
    {
      // sometimes this fails to find the block due to alchemy blips, retry a
      // few times in this case
      retries: 5,
      onFailedAttempt: () => {
        console.log("Retrying getInitializationBlock...");
      },
    },
  );
  const chainId = await hyperdrive.drift.getChainId();
  const hyperdriveConfig: HyperdriveConfig = {
    chainId,
    kind: await hyperdrive.getKind(),
    // safe to cast here because we know the pool was initialized
    initializationBlock: initializationBlock.blockNumber as bigint,
    initializationTimestamp: initializationBlock.timestamp,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: await hyperdrive.getDecimals(),
    yieldSource: yieldSourceId,
    depositOptions: {
      isBaseTokenDepositEnabled: true,
      // No shares token for morpho, turn off deposits
      isShareTokenDepositsEnabled: false,
    },
    withdrawOptions: {
      isBaseTokenWithdrawalEnabled: true,
      // No shares token for morpho, turn off withdrawals
      isShareTokenWithdrawalEnabled: false,
    },
    poolConfig,
  };

  const rewards = rewardsMap
    ? parseHyperdriveRewardsMap({
        hyperdriveAddress: hyperdrive.address,
        chainId,
        rewardsMap,
      })
    : undefined;

  return {
    baseTokenConfig,
    hyperdriveConfig,
    rewards,
  };
}
