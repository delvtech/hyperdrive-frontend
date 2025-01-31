import {
  AppConfig,
  getBaseToken,
  getToken,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address } from "viem";

/**
 * Returns back a list of token options for depositing into the given hyperdrive
 */
export function useTokenDepositOptions({
  hyperdrive,
  account,
  appConfig,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  appConfig: AppConfig;
}): {
  baseTokenDepositEnabled: boolean;
  baseToken: TokenConfig;
  sharesToken: TokenConfig | undefined;
  tokenOptions: {
    tokenConfig: TokenConfig;
    tokenBalance: bigint | undefined;
  }[];
} {
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    appConfig,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    decimals: hyperdrive.decimals,
  });

  const baseTokenDepositEnabled =
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;
  const shareTokenDepositsEnabled =
    hyperdrive.depositOptions.isShareTokenDepositsEnabled;

  const tokenOptions = [];
  if (baseTokenDepositEnabled) {
    tokenOptions.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (sharesToken && shareTokenDepositsEnabled) {
    tokenOptions.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }
  return { baseTokenDepositEnabled, baseToken, tokenOptions, sharesToken };
}
