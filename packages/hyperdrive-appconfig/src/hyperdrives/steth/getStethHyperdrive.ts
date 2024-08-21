import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getTokenConfig, TokenConfig } from "src/tokens/getTokenConfig";
import { ETH_ICON_URL, STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
import { sepolia } from "viem/chains";
export async function getStethHyperdrive({
  hyperdrive,
}: {
  hyperdrive: ReadHyperdrive;
}): Promise<{
  sharesTokenConfig: TokenConfig;
  baseTokenConfig: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const chainId = await hyperdrive.network.getChainId();
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  // safe to cast here because we know the pool was initialized
  const initializationBlock = (await hyperdrive.getInitializationBlock())
    .blockNumber as bigint;

  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["liquidStakingToken"],
    iconUrl: STETH_ICON_URL,
    places: 4,
  });

  const baseTokenConfig: TokenConfig = {
    address: poolConfig.baseToken,
    chainId: await hyperdrive.network.getChainId(),
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    places: 4,
    tags: [],
    iconUrl: ETH_ICON_URL,
  };

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources.lidoSteth.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    chainId,
    initializationBlock,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: 18, // Longs, shorts, and LP tokens are assumed to be 18 decimals
    yieldSource: "lidoSteth",
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
    sharesTokenConfig,
    baseTokenConfig,
    hyperdriveConfig,
  };
}
