import {
  AppConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@hyperdrive/appconfig";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const connectedChainId = useChainId();

  return isMainnetChain(connectedChainId) ? mainnetAppConfig : testnetAppConfig;
}
