import { Address, PublicClient, Abi } from "viem";
import {
  ContractEventFunction,
  ContractFunction,
  EventArgs,
  ReadableContract,
} from "@hyperdrive/sdk";

export interface ReadableViemContractOptions<TAbi extends Abi = Abi> {
  abi: TAbi;
  address: Address;
  publicClient: PublicClient;
}

/**
 * A viem implementation of the ReadableContract interface.
 * @see https://viem.sh/
 */
export class ReadableViemContract<TAbi extends Abi>
  implements ReadableContract<TAbi>
{
  abi: TAbi;
  address: Address;

  protected _publicClient: PublicClient;

  constructor({
    abi,
    address,
    publicClient,
  }: ReadableViemContractOptions<TAbi>) {
    this.abi = abi;
    this.address = address;
    this._publicClient = publicClient;
  }

  read: ContractFunction<TAbi> = (functionName, args) => {
    return this._publicClient.readContract({
      abi: this.abi as any,
      address: this.address,
      functionName: functionName,
      args: args as any,
    }) as any;
  };

  getEvents: ContractEventFunction<TAbi> = async (eventName, options) => {
    const filter = await this._publicClient.createContractEventFilter({
      address: this.address,
      abi: this.abi,
      eventName: eventName as any,
      args: options?.filter as any,
      fromBlock: options?.fromBlock ?? "earliest",
      toBlock: options?.toBlock ?? "latest",
    });

    const events = await this._publicClient.getFilterLogs({ filter });

    return events.map(({ args, blockNumber, data, transactionHash }) => {
      return {
        args: args as EventArgs<TAbi, typeof eventName>,
        blockNumber: blockNumber ?? undefined,
        data,
        eventName,
        transactionHash: transactionHash ?? undefined,
      };
    });
  };
}
