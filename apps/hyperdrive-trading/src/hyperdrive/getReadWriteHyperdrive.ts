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
import { TokenConfig } from "@hyperdrive/appconfig";
import semver from "semver";
import { sdkCache } from "src/sdk/sdkCache";
import { getIsMetaMorpho } from "src/vaults/isMetaMorpho";
import { getIsSteth } from "src/vaults/isSteth";
import { Address, PublicClient, WalletClient } from "viem";

export async function getReadWriteHyperdrive({
  hyperdriveAddress,
  publicClient,
  walletClient,
  sharesToken,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  walletClient: WalletClient;
  sharesToken: TokenConfig<any>;
}): Promise<ReadWriteHyperdrive> {
  let hyperdrive: ReadWriteHyperdrive;

  const options: ReadWriteHyperdriveOptions = {
    address: hyperdriveAddress,
    publicClient,
    walletClient,
    cache: sdkCache,
    namespace: publicClient.chain?.id.toString(),
  };

  // steth

  const isSteth = getIsSteth(sharesToken);
  if (isSteth) {
    hyperdrive = new ReadWriteStEthHyperdrive(options);

    // <= v1.0.14
    if (await isV1_0_14(hyperdrive)) {
      return new ReadWriteStEthHyperdrive_v1_0_14(options);
    }

    return hyperdrive;
  }

  // morpho

  const isMetaMorpho = getIsMetaMorpho(sharesToken);
  if (isMetaMorpho) {
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
}

async function isV1_0_14(hyperdrive: ReadWriteHyperdrive): Promise<boolean> {
  const version = await hyperdrive.getVersion();
  return semver.lte(version.string, "1.0.14");
}
