import {
  ReadFactory as BaseReadFactory,
  ReadFactoryOptions as BaseReadFactoryOptions,
  ReadWriteFactory as BaseReadWriteFactory,
  ReadWriteFactoryOptions as BaseReadWriteFactoryOptions,
} from "@delvtech/hyperdrive-js-core";
import { ViemReadClientOptions, viemReadMixin } from "src/viem/viemReadMixin";
import {
  ViemReadWriteClientOptions,
  viemReadWriteMixin,
} from "src/viem/viemReadWriteMixin";

export interface ReadFactoryOptions
  extends ViemReadClientOptions<BaseReadFactoryOptions> {}

export class ReadFactory extends viemReadMixin(BaseReadFactory) {}

export interface ReadWriteFactoryOptions
  extends ViemReadWriteClientOptions<BaseReadWriteFactoryOptions> {}

export class ReadWriteFactory extends viemReadWriteMixin(
  BaseReadWriteFactory,
) {}
