import {
  AppConfig,
  cloudChainAppConfig,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";
import { foundry, mainnet, sepolia } from "viem/chains";
import { useChainId } from "wagmi";

export function useAppConfig(): AppConfig {
  const chainId = useChainId() as SupportedChainId;
  console.log(chainId);
  switch (chainId) {
    case foundry.id:
      // Return local config when available
      return {} as AppConfig;

    case 42069: // cloudchain
      // Return cloudchain config when available
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
