import {
  AppConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@hyperdrive/appconfig";
import { useChainId } from "wagmi";

export function useAppConfigForConnectedChain(): AppConfig {
  const connectedChainId = useChainId();

  return isMainnetChain(connectedChainId) ? mainnetAppConfig : testnetAppConfig;
}
