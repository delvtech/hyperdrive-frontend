import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";

type DepositOptions = HyperdriveConfig["depositOptions"];
type WithdrawalOptions = HyperdriveConfig["withdrawOptions"];

interface GetHyperdriveConfigParams {
  earliestBlock?: bigint;
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
  earliestBlock,
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
    priceOracle: "defillama",
  });

  const baseToken = await hyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    tags: baseTokenTags,
    iconUrl: baseTokenIconUrl,
    places: tokenPlaces,
    priceOracle: "defillama",
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  const initializationBlock = await hyperdrive.getInitializationBlock({
    fromBlock: earliestBlock,
  });

  const chainId = await hyperdrive.drift.getChainId();
  const hyperdriveConfig: HyperdriveConfig = {
    chainId,
    kind: await hyperdrive.getKind(),
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    // safe to cast here because we know the pool was initialized
    initializationBlock: initializationBlock.blockNumber as bigint,
    initializationTimestamp: initializationBlock.timestamp,
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
