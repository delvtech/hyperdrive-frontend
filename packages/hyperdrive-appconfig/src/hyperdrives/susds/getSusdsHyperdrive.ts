import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { TokenConfig } from "src/tokens/types";
import { YieldSourceId } from "src/yieldSources/types";
import { yieldSources } from "src/yieldSources/yieldSources";

export async function getSusdsHyperdrive({
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
  const initializationBlock = await hyperdrive.getInitializationBlock();
  const hyperdriveConfig: HyperdriveConfig = {
    chainId: await hyperdrive.drift.getChainId(),
    kind: await hyperdrive.getKind(),
    initializationBlock: initializationBlock.number,
    initializationTimestamp: initializationBlock.timestamp,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: await hyperdrive.getDecimals(),
    yieldSource: yieldSourceId,
    depositOptions: {
      isBaseTokenDepositEnabled: true,
      // No shares token for SUSDS, turn off deposits
      isShareTokenDepositsEnabled: false,
    },
    withdrawOptions: {
      isBaseTokenWithdrawalEnabled: true,
      // No shares token for SUSDS, turn off withdrawals
      isShareTokenWithdrawalEnabled: false,
    },
    poolConfig,
  };

  return {
    baseTokenConfig,
    hyperdriveConfig,
  };
}
