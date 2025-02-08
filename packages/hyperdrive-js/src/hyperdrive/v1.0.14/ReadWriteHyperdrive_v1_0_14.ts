import { ReadWriteAdapter } from "@delvtech/drift";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { V1_0_14Mixin } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";

export class ReadWriteHyperdrive_v1_0_14<
  A extends ReadWriteAdapter = ReadWriteAdapter,
> extends V1_0_14Mixin(ReadWriteHyperdrive)<A> {}
