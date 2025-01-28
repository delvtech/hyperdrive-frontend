import { ZERO_ADDRESS } from "@delvtech/drift";
import {
  AppConfig,
  HyperdriveConfig,
  TokenConfig,
  getBaseToken,
  getToken,
} from "@delvtech/hyperdrive-appconfig";

// TODO: Move this to the appconfig
export function getDepositAssets(
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
): TokenConfig[] {
  const depositAssets: TokenConfig[] = [];
  if (hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
    const baseToken = getBaseToken({
      hyperdriveChainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      appConfig,
    });
    depositAssets.push(baseToken);
  }

  if (hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
    const sharesToken = getToken({
      chainId: hyperdrive.chainId,
      tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
      appConfig,
    });
    if (sharesToken && sharesToken.address !== ZERO_ADDRESS) {
      depositAssets.push(sharesToken);
    }
  }
  return depositAssets;
}
