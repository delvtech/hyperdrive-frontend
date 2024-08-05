import * as core from "@delvtech/hyperdrive-js-core";
import {
  type ViemReadModelOptions,
  viemReadMixin,
} from "src/viem/viemReadMixin";
import {
  type ViemReadWriteModelOptions,
  viemReadWriteMixin,
} from "src/viem/viemReadWriteMixin";

export interface ReadHyperdriveOptions
  extends ViemReadModelOptions<core.ReadHyperdriveOptions> {}

export class ReadHyperdrive extends viemReadMixin(core.ReadHyperdrive) {}

export interface ReadWriteHyperdriveOptions
  extends ViemReadWriteModelOptions<core.ReadWriteHyperdriveOptions> {}

export class ReadWriteHyperdrive extends viemReadWriteMixin(
  core.ReadWriteHyperdrive,
) {}
