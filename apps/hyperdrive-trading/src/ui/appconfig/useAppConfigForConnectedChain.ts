import {
  AppConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useTokenList } from "src/ui/tokenlist/useTokenList";
import { useChainId } from "wagmi";

export function useAppConfigForConnectedChain(): AppConfig {
  const connectedChainId = useChainId();

  const appConfig = isMainnetChain(connectedChainId)
    ? mainnetAppConfig
    : testnetAppConfig;

  // Add any zap tokens to the appConfig using uniswap's tokenlist
  const { isFlagEnabled } = useFeatureFlag("zaps");
  const { tokenList } = useTokenList({
    chainId: connectedChainId,
    enabled: isFlagEnabled,
  });
  if (tokenList) {
    return {
      ...appConfig,
      tokens: [...appConfig.tokens, ...tokenList],
    };
  }

  return appConfig;
}
