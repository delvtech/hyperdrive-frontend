import type { ReadContract as ReadWriteContract } from "@delvtech/evm-client";
import type { Constructor } from "src/base/types";
import { ReadWriteHyperdrive } from "src/hyperdrive/base/ReadWriteHyperdrive";
import type { MetaMorphoSnippetsABI } from "src/hyperdrive/metamorpho/abi";

export class ReadWriteMetaMorphoHyperdrive extends readWriteMetaMorphoHyperdriveMixin(
  ReadWriteHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadWriteMetaMorphoHyperdriveMixin {
  metaMorphoContract: ReadWriteContract<MetaMorphoSnippetsABI>;
}

/**
 * @internal
 */
export function readWriteMetaMorphoHyperdriveMixin<
  T extends Constructor<ReadWriteHyperdrive>,
>(Base: T): Constructor<ReadWriteMetaMorphoHyperdriveMixin> & T {
  return class extends Base {
    declare metaMorphoContract: ReadWriteContract<MetaMorphoSnippetsABI>;
  };
}
