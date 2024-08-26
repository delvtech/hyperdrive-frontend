import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { TokenConfig, getTokenConfig } from "src/tokens/getTokenConfig";
import { yieldSources } from "src/yieldSources";

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
  sharesTokenConfig: TokenConfig;
  baseTokenConfig: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();
  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: sharesTokenTags,
    iconUrl: sharesTokenIconUrl,
    places: tokenPlaces,
  });

  const baseToken = await hyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    tags: baseTokenTags,
    iconUrl: baseTokenIconUrl,
    places: tokenPlaces,
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  // safe to cast here because we know the pool was initialized
  const initializationBlock = (await hyperdrive.getInitializationBlock())
    .blockNumber as bigint;

  const hyperdriveConfig: HyperdriveConfig = {
    chainId: await hyperdrive.network.getChainId(),
    kind: await hyperdrive.getKind(),
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    initializationBlock,
    decimals: await hyperdrive.getDecimals(),
    yieldSource,
    depositOptions: depositOptions,
    withdrawOptions: withdrawalOptions,
    poolConfig,
  };

  return {
    sharesTokenConfig,
    baseTokenConfig,
    hyperdriveConfig,
  };
}
