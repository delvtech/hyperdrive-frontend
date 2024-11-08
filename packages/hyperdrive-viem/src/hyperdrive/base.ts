import {
  ReadHyperdrive as BaseReadHyperdrive,
  ReadHyperdriveOptions as BaseReadHyperdriveOptions,
  ReadWriteHyperdrive as BaseReadWriteHyperdrive,
  ReadWriteHyperdriveOptions as BaseReadWriteHyperdriveOptions,
} from "@delvtech/hyperdrive-js";
import { ViemReadClientOptions, viemReadMixin } from "src/viem/viemReadMixin";
import {
  ViemReadWriteClientOptions,
  viemReadWriteMixin,
} from "src/viem/viemReadWriteMixin";

export interface ReadHyperdriveOptions
  extends ViemReadClientOptions<BaseReadHyperdriveOptions> {}

export class ReadHyperdrive extends viemReadMixin(BaseReadHyperdrive) {}

export interface ReadWriteHyperdriveOptions
  extends ViemReadWriteClientOptions<BaseReadWriteHyperdriveOptions> {}

export class ReadWriteHyperdrive extends viemReadWriteMixin(
  BaseReadWriteHyperdrive,
) {}
