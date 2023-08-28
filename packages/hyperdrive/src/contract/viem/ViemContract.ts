import { Abi } from "abitype";
import { Contract, ContractFunction } from "src/contract/Contract";
import { Address, PublicClient } from "viem";

interface ViemContractOptions<TAbi extends Abi = Abi> {
  abi: TAbi;
  address: Address;
  publicClient: PublicClient;
}

/**
 * A viem implementation of the abstracted contract interface.
 * @see https://viem.sh/
 */
export class ViemContract<TAbi extends Abi> implements Contract<TAbi> {
  abi: TAbi;
  address: Address;

  private _publicClient: PublicClient;

  constructor({ abi, address, publicClient }: ViemContractOptions<TAbi>) {
    this.abi = abi;
    this.address = address;
    this._publicClient = publicClient;
  }

  read: ContractFunction<TAbi> = async (functionName, args) => {
    const result = await this._publicClient.readContract({
      address: this.address,
      abi: this.abi as any,
      functionName: functionName,
      // TODO: confirm type is valid
      args: args as any,
      // ...options,
    });

    return result as any;
  };
}
