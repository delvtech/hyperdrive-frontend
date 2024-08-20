import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getTokenConfig, TokenConfig } from "src/tokens/getTokenConfig";
import { YieldSourceId, yieldSources } from "src/yieldSources";

export async function getMorphoHyperdrive({
  hyperdrive,
  yieldSourceId,
  baseTokenTags,
  baseTokenIconUrl,
  baseTokenPlaces,
}: {
  hyperdrive: ReadHyperdrive;
  yieldSourceId: YieldSourceId;
  baseTokenTags: string[];
  baseTokenIconUrl: string;
  baseTokenPlaces: number;
}): Promise<{
  baseTokenConfig: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  const baseToken = await hyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    extensions: {},
    tags: baseTokenTags,
    iconUrl: baseTokenIconUrl,
    places: baseTokenPlaces,
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSourceId].shortName,
  });

  // safe to cast here because we know the pool was initialized
  const initializationBlock = (await hyperdrive.getInitializationBlock())
    .blockNumber as bigint;
  const hyperdriveConfig: HyperdriveConfig = {
    chainId: await hyperdrive.network.getChainId(),
    initializationBlock,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
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

  return {
    baseTokenConfig,
    hyperdriveConfig,
  };
}
