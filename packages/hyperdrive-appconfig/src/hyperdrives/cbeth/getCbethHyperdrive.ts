import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { ETH_MAGIC_NUMBER } from "src/tokens/ETH_MAGIC_NUMBER";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { CBETH_ICON_URL, ETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";
import { mainnet } from "viem/chains";
export async function getCbethHyperdrive({
  hyperdrive,
  earliestBlock,
}: {
  hyperdrive: ReadHyperdrive;
  earliestBlock?: bigint;
}): Promise<{
  baseTokenConfig: TokenConfig;
  sharesTokenConfig: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const chainId = await hyperdrive.drift.getChainId();
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  const initializationBlock = await hyperdrive.getInitializationBlock({
    fromBlock: earliestBlock,
  });

  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["liquidStakingToken"],
    iconUrl: CBETH_ICON_URL,
    places: 4,
    priceOracle: "defillama",
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources.morphoCbethUsdc.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    chainId,
    kind: await hyperdrive.getKind(),
    // safe to cast here because we know the pool was initialized
    initializationBlock: initializationBlock.blockNumber as bigint,
    initializationTimestamp: initializationBlock.timestamp,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: await hyperdrive.getDecimals(),
    yieldSource: "cbeth",
    baseTokenFallback: {
      address: ETH_MAGIC_NUMBER,
      chainId: mainnet.id,
    },
    depositOptions: {
      // There is no base token for cbeth, hence we specify the baseTokenFallback
      isBaseTokenDepositEnabled: false,
      isShareTokenDepositsEnabled: true,
    },
    withdrawOptions: {
      // There is no base token for cbeth, hence we specify the baseTokenFallback
      isBaseTokenWithdrawalEnabled: false,
      isShareTokenWithdrawalEnabled: true,
    },
    poolConfig,
  };

  return {
    baseTokenConfig: {
      address: poolConfig.baseToken,
      chainId: mainnet.id,
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      places: 4,
      tags: [],
      iconUrl: ETH_ICON_URL,
      priceOracle: "defillama",
    },
    sharesTokenConfig,
    hyperdriveConfig,
  };
}
