import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import {
  BaseHyperdriveModel,
  IHyperdriveModel,
} from "src/hyperdrive/BaseHyperdriveModel";
import { StethHyperdriveModel } from "src/hyperdrive/steth/StethHyperdriveModel";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsSteth } from "src/vaults/isSteth";
import { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useHyperdriveModel(
  hyperdriveAddress: Address | undefined,
): IHyperdriveModel | undefined {
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const appConfig = useAppConfig();

  return useMemo(() => {
    if (!hyperdriveAddress || !publicClient || !walletClient || !appConfig) {
      return undefined;
    }
    const hyperdriveConfig = findHyperdriveConfig({
      hyperdriveAddress,
      hyperdrives: appConfig.hyperdrives,
    });
    const sharesToken = findYieldSourceToken({
      yieldSourceTokenAddress: hyperdriveConfig.sharesToken,
      tokens: appConfig.tokens,
    });
    const isSteth = getIsSteth(sharesToken);
    if (isSteth) {
      return new StethHyperdriveModel({
        hyperdriveAddress,
        appConfig,
        publicClient,
        walletClient,
      });
    }

    return new BaseHyperdriveModel({
      hyperdriveAddress,
      appConfig,
      publicClient,
      walletClient,
    });
  }, [hyperdriveAddress, publicClient, walletClient, appConfig]);
}
