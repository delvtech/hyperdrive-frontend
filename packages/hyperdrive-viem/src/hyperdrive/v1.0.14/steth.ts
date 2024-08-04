import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadStEthHyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadStEthHyperdrive_v1_0_14,
) {}

export class ReadWriteStEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteStEthHyperdrive_v1_0_14,
) {}
