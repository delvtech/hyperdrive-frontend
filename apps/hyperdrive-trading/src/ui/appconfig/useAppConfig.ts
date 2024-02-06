import {
  AppConfig,
  cloudChainAppConfig,
  localChainAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig | undefined {
  const chainId = useChainId() as SupportedChainId;

  switch (chainId) {
    case 31337:
      return localChainAppConfig;
    case 42069:
      return cloudChainAppConfig;

    default:
      assertNever(chainId);
  }
}
