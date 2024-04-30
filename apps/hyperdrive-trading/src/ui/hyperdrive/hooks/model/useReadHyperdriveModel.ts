import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { ReadMetaMorphoHyperdriveModel } from "src/hyperdrive/model/MetaMorpho/ReadMetaMorphoHyperdriveModel";
import {
  IReadHyperdriveModel,
  ReadHyperdriveModel,
} from "src/hyperdrive/model/ReadHyperdriveModel";
import { ReadStethHyperdriveModel } from "src/hyperdrive/model/steth/ReadStethHyperdriveModel";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsMetaMorpho } from "src/vaults/isMetaMorpho";
import { getIsSteth } from "src/vaults/isSteth";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

/**
 * @deprecated use useReadHyperdrive instead to get back an sdk instance instead
 * of a model
 */
export function useReadHyperdriveModel(
  hyperdriveAddress: Address | undefined,
): IReadHyperdriveModel | undefined {
  const publicClient = usePublicClient();
  const appConfig = useAppConfig();

  return useMemo(() => {
    if (!hyperdriveAddress || !publicClient || !appConfig) {
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
      return new ReadStethHyperdriveModel({
        hyperdriveAddress,
        appConfig,
        publicClient,
      });
    }

    const isMetaMorpho = getIsMetaMorpho(sharesToken);
    if (isMetaMorpho) {
      return new ReadMetaMorphoHyperdriveModel({
        hyperdriveAddress,
        appConfig,
        publicClient,
      });
    }

    return new ReadHyperdriveModel({
      hyperdriveAddress,
      appConfig,
      publicClient,
    });
  }, [hyperdriveAddress, publicClient, appConfig]);
}
