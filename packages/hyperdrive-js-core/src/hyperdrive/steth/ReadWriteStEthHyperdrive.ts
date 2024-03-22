import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import {
  ReadStEthHyperdrive,
  ReadStEthHyperdriveOptions,
} from "./ReadStEthHyperdrive";
import { Overwrite } from "src/base/types";
import { readWriteHyperdriveMixin } from "src/hyperdrive/ReadWriteHyperdrive";
import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { StEthHyperdriveAbi } from "src/hyperdrive/steth/abi";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export interface ReadWriteStEthHyperdriveOptions
  extends Overwrite<
    ReadStEthHyperdriveOptions,
    ReadWriteContractModelOptions
  > {}

export class ReadWriteStEthHyperdrive extends readWriteHyperdriveMixin(
  ReadStEthHyperdrive,
) {
  declare stEthHyperdriveContract: CachedReadWriteContract<StEthHyperdriveAbi>;

  constructor(options: ReadWriteStEthHyperdriveOptions) {
    super(options);
  }

  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteStEth> {
    const address = await this.stEthHyperdriveContract.read(
      "lido",
      {},
      options,
    );
    return new ReadWriteStEth({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  async getBaseToken(): Promise<ReadWriteEth> {
    return new ReadWriteEth({
      contractFactory: this.contractFactory,
      network: this.network,
    });
  }
}
