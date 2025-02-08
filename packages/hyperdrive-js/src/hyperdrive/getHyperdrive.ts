import { Adapter, createDrift, Drift, ReadWriteAdapter } from "@delvtech/drift";
import semver from "semver";
import { SdkContractConfig } from "src/drift/SdkClient";
import { hyperdriveAbi } from "src/hyperdrive/abi";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

export type Hyperdrive<A extends Adapter = Adapter> = A extends ReadWriteAdapter
  ? ReadWriteHyperdrive
  : ReadHyperdrive;

export type GetHyperdriveParams<A extends Adapter = Adapter> =
  A extends ReadWriteAdapter ? SdkContractConfig<A> : SdkContractConfig<A>;

export async function getHyperdrive<A extends Adapter = Adapter>({
  address,
  drift = createDrift() as Drift<A>,
  earliestBlock,
  debugName,
}: GetHyperdriveParams<A>): Promise<Hyperdrive<A>> {
  const isReadWrite = drift.isReadWrite();

  const version = await drift.read({
    abi: hyperdriveAbi,
    address,
    fn: "version",
  });
  const isV1_0_14 = semver.lte(version, "1.0.14");

  if (isReadWrite && isV1_0_14) {
    return new ReadWriteHyperdrive_v1_0_14({
      address,
      drift,
      earliestBlock,
      debugName,
    });
  }

  if (isReadWrite) {
    return new ReadWriteHyperdrive({
      address,
      drift,
      earliestBlock,
      debugName,
    });
  }

  if (isV1_0_14) {
    return new ReadHyperdrive_v1_0_14({
      address,
      drift,
      earliestBlock,
      debugName,
    }) as Hyperdrive as Hyperdrive<A>;
  }

  return new ReadHyperdrive({
    address,
    drift,
    earliestBlock,
    debugName,
  }) as Hyperdrive as Hyperdrive<A>;
}
