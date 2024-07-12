import {
  AppConfig,
  cloudChainAppConfig,
  mainnetAppConfig,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import assertNever from "assert-never";
import { ZERO_ADDRESS } from "src/base/constants";
import { SupportedChainId } from "src/chains/supportedChains";
import { b3Sepolia } from "src/network/b3Sepolia";
import { baseSepolia, foundry, mainnet, sepolia } from "viem/chains";
import { useChainId } from "wagmi";

const emptyAppConfig: AppConfig = {
  chainId: 0,
  tags: [],
  registryAddress: ZERO_ADDRESS,
  hyperdrives: [],
  tokens: [],
  protocols: {},
};

const baseSepoliaAppConfig: AppConfig = {
  ...emptyAppConfig,
  chainId: 84532,
};

const b3SepoliaAppConfig: AppConfig = {
  ...emptyAppConfig,
  chainId: 1993,
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
      assertNever(chainId);
  }
}
