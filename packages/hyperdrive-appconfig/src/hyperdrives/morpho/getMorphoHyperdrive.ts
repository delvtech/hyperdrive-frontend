import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  EmptyExtensions,
  getTokenConfig,
  TokenConfig,
} from "src/tokens/getTokenConfig";
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
  baseToken: TokenConfig<EmptyExtensions>;
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
    baseTokenSymbol: baseTokenConfig.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSourceId].shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
    yieldSource: "morphoBlueSusdeDai",
    baseToken: baseTokenConfig.address,
    sharesToken: poolConfig.vaultSharesToken, // This will be the 0x address because there is no shares token for morpho
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
    baseToken: baseTokenConfig,
    hyperdriveConfig: hyperdriveConfig,
  };
}
