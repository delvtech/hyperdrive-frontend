import {
  AppConfig,
  findHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
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
  const hyperdriveConfig = findHyperdriveConfig({
    hyperdriveChainId: publicClient.chain?.id as number,
    hyperdriveAddress,
    hyperdrives: appConfig.hyperdrives,
  });
  const options: ReadWriteHyperdriveOptions = {
    address: hyperdriveAddress,
    publicClient,
    walletClient,
    cache: sdkCache,
    namespace: publicClient.chain?.id.toString(),
    earliestBlock: hyperdriveConfig.initializationBlock,
  };

  try {
    // steth
    if (hyperdriveConfig.kind === "StETHHyperdrive") {
      hyperdrive = new ReadWriteStEthHyperdrive(options);

      // <= v1.0.14
      if (await isV1_0_14(hyperdrive)) {
        return new ReadWriteStEthHyperdrive_v1_0_14(options);
      }

      return hyperdrive;
    }

    // morpho
    if (hyperdriveConfig.kind === "MorphoBlueHyperdrive") {
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
