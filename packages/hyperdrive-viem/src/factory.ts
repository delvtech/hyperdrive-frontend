import * as core from "@delvtech/hyperdrive-js-core/factory/model";
import { viemReadMixin, ViemReadModelOptions } from "src/viem/viemReadMixin";
import {
  viemReadWriteMixin,
  ViemReadWriteModelOptions,
} from "src/viem/viemReadWriteMixin";

export interface ReadFactoryOptions
  extends ViemReadModelOptions<core.ReadFactoryOptions> {}

export class ReadFactory extends viemReadMixin(core.ReadFactory) {}

export interface ReadWriteFactoryOptions
  extends ViemReadWriteModelOptions<core.ReadWriteFactoryOptions> {}

export class ReadWriteFactory extends viemReadWriteMixin(
  core.ReadWriteFactory
) {}
