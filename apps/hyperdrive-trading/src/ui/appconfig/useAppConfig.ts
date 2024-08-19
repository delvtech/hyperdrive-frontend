import {
  AppConfig,
  cloudChainAppConfig,
  mainnetAppConfig,
  protocols,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { ZERO_ADDRESS } from "src/base/constants";
import { SupportedChainId } from "src/chains/supportedChains";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";
import { useChainId } from "wagmi";

const baseSepoliaAppConfig: AppConfig = {
  chains: {},
  registries: {
    [baseSepolia.id]: ZERO_ADDRESS,
  },
  hyperdrives: [],
  tokens: [],
  protocols: protocols,
  yieldSources: {} as any,
};

const b3SepoliaAppConfig: AppConfig = {
  chains: {},
  registries: {
    [b3Sepolia.id]: ZERO_ADDRESS,
  },
  hyperdrives: [],
  tokens: [],
  protocols: protocols,
  yieldSources: {} as any,
};

export function useAppConfig(): AppConfig {
  const chainId = useChainId() as SupportedChainId;
  switch (chainId) {
    case foundry.id:
      // Return local config when available
      return {} as AppConfig;

    case 42069: // cloudchain
      return cloudChainAppConfig;

    case mainnet.id:
      return mainnetAppConfig;

    case sepolia.id:
      return sepoliaAppConfig;

    case baseSepolia.id:
      return baseSepoliaAppConfig;

    case b3Sepolia.id:
      return b3SepoliaAppConfig;

    default:
      assertNever(chainId, true);
  }
}
