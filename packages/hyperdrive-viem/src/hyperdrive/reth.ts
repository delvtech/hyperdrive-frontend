import {
  ReadREthHyperdrive as BaseReadREthHyperdrive,
  ReadWriteREthHyperdrive as BaseReadWriteREthHyperdrive,
} from "@delvtech/hyperdrive-js";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadREthHyperdrive extends viemReadMixin(BaseReadREthHyperdrive) {}

export class ReadWriteREthHyperdrive extends viemReadWriteMixin(
  BaseReadWriteREthHyperdrive,
) {}
