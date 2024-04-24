import { ReadREthHyperdrive } from "@delvtech/hyperdrive-viem";
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
  depositOptions?: DepositOptions;
  withdrawalOptions?: WithdrawalOptions;
  optionalTags?: string[];
}

interface HyperdriveInstanceConfigs {
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
  optionalTags = [],
}: GetHyperdriveConfigParams): Promise<HyperdriveInstanceConfigs> {
  // All Hyperdrive instances have a shareToken function, but the SDK needs to
  // be updated, using RethHyperdrive for now.
  const readHyperdrive = new ReadREthHyperdrive({
    address: hyperdriveAddress,
    publicClient,
  });

  const poolConfig = await readHyperdrive.getPoolConfig();
  const sharesToken = await readHyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["yieldSource", ...optionalTags],
    extensions: sharesTokenExtensions,
    iconUrl: sharesTokenIconUrl,
    places: 2,
  });

  const baseToken = await readHyperdrive.getBaseToken();
  const baseTokenConfig = await getTokenConfig({
    token: baseToken,
    extensions: {},
    tags: [],
    iconUrl: baseTokenIconUrl,
    places: 2,
  });

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseTokenConfig.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesTokenConfig.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    name: hyperdriveName,
    decimals: await readHyperdrive.getDecimals(),
    baseToken: baseTokenConfig.address,
    sharesToken: sharesTokenConfig.address,
    depositOptions: depositOptions ?? {
      isBaseTokenDepositEnabled: true,
    },
    withdrawOptions: withdrawalOptions ?? {
      isBaseTokenWithdrawalEnabled: true,
    },
    poolConfig,
  };

  return {
    sharesToken: sharesTokenConfig,
    baseToken: baseTokenConfig,
    hyperdriveConfig: hyperdriveConfig,
  };
}
