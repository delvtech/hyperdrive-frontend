import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  EmptyExtensions,
  TokenConfig,
  getTokenConfig,
} from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

type DepositOptions = HyperdriveConfig["depositOptions"];
type WithdrawalOptions = HyperdriveConfig["withdrawOptions"];

interface GetHyperdriveConfigParams {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  depositOptions: DepositOptions;
  withdrawalOptions: WithdrawalOptions;
  tokenPlaces: number;
  tags?: string[];
}

interface GetCustomHyperdriveResult {
  sharesToken: TokenConfig<YieldSourceExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}

export async function getCustomHyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
  baseTokenIconUrl,
  sharesTokenIconUrl,
  depositOptions,
  withdrawalOptions,
  tokenPlaces,
  tags = [],
}: GetHyperdriveConfigParams): Promise<GetCustomHyperdriveResult> {
  const readHyperdrive = new ReadHyperdrive({
    address: hyperdriveAddress,
    publicClient,
  });

  const version = await readHyperdrive.getVersion();
  const poolConfig = await readHyperdrive.getPoolConfig();
  const sharesToken = await readHyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["yieldSource", ...tags],
    extensions: sharesTokenExtensions,
    iconUrl: sharesTokenIconUrl,
    places: tokenPlaces,
  });

  const baseToken = await readHyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    extensions: {},
    tags: [],
    iconUrl: baseTokenIconUrl,
    places: tokenPlaces,
  });

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseTokenConfig.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesTokenConfig.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    version,
    name: hyperdriveName,
    decimals: await readHyperdrive.getDecimals(),
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
