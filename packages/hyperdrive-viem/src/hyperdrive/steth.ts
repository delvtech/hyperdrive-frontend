import * as core from "@delvtech/hyperdrive-js-core";
import {
  type ViemReadModelOptions,
  viemReadMixin,
} from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export interface ReadStEthHyperdriveOptions
  extends ViemReadModelOptions<core.ReadStEthHyperdriveOptions> {}

export class ReadStEthHyperdrive extends viemReadMixin(
  core.ReadStEthHyperdrive,
) {}

export interface ReadWriteStEthHyperdriveOptions
  extends ViemReadModelOptions<core.ReadWriteStEthHyperdriveOptions> {}

export class ReadWriteStEthHyperdrive extends viemReadWriteMixin(
  core.ReadWriteStEthHyperdrive,
) {}
