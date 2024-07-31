import { Network } from "@delvtech/evm-client";
import { Address } from "abitype";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/evm-client/contractFactory";
import { WriteContract } from "src/hyperdrive/experiment/WriteContract";
import { Erc20Abi } from "src/token/erc20/abi";

export class Erc20 {
  readonly address: Address;
  constructor({
    address,
    namespace,
    network,
    readContractFactory,
    writeContractFactory,
  }: {
    address: Address;
    readContractFactory: ReadContractFactory;
    writeContractFactory?: (
      options: ContractFactoryOptions<Erc20Abi>,
    ) => WriteContract;
    namespace: string;
    network: Network;
  }) {
    this.address = address;
  }
}
