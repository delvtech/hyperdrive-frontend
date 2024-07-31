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
import { TokenConfig } from "@hyperdrive/appconfig";
import semver from "semver";
import { sdkCache } from "src/sdk/sdkCache";
import { getIsMetaMorpho } from "src/vaults/isMetaMorpho";
import { getIsSteth } from "src/vaults/isSteth";
import { Address, PublicClient } from "viem";

export async function getReadHyperdrive({
  hyperdriveAddress,
  publicClient,
  sharesToken,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  sharesToken: TokenConfig<any>;
}): Promise<ReadHyperdrive> {
  let hyperdrive: ReadHyperdrive;

  const options: ReadHyperdriveOptions = {
    address: hyperdriveAddress,
    publicClient,
    cache: sdkCache,
    namespace: publicClient.chain?.id.toString(),
  };

  // steth

  const isSteth = getIsSteth(sharesToken);
  if (isSteth) {
    hyperdrive = new ReadStEthHyperdrive(options);

    // <= v1.0.14
    if (await isV1_0_14(hyperdrive)) {
      return new ReadStEthHyperdrive_v1_0_14(options);
    }

    return hyperdrive;
  }

  // morpho

  const isMetaMorpho = getIsMetaMorpho(sharesToken);
  if (isMetaMorpho) {
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
}

async function isV1_0_14(hyperdrive: ReadHyperdrive): Promise<boolean> {
  const version = await hyperdrive.getVersion();
  return semver.lte(version.string, "1.0.14");
}
