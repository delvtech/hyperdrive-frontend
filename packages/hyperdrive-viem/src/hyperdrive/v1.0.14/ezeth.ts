import {
  ReadEzEthHyperdrive_v1_0_14 as BaseReadEzEthHyperdrive_v1_0_14,
  ReadWriteEzEthHyperdrive_v1_0_14 as BaseReadWriteEzEthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadEzEthHyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadEzEthHyperdrive_v1_0_14,
) {}

export class ReadWriteEzEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteEzEthHyperdrive_v1_0_14,
) {}
