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
  IContract,
} from "@hyperdrive/sdk";
import { convertWriteOptionsToSimulateOptions } from "src/utils/createSimulateContractParameters";
import { Abi, Address, PublicClient, WalletClient } from "viem";

/**
 * Viem implementation of the IContract interface from @hyperdrive/sdk
 * @see https://viem.sh/
 */
export class ViemContract<TAbi extends Abi> implements IContract<TAbi> {
  readonly abi: TAbi;
  readonly address: `0x${string}`;
  private publicClient: PublicClient;
  private walletClient?: WalletClient;
  constructor({
    abi,
    address,
    publicClient,
    walletClient,
  }: {
    abi: TAbi;
    address: Address;
    publicClient: PublicClient;
    walletClient?: WalletClient;
  }) {
    this.abi = abi;
    this.address = address;
    this.publicClient = publicClient;
    this.walletClient = walletClient;
  }
  async write<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    if (!this.walletClient) {
      throw new Error("No wallet connected.");
    }

    const [account] = await this.walletClient.getAddresses();

    const { request } = await this.publicClient.simulateContract({
      abi: this.abi as any,
      address: this.address,
      account,
      functionName,
      args: args as any,
      ...convertWriteOptionsToSimulateOptions(options),
    });

    return this.walletClient.writeContract(request) as any;
  }

  /**
   * Connect a wallet client to this contract.
   */
  connect(walletClient: WalletClient): void {
    this.walletClient = walletClient;
  }
  /**
   * Disconnect the wallet client from this contract.
   */
  disconnect(): void {
    this.walletClient = undefined;
  }

  read<TFunctionName extends FunctionName<TAbi>>(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractReadOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    return this.publicClient.readContract({
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
    const { result } = await this.publicClient.simulateContract({
      abi: this.abi as any,
      address: this.address,
      functionName,
      args: args as any,
      ...convertWriteOptionsToSimulateOptions(options),
    });
    return result as FunctionReturnType<TAbi, TFunctionName>;
  }

  async getEvents<TEventName extends EventName<TAbi>>(
    eventName: TEventName,
    options?: ContractGetEventsOptions<TAbi, TEventName>,
  ): Promise<ContractEvent<TAbi, TEventName>[]> {
    const filter = await this.publicClient.createContractEventFilter({
      address: this.address,
      abi: this.abi,
      eventName: eventName as any,
      args: options?.filter as any,
      fromBlock: options?.fromBlock ?? "earliest",
      toBlock: options?.toBlock ?? "latest",
    });

    const events = await this.publicClient.getFilterLogs({ filter });

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
}
