import {
  ReadStEthHyperdrive as BaseReadStEthHyperdrive,
  ReadStEthHyperdriveOptions as BaseReadStEthHyperdriveOptions,
  ReadWriteStEthHyperdrive as BaseReadWriteStEthHyperdrive,
  ReadWriteStEthHyperdriveOptions as BaseReadWriteStEthHyperdriveOptions,
} from "@delvtech/hyperdrive-js";
import { ViemReadClientOptions, viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export interface ReadStEthHyperdriveOptions
  extends ViemReadClientOptions<BaseReadStEthHyperdriveOptions> {}

export class ReadStEthHyperdrive extends viemReadMixin(
  BaseReadStEthHyperdrive,
) {}

export interface ReadWriteStEthHyperdriveOptions
  extends ViemReadClientOptions<BaseReadWriteStEthHyperdriveOptions> {}

export class ReadWriteStEthHyperdrive extends viemReadWriteMixin(
  BaseReadWriteStEthHyperdrive,
) {}
