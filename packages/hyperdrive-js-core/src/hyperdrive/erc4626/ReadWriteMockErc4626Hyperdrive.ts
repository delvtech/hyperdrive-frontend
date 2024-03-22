import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { MockErc4626HyperdriveAbi } from "src/hyperdrive/erc4626/abi";
import {
  ReadWriteErc4626Hyperdrive,
  ReadWriteErc4626HyperdriveOptions,
} from "src/hyperdrive/erc4626/ReadWriteErc4626Hyperdrive";
import { ReadWriteMockErc4626 } from "src/token/erc4626/ReadWriteMockErc4626";

export interface ReadWriteMockErc4626HyperdriveOptions
  extends ReadWriteErc4626HyperdriveOptions {}

export class ReadWriteMockErc4626Hyperdrive extends ReadWriteErc4626Hyperdrive {
  declare mockErc4626HyperdriveContract: CachedReadWriteContract<MockErc4626HyperdriveAbi>;

  constructor(options: ReadWriteMockErc4626HyperdriveOptions) {
    super(options);
  }

  async getSharesToken(
    options?: ContractReadOptions,
  ): Promise<ReadWriteMockErc4626> {
    const address = await this.erc4626HyperdriveContract.read(
      "vault",
      {},
      options,
    );
    return new ReadWriteMockErc4626({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }
}
