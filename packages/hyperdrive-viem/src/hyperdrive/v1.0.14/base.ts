import {
  ReadHyperdrive_v1_0_14 as BaseReadHyperdrive_v1_0_14,
  ReadWriteHyperdrive_v1_0_14 as BaseReadWriteHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadHyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadHyperdrive_v1_0_14,
) {}

export class ReadWriteHyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteHyperdrive_v1_0_14,
) {}
