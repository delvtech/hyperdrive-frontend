import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import {
  ReadErc4626Hyperdrive,
  ReadErc4626HyperdriveOptions,
} from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { Overwrite } from "src/base/types";
import { writeHyperdriveMixin } from "src/hyperdrive/ReadWriteHyperdrive";
import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";
import { Erc4626HyperdriveAbi } from "src/hyperdrive/erc4626/abi";

export interface ReadWriteErc4626HyperdriveOptions
  extends Overwrite<
    ReadErc4626HyperdriveOptions,
    ReadWriteContractModelOptions
  > {}

export class ReadWriteErc4626Hyperdrive extends writeHyperdriveMixin(
  ReadErc4626Hyperdrive,
) {
  declare erc4626HyperdriveContract: CachedReadWriteContract<Erc4626HyperdriveAbi>;

  constructor(options: ReadWriteErc4626HyperdriveOptions) {
    super(options);
  }

  async getSharesToken(
    options?: ContractReadOptions,
  ): Promise<ReadWriteErc4626> {
    const address = await this.erc4626HyperdriveContract.read(
      "vault",
      {},
      options,
    );
    return new ReadWriteErc4626({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }
}
