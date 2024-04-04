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

export async function getErc4626Hyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
  baseTokenIconUrl,
  sharesTokenIconUrl,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
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

  const readSharesToken = await readHyperdrive.getSharesToken();
  const sharesToken = await getErc4626HyperdriveSharesToken({
    sharesToken: readSharesToken,
    extensions: sharesTokenExtensions,
    iconUrl: sharesTokenIconUrl,
  });

  const readBaseToken = await readHyperdrive.getBaseToken();

  const baseToken = await getTokenConfig({
    token: readBaseToken,
    extensions: {},
    tags: [],
    iconUrl: baseTokenIconUrl,
  });

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseToken.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesToken.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    name: hyperdriveName,
    decimals: await readHyperdrive.getDecimals(),
    baseToken: baseToken.address,
    sharesToken: readSharesToken.address,
    withdrawOptions: {
      isBaseTokenWithdrawalEnabled: true,
    },
    poolConfig,
  };

  return {
    sharesToken,
    baseToken,
    hyperdriveConfig: hyperdriveConfig,
  };
}
