import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  EmptyExtensions,
  getTokenConfig,
  TokenConfig,
} from "src/tokens/getTokenConfig";
import { ETH_ICON_URL, STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
import { sepolia } from "viem/chains";
export async function getStethHyperdrive({
  hyperdrive,
  chainId,
}: {
  hyperdrive: ReadHyperdrive;
  chainId: number;
}): Promise<{
  sharesToken: TokenConfig<EmptyExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["liquidStakingToken"],
    extensions: {},
    iconUrl: STETH_ICON_URL,
    places: 4,
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
    yieldSourceShortName: yieldSources.lidoSteth.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
    baseToken: baseTokenConfig.address,
    yieldSource: "lidoSteth",
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
