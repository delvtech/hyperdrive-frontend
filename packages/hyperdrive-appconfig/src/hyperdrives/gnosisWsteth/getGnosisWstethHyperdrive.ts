import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { ETH_MAGIC_NUMBER } from "src/tokens/ETH_MAGIC_NUMBER";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { ETH_ICON_URL, STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";
import { mainnet } from "viem/chains";
export async function getGnosisWstethHyperdrive({
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
    iconUrl: STETH_ICON_URL, // TODO: is there a wsteth icon we should use?
    places: 4,
  });

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources.gnosisWsteth.shortName,
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
    yieldSource: "gnosisWsteth",
    baseTokenFallback: {
      address: ETH_MAGIC_NUMBER,
      chainId: mainnet.id,
    },
    depositOptions: {
      // there is no lido deployment on gnosis, so hyperdrive cannot
      // deposit eth for you
      isBaseTokenDepositEnabled: false,
      isShareTokenDepositsEnabled: true,
    },
    withdrawOptions: {
      // there is no lido deployment on gnosis, but even if there was,
      // hyperdrive can't withdraw eth from lido
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
    },
    sharesTokenConfig,
    hyperdriveConfig,
  };
}
