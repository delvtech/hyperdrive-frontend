import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import { ETH_ICON_URL, STETH_ICON_URL } from "src/tokens/tokenIconsUrls";
import { TokenConfig } from "src/tokens/types";
import { yieldSources } from "src/yieldSources/yieldSources";
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
  const chainId = await hyperdrive.drift.getChainId();
  const version = await hyperdrive.getVersion();
  const poolConfig = await hyperdrive.getPoolConfig();

  const initializationBlock = await hyperdrive.getInitializationBlock();

  const sharesToken = await hyperdrive.getSharesToken();
  const sharesTokenConfig = await getTokenConfig({
    token: sharesToken,
    tags: ["liquidStakingToken"],
    iconUrl: STETH_ICON_URL,
    places: 4,
    priceOracle: "defillama",
  });

  const baseTokenConfig: TokenConfig = {
    address: poolConfig.baseToken,
    chainId: await hyperdrive.drift.getChainId(),
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    places: 4,
    tags: [],
    iconUrl: ETH_ICON_URL,
    priceOracle: "defillama",
  };

  const hyperdriveName = formatHyperdriveName({
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: yieldSources.lidoSteth.shortName,
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
    // steth is pegged to eth, so when using steth (the shares token) we will
    // treat it as eth and convert that amount to lido shares
    isSharesPeggedToBase: true,
    poolConfig,
  };

  return {
    sharesTokenConfig,
    baseTokenConfig,
    hyperdriveConfig,
  };
}
