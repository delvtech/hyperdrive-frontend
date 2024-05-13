import { ReadStEthHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getStethHyperdriveSharesToken } from "src/hyperdrives/steth/getStethHyperdriveSharesToken";
import { EmptyExtensions, TokenConfig } from "src/tokens/getTokenConfig";
import { ETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";
import { sepolia } from "viem/chains";
export async function getStethHyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
  chainId,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
  chainId: number;
}): Promise<{
  sharesToken: TokenConfig<YieldSourceExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const readHyperdrive = new ReadStEthHyperdrive({
    address: hyperdriveAddress,
    publicClient,
  });
  const version = await readHyperdrive.getVersion();
  const poolConfig = await readHyperdrive.getPoolConfig();

  const sharesToken = await readHyperdrive.getSharesToken();
  const sharesTokenConfig = await getStethHyperdriveSharesToken({
    sharesToken,
    extensions: sharesTokenExtensions,
  });

  const baseTokenConfig: TokenConfig<EmptyExtensions> = {
    address: poolConfig.baseToken,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    places: 4,
    tags: [],
    extensions: {},
    iconUrl: ETH_ICON_URL,
  };

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseTokenConfig.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesTokenConfig.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    version,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
    baseToken: baseTokenConfig.address,
    sharesToken: sharesToken.address,
    depositOptions: {
      // Turn off sepolia eth deposits so users aren't risking their eth.
      // They can still mint steth and deposit that.
      isBaseTokenDepositEnabled: chainId !== sepolia.id,
      isShareTokenDepositsEnabled: true,
    },
    withdrawOptions: {
      // steth hyperdrive does not allow you to withdraw back to native ETH, due
      // to how lido's withraw process works
      isBaseTokenWithdrawalEnabled: false,
      isShareTokenWithdrawalEnabled: true,
    },
    poolConfig,
  };

  return {
    sharesToken: sharesTokenConfig,
    baseToken: baseTokenConfig,
    hyperdriveConfig: hyperdriveConfig,
  };
}
