import {
  AppConfig,
  isMainnetChain,
  mainnetAppConfig,
  testnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useChainId } from "wagmi";

export function useAppConfigForConnectedChain(): AppConfig {
  const connectedChainId = useChainId();

  return isMainnetChain(connectedChainId) ? mainnetAppConfig : testnetAppConfig;
}
