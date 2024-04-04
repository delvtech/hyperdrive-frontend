import { ReadStEthHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getStethHyperdriveSharesToken } from "src/hyperdrives/steth/getStethHyperdriveSharesToken";
import { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import { ETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getStethHyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
}): Promise<{
  sharesToken: TokenConfig<YieldSourceExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const readHyperdrive = new ReadStEthHyperdrive({
    address: hyperdriveAddress,
    publicClient,
  });
  const poolConfig = await readHyperdrive.getPoolConfig();

  const readSharesToken = await readHyperdrive.getSharesToken();
  const sharesToken = await getStethHyperdriveSharesToken({
    sharesToken: readSharesToken,
    extensions: sharesTokenExtensions,
  });

  const baseToken: TokenConfig<EmptyExtensions> = {
    address: poolConfig.baseToken,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    tags: [],
    extensions: {},
    iconUrl: ETH_ICON_URL,
  };

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseToken.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesToken.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
    baseToken: baseToken.address,
    sharesToken: sharesToken.address,
    withdrawOptions: {
      // steth hyperdrive does not allow you to withdraw back to native ETH, due
      // to how lido's withraw process works
      isBaseTokenWithdrawalEnabled: false,
    },
    poolConfig,
  };

  return { sharesToken, baseToken, hyperdriveConfig: hyperdriveConfig };
}
