import { ReadErc4626Hyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626HyperdriveSharesToken } from "src/hyperdrives/erc4626/getErc4626HyperdriveSharesToken";
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

export async function getErc4626Hyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
  baseTokenIconUrl,
  sharesTokenIconUrl,
  depositOptions,
  withdrawalOptions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
  depositOptions?: DepositOptions;
  withdrawalOptions?: WithdrawalOptions;
}): Promise<{
  sharesToken: TokenConfig<YieldSourceExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const readHyperdrive = new ReadErc4626Hyperdrive({
    address: hyperdriveAddress,
    publicClient,
  });

  const poolConfig = await readHyperdrive.getPoolConfig();

  const sharesToken = await readHyperdrive.getSharesToken();
  const sharesTokenConfig = await getErc4626HyperdriveSharesToken({
    sharesToken: sharesToken,
    extensions: sharesTokenExtensions,
    iconUrl: sharesTokenIconUrl,
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
