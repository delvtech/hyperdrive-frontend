import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  EmptyExtensions,
  TokenConfig,
  getTokenConfig,
} from "src/tokens/getTokenConfig";
import { yieldSources } from "src/yieldSources/extensions";

type DepositOptions = HyperdriveConfig["depositOptions"];
type WithdrawalOptions = HyperdriveConfig["withdrawOptions"];

interface GetHyperdriveConfigParams {
  hyperdrive: ReadHyperdrive;
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  yieldSource: keyof typeof yieldSources;
  depositOptions: DepositOptions;
  withdrawalOptions: WithdrawalOptions;
  tokenPlaces: number;
  sharesTokenTags?: string[];
  baseTokenTags?: string[];
}

export async function getCustomHyperdrive({
  hyperdrive,
  baseTokenIconUrl,
  yieldSource,
  sharesTokenIconUrl,
  depositOptions,
  withdrawalOptions,
  tokenPlaces,
  sharesTokenTags = [],
  baseTokenTags = [],
}: GetHyperdriveConfigParams): Promise<{
  sharesToken: TokenConfig<EmptyExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();
  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: sharesTokenTags,
    extensions: {},
    iconUrl: sharesTokenIconUrl,
    places: tokenPlaces,
  });

  const baseToken = await hyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    extensions: {},
    tags: baseTokenTags,
    iconUrl: baseTokenIconUrl,
    places: tokenPlaces,
  });

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseTokenConfig.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: await hyperdrive.getDecimals(),
    yieldSource,
    baseToken: baseTokenConfig.address,
    sharesToken: sharesTokenConfig.address,
    depositOptions: depositOptions,
    withdrawOptions: withdrawalOptions,
    poolConfig,
  };

  return {
    sharesToken: sharesTokenConfig,
    baseToken: baseTokenConfig,
    hyperdriveConfig: hyperdriveConfig,
  };
}
