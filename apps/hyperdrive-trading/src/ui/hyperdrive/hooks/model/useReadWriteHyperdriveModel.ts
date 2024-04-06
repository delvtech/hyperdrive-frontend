import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import {
  IReadWriteHyperdriveModel,
  ReadWriteHyperdriveModel,
} from "src/hyperdrive/model/ReadWriteHyperdriveModel";
import { ReadWriteStethHyperdriveModel } from "src/hyperdrive/model/steth/ReadWriteStethHyperdriveModel";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsSteth } from "src/vaults/isSteth";
import { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdriveModel(
  hyperdriveAddress: Address | undefined,
): IReadWriteHyperdriveModel | undefined {
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const appConfig = useAppConfig();

  return useMemo(() => {
    if (!hyperdriveAddress || !publicClient || !appConfig || !walletClient) {
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
      return new ReadWriteStethHyperdriveModel({
        hyperdriveAddress,
        appConfig,
        publicClient,
        walletClient,
      });
    }

    return new ReadWriteHyperdriveModel({
      hyperdriveAddress,
      appConfig,
      publicClient,
      walletClient,
    });
  }, [hyperdriveAddress, publicClient, walletClient, appConfig]);
}
