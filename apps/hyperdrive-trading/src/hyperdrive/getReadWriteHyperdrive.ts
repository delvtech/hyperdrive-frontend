import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
  ReadWriteMetaMorphoHyperdrive,
  ReadWriteStEthHyperdrive,
} from "@delvtech/hyperdrive-viem";
import {
  ReadWriteHyperdrive_v1_0_14,
  ReadWriteStEthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-viem/v1.0.14";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import semver from "semver";
import { sdkCache } from "src/sdk/sdkCache";
import { failedRequestToast } from "src/ui/base/components/Toaster/failedRequestToast";
import { Address, PublicClient, WalletClient } from "viem";

export async function getReadWriteHyperdrive({
  hyperdriveAddress,
  publicClient,
  walletClient,
  appConfig,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  appConfig: AppConfig;
}): Promise<ReadWriteHyperdrive> {
  let hyperdrive: ReadWriteHyperdrive;

  const options: ReadWriteHyperdriveOptions = {
    address: hyperdriveAddress,
    publicClient,
    walletClient,
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
      hyperdrive = new ReadWriteStEthHyperdrive(options);

      // <= v1.0.14
      if (await isV1_0_14(hyperdrive)) {
        return new ReadWriteStEthHyperdrive_v1_0_14(options);
      }

      return hyperdrive;
    }

    // morpho
    if (
      ["morphoSusdeDai", "morphoUsdeDai"].includes(hyperdriveConfig.yieldSource)
    ) {
      hyperdrive = new ReadWriteMetaMorphoHyperdrive(options);

      return hyperdrive;
    }

    // base

    hyperdrive = new ReadWriteHyperdrive(options);

    // <= v1.0.14
    if (await isV1_0_14(hyperdrive)) {
      return new ReadWriteHyperdrive_v1_0_14(options);
    }

    return hyperdrive;
  } catch (error) {
    failedRequestToast();
    console.error(error);
    return new ReadWriteHyperdrive(options);
  }
}

async function isV1_0_14(hyperdrive: ReadWriteHyperdrive): Promise<boolean> {
  const version = await hyperdrive.getVersion();
  return semver.lte(version.string, "1.0.14");
}
