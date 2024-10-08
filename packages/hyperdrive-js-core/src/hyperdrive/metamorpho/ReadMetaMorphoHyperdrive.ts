import { ReadContract } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/base/ReadHyperdrive";
import {
  MetaMorphoSnippetsABI,
  metaMorphoSnippetsABI,
} from "src/hyperdrive/metamorpho/abi";

// See: https://www.notion.so/delv-tech/Testnet-Addresses-911a0f422f374059afa5c40d76373de6
const SEPOLIA_METAMORPHO_SNIPPETS_ADDRESS =
  "0xf5461A30b3723085F8E702fCc7461db85481c173";

export class ReadMetaMorphoHyperdrive extends readMetaMorphoHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadMetaMorphoHyperdriveMixin {
  metaMorphoContract: ReadContract<MetaMorphoSnippetsABI>;
}

/**
 * @internal
 */
export function readMetaMorphoHyperdriveMixin<
  T extends Constructor<ReadHyperdrive>,
>(Base: T): Constructor<ReadMetaMorphoHyperdriveMixin> & T {
  return class extends Base {
    metaMorphoContract: ReadContract<MetaMorphoSnippetsABI>;

    constructor(...[options]: any[]) {
      const {
        debugName = "MetaMorpho Hyperdrive",
        address,
        cache,
        namespace,
        ...modelOptions
      } = options as ReadHyperdriveOptions;
      super({ debugName, address, cache, namespace, ...modelOptions });

      this.metaMorphoContract = this.contractFactory({
        abi: metaMorphoSnippetsABI,
        // TODO: Refactor to a switch/case on chainId once evm-client has chainId
        // support on the Network interface
        address: SEPOLIA_METAMORPHO_SNIPPETS_ADDRESS,
        cache,
        namespace,
      });
    }
  };
}
