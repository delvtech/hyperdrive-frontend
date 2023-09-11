import {
  ContractEvent,
  ContractGetEventsOptions,
  ContractReadOptions,
  ContractWriteOptions,
  EventArgs,
  EventName,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
  IReadableContract,
  SimpleCache,
} from "@hyperdrive/sdk";
import { ViemCachedReadableContract } from "src/contract/ViemCachedReadableContract";
import { ViemWritableContract } from "src/contract/ViemWritableContract";
import { createSimulateContractParameters } from "src/utils/createSimulateContractParameters";
import { Abi, Address, PublicClient, WalletClient } from "viem";

export interface ViemReadableContractOptions<TAbi extends Abi = Abi> {
  abi: TAbi;
  address: Address;
  publicClient: PublicClient;
}

/**
 * A viem implementation of the ReadableContract interface.
 * @see https://viem.sh/
 */
export class ViemReadableContract<TAbi extends Abi = Abi>
  implements IReadableContract<TAbi>
{
  readonly abi: TAbi;
  readonly address: Address;

  protected readonly _publicClient: PublicClient;

  constructor({
    abi,
    address,
    publicClient,
  }: ViemReadableContractOptions<TAbi>) {
    this.abi = abi;
    this.address = address;
    this._publicClient = publicClient;
  }

  read<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this._publicClient.readContract({
      abi: this.abi as any,
      address: this.address,
      functionName,
      args: args as any,
      ...options,
    }) as Promise<FunctionReturnType<TAbi, TFunctionName>>;
  }

  async simulateWrite<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    const { result } = await this._publicClient.simulateContract({
      abi: this.abi as any,
      address: this.address,
      functionName,
      args: args as any,
      ...createSimulateContractParameters(options),
    });
    return result as FunctionReturnType<TAbi, TFunctionName>;
  }

  async getEvents<TEventName extends EventName<TAbi>>(
    eventName: TEventName,
    options?: ContractGetEventsOptions<TAbi, TEventName>,
  ): Promise<ContractEvent<TAbi, TEventName>[]> {
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
  }

  withCache(cache?: SimpleCache): ViemCachedReadableContract<TAbi> {
    return new ViemCachedReadableContract({
      abi: this.abi,
      address: this.address,
      publicClient: this._publicClient,
      cache,
    });
  }

  withWallet(walletClient: WalletClient): ViemWritableContract<TAbi> {
    return new ViemWritableContract({
      abi: this.abi,
      address: this.address,
      publicClient: this._publicClient,
      walletClient,
    });
  }
}
