import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
  ReadMetaMorphoHyperdrive,
  ReadStEthHyperdrive,
} from "@delvtech/hyperdrive-viem";
import {
  ReadHyperdrive_v1_0_14,
  ReadMetaMorphoHyperdrive_v1_0_14,
  ReadStEthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-viem/v1.0.14";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import semver from "semver";
import { sdkCache } from "src/sdk/sdkCache";
import { failedRequestToast } from "src/ui/base/components/Toaster/failedRequestToast";
import { Address, PublicClient } from "viem";

export async function getReadHyperdrive({
  hyperdriveAddress,
  publicClient,
  appConfig,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  appConfig: AppConfig;
}): Promise<ReadHyperdrive> {
  let hyperdrive: ReadHyperdrive;

  const options: ReadHyperdriveOptions = {
    address: hyperdriveAddress,
    publicClient,
    cache: sdkCache,
    namespace: publicClient.chain?.id.toString(),
  };

  try {
    // steth

    const hyperdriveConfig = findHyperdriveConfig({
      hyperdriveAddress,
      hyperdrives: appConfig.hyperdrives,
    });

    if (hyperdriveConfig.yieldSource === "lidoSteth") {
      hyperdrive = new ReadStEthHyperdrive(options);

      // <= v1.0.14
      if (await isV1_0_14(hyperdrive)) {
        return new ReadStEthHyperdrive_v1_0_14(options);
      }

      return hyperdrive;
    }

    // morpho
    if (
      ["morphoSusdeDai", "morphoUsdeDai"].includes(hyperdriveConfig.yieldSource)
    ) {
      hyperdrive = new ReadMetaMorphoHyperdrive(options);

      // <= v1.0.14
      if (await isV1_0_14(hyperdrive)) {
        return new ReadMetaMorphoHyperdrive_v1_0_14(options);
      }

      return hyperdrive;
    }

    // base

    hyperdrive = new ReadHyperdrive(options);

    // <= v1.0.14
    if (await isV1_0_14(hyperdrive)) {
      return new ReadHyperdrive_v1_0_14(options);
    }

    return hyperdrive;
  } catch (error) {
    failedRequestToast();
    console.error(error);
    return new ReadHyperdrive(options);
  }
}

async function isV1_0_14(hyperdrive: ReadHyperdrive): Promise<boolean> {
  const version = await hyperdrive.getVersion();
  return semver.lte(version.string, "1.0.14");
}
