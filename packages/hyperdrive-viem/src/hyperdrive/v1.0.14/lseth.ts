import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadLsEthHyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadLsEthHyperdrive_v1_0_14
) {}

export class ReadWriteLsEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteLsEthHyperdrive_v1_0_14
) {}
