import { Network } from "@delvtech/evm-client";
import { Address } from "abitype";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/evm-client/contractFactory";
import { WriteContract } from "src/hyperdrive/experiment/WriteContract";
import { Erc4626Abi } from "src/token/erc4626/abi";

export class Erc4626 {
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
      options: ContractFactoryOptions<Erc4626Abi>,
    ) => WriteContract;
    namespace: string;
    network: Network;
  }) {
    this.address = address;
  }
}
