import {
  ReadLsEthHyperdrive_v1_0_14 as BaseReadLsEthHyperdrive_v1_0_14,
  ReadWriteLsEthHyperdrive_v1_0_14 as BaseReadWriteLsEthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadLsEthHyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadLsEthHyperdrive_v1_0_14,
) {}

export class ReadWriteLsEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteLsEthHyperdrive_v1_0_14,
) {}
