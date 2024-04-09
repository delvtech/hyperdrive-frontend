import {
  AppConfig,
  cloudChainAppConfig,
  localChainAppConfig,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, mainnet, sepolia } from "viem/chains";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId() as SupportedChainId;

  switch (chainId) {
    case foundry.id:
      return localChainAppConfig;
    case 42069: // cloudchain
      return cloudChainAppConfig;
    case mainnet.id:
      // Return mainnet config when available
      return {} as AppConfig;
    case sepolia.id:
      return sepoliaAppConfig;
    default:
      assertNever(chainId);
  }
}
