import {
  AppConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import uniqBy from "lodash.uniqby";
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
      tokens: uniqBy(
        [...appConfig.tokens, ...tokenList],
        (token) => `${token.address}-${token.chainId}`,
      ),
    };
  }

  return appConfig;
}
