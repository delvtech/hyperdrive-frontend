import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";

export class ReadMetaMorphoHyperdrive extends viemReadMixin(
  core.ReadMetaMorphoHyperdrive
) {}
