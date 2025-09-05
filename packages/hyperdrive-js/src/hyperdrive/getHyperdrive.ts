import {
  Drift,
  ReadWriteAdapter,
  type ReadAdapter,
  type WriteAdapter,
} from "@delvtech/drift";
import semver from "semver";
import { hyperdriveAbi } from "src/hyperdrive/abi";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

export interface HyperdriveOptions<T extends Drift = Drift>
  extends ReadHyperdriveOptions {
  drift: T;
}

export type Hyperdrive<T extends Drift = Drift> =
  T["adapter"] extends ReadWriteAdapter
    ? ReadWriteHyperdrive
    : T["adapter"] extends ReadAdapter & {
          [K in keyof WriteAdapter]?: never;
        }
      ? ReadHyperdrive
      : ReadHyperdrive & Partial<ReadWriteHyperdrive>;

export async function getHyperdrive<T extends Drift = Drift>(
  options: HyperdriveOptions<T>,
): Promise<Hyperdrive<T>> {
  const { address, drift } = options;
  const isReadWrite = isReadWriteOptions(options);

  const version = await drift.read({
    abi: hyperdriveAbi,
    address,
    fn: "version",
  });
  const isV1_0_14 = semver.lte(version, "1.0.14");

  if (isV1_0_14) {
    return isReadWrite
      ? new ReadWriteHyperdrive_v1_0_14(options)
      : (new ReadHyperdrive_v1_0_14(options) as Hyperdrive<T>);
  }

  return isReadWrite
    ? new ReadWriteHyperdrive(options)
    : (new ReadHyperdrive(options) as Hyperdrive<T>);
}

function isReadWriteOptions(
  options: HyperdriveOptions,
): options is ReadWriteHyperdriveOptions {
  return options.drift.isReadWrite();
}
