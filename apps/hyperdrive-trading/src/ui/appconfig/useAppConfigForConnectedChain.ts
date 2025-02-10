import {
  AppConfig,
  // eslint-disable-next-line no-restricted-imports
  appConfig as appConfigFromImport,
  HyperdriveConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import uniqBy from "lodash.uniqby";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useTokenList } from "src/ui/tokenlist/useTokenList";
import { useChainId } from "wagmi";

interface UseAppConfigForConnectedChainOptions {
  /**
   * Only include configurations for the connected chain. If false, this will
   * include both testnet/forks and mainnet chains. Defaults to true.
   */
  strict?: boolean;
}
export function useAppConfigForConnectedChain(
  options: UseAppConfigForConnectedChainOptions = { strict: true },
): AppConfig {
  const connectedChainId = useChainId();

  let appConfig = appConfigFromImport;
  if (options.strict) {
    appConfig = isMainnetChain(connectedChainId)
      ? mainnetAppConfig
      : testnetAppConfig;
  }

  // Add any zap tokens to the appConfig using uniswap's tokenlist
  const { isFlagEnabled } = useFeatureFlag("zaps");
  const { tokenList } = useTokenList({
    chainId: connectedChainId,
    enabled: isFlagEnabled,
  });
  if (tokenList) {
    return {
      ...appConfig,
      hyperdrives: [
        appConfig.hyperdrives.find(
          (hyperdrive) =>
            hyperdrive.address === "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
        ) as HyperdriveConfig,
      ],
      tokens: uniqBy(
        [...appConfig.tokens, ...tokenList],
        (token) => `${token.address}-${token.chainId}`,
      ),
    };
  }

  return appConfigFromImport;
}
