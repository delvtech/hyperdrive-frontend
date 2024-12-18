import {
  appConfig,
  getBaseToken,
  getToken,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";

import { ZERO_ADDRESS } from "@delvtech/drift";

// TODO: Move this into the appconfig package.
export function getDepositAssets(hyperdrive: HyperdriveConfig): TokenConfig[] {
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
