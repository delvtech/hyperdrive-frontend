import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { ETH_MAGIC_NUMBER } from "src/tokens/ETH_MAGIC_NUMBER";
import { getTokenConfig, TokenConfig } from "src/tokens/getTokenConfig";
import { STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { yieldSources } from "src/yieldSources";
export async function getGnosisWstethHyperdrive({
  hyperdrive,
  forkBlock,
}: {
  hyperdrive: ReadHyperdrive;
  forkBlock?: bigint;
}): Promise<{
  sharesTokenConfig: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const chainId = await hyperdrive.network.getChainId();
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  // safe to cast here because we know the pool was initialized
  const initializationBlock = (
    await hyperdrive.getInitializationBlock({ fromBlock: forkBlock })
  ).blockNumber as bigint;

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
    initializationBlock,
    address: hyperdrive.address,
    version: version.string,
    name: hyperdriveName,
    decimals: await hyperdrive.getDecimals(),
    yieldSource: "gnosisWsteth",
    baseTokenFallback: {
      address: ETH_MAGIC_NUMBER,
      chainId: 1,
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
    sharesTokenConfig,
    hyperdriveConfig,
  };
}
