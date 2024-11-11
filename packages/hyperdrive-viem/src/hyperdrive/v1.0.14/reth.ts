import {
  ReadREthHyperdrive_v1_0_14 as BaseReadREthHyperdrive_v1_0_14,
  ReadWriteREthHyperdrive_v1_0_14 as BaseReadWriteREthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadREthHyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadREthHyperdrive_v1_0_14,
) {}

export class ReadWriteREthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteREthHyperdrive_v1_0_14,
) {}
