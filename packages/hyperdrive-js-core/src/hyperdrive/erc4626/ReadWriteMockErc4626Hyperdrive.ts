import { ContractReadOptions } from "@delvtech/evm-client";
import { ReadWriteErc4626Hyperdrive } from "src/hyperdrive/erc4626/ReadWriteErc4626Hyperdrive";
import { ReadWriteMockErc4626 } from "src/token/erc4626/ReadWriteMockErc4626";

export class ReadWriteMockErc4626Hyperdrive extends ReadWriteErc4626Hyperdrive {
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
