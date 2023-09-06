import { Abi, WalletClient } from "viem";
import {
  ContractWriteOptions,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
  IWritableContract,
} from "@hyperdrive/sdk";
import {
  ReadableViemContract,
  ReadableViemContractOptions,
} from "src/contract/ReadableViemContract";
import { createSimulateContractParameters } from "src/utils/createSimulateContractParameters";

export interface WritableViemContractOptions<TAbi extends Abi = Abi>
  extends ReadableViemContractOptions<TAbi> {
  walletClient: WalletClient;
}

/**
 * A viem implementation of the WritableContract interface.
 * @see https://viem.sh/
 */
export class WritableViemContract<TAbi extends Abi>
  extends ReadableViemContract<TAbi>
  implements IWritableContract<TAbi>
{
  protected readonly _walletClient: WalletClient;

  constructor({
    abi,
    address,
    publicClient,
    walletClient,
  }: WritableViemContractOptions<TAbi>) {
    super({
      abi,
      address,
      publicClient,
    });
    this._walletClient = walletClient;
  }

  override async simulateWrite<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi>> {
    const [account] = await this._walletClient.getAddresses();

    return super.simulateWrite(functionName, args, {
      from: account,
      ...options,
    });
  }

  async write<
    TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">,
  >(
    functionName: TFunctionName,
    args: FunctionArgs<TAbi, TFunctionName>,
    options?: ContractWriteOptions,
  ): Promise<FunctionReturnType<TAbi, TFunctionName>> {
    const [account] = await this._walletClient.getAddresses();

    const { request } = await this._publicClient.simulateContract({
      abi: this.abi as any,
      address: this.address,
      account,
      functionName,
      args: args as any,
      ...createSimulateContractParameters(options),
    });

    return this._walletClient.writeContract(request) as any;
  }
}
