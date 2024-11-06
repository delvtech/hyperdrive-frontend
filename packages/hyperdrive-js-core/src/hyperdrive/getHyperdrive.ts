import { Drift, ReadWriteAdapter } from "@delvtech/drift";
import semver from "semver";
import { hyperdriveAbi } from "src/hyperdrive/base/abi";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/base/ReadWriteHyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadWriteHyperdrive_v1_0_14";
import { ReadStEthHyperdrive } from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadWriteStEthHyperdrive } from "src/hyperdrive/steth/ReadWriteStEthHyperdrive";
import { ReadStEthHyperdrive_v1_0_14 } from "src/hyperdrive/steth/v1.0.14/ReadStEthHyperdrive_v1_0_14";
import { ReadWriteStEthHyperdrive_v1_0_14 } from "src/hyperdrive/steth/v1.0.14/ReadWriteStEthHyperdrive_v1_0_14";

export interface HyperdriveOptions<T extends Drift = Drift>
  extends ReadHyperdriveOptions {
  drift: T;
}

export type Hyperdrive<T extends Drift = Drift> =
  T extends Drift<ReadWriteAdapter> ? ReadWriteHyperdrive : ReadHyperdrive;

export async function getHyperdrive<T extends Drift = Drift>({
  address,
  drift,
  cache = drift.cache,
  cacheNamespace,
  earliestBlock,
  debugName,
}: HyperdriveOptions<T>): Promise<Hyperdrive<T>> {
  cacheNamespace ??= await drift.getChainId();

  const options: HyperdriveOptions<T> = {
    address,
    drift,
    cache,
    cacheNamespace,
    earliestBlock,
    debugName,
  };
  const isReadWrite = isReadWriteOptions(options);

  const version = await drift.read({
    abi: hyperdriveAbi,
    address,
    fn: "version",
    cacheNamespace,
  });
  const isV1_0_14 = semver.lte(version, "1.0.14");

  const kind = isV1_0_14
    ? undefined
    : await drift.read({
        abi: hyperdriveAbi,
        address,
        fn: "kind",
        cacheNamespace,
      });

  switch (kind) {
    case "StETHHyperdrive":
      if (isReadWrite && isV1_0_14) {
        return new ReadWriteStEthHyperdrive_v1_0_14(options);
      }

      if (isReadWrite) {
        return new ReadWriteStEthHyperdrive(options);
      }

      if (isV1_0_14) {
        return new ReadStEthHyperdrive_v1_0_14(options) as any;
      }

      return new ReadStEthHyperdrive(options) as any;

    default:
      if (isReadWrite && isV1_0_14) {
        return new ReadWriteHyperdrive_v1_0_14(options);
      }

      if (isReadWrite) {
        return new ReadWriteHyperdrive(options);
      }

      if (isV1_0_14) {
        return new ReadHyperdrive_v1_0_14(options) as any;
      }

      return new ReadHyperdrive(options) as any;
  }
}

function isReadWriteOptions(
  options: HyperdriveOptions,
): options is ReadWriteHyperdriveOptions {
  return typeof options.drift.write === "function";
}
