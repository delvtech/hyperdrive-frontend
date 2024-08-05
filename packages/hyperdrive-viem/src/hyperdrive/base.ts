import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin, ViemReadModelOptions } from "src/viem/viemReadMixin";
import {
  viemReadWriteMixin,
  ViemReadWriteModelOptions,
} from "src/viem/viemReadWriteMixin";

export interface ReadHyperdriveOptions
  extends ViemReadModelOptions<core.ReadHyperdriveOptions> {}

export class ReadHyperdrive extends viemReadMixin(core.ReadHyperdrive) {}

export interface ReadWriteHyperdriveOptions
  extends ViemReadWriteModelOptions<core.ReadWriteHyperdriveOptions> {}

export class ReadWriteHyperdrive extends viemReadWriteMixin(
  core.ReadWriteHyperdrive,
) {}
