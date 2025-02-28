import "src/base/makeQueryKey";
import { Address } from "viem";

interface VaultQueryKeys {
  vaultRate: {
    chainId: number;
    hyperdriveAddress: Address | undefined;
    excludeBigShortEnergy: boolean;
  };
}

declare module "src/base/makeQueryKey" {
  interface QueryKeys {
    vaults: VaultQueryKeys;
  }
}
