import {
  AppConfig,
  cloudChainAppConfig,
  localChainAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId() as SupportedChainId;

  switch (chainId) {
    case 31337:
      return localChainAppConfig;
    case 42069:
      return cloudChainAppConfig;
    case 1:
      // Return mainnet config when available
      return {} as AppConfig;
    case 5:
      // Return goerli config when available
      return {} as AppConfig;
    default:
      assertNever(chainId);
  }
}
