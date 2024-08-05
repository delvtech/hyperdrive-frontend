import * as core from "@delvtech/hyperdrive-js-core/factory/model";
import {
  type ViemReadModelOptions,
  viemReadMixin,
} from "src/viem/viemReadMixin";
import {
  type ViemReadWriteModelOptions,
  viemReadWriteMixin,
} from "src/viem/viemReadWriteMixin";

export interface ReadFactoryOptions
  extends ViemReadModelOptions<core.ReadFactoryOptions> {}

export class ReadFactory extends viemReadMixin(core.ReadFactory) {}

export interface ReadWriteFactoryOptions
  extends ViemReadWriteModelOptions<core.ReadWriteFactoryOptions> {}

export class ReadWriteFactory extends viemReadWriteMixin(
  core.ReadWriteFactory,
) {}
