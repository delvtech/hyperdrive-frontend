import {
  ContractWriteOptions,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
  IWritableContract,
  SimpleCache,
} from "@hyperdrive/sdk";
import { ViemCachedWritableContract } from "src/contract/ViemCachedWritableContract";
import {
  ViemReadableContract,
  ViemReadableContractOptions,
} from "src/contract/ViemReadableContract";
import { createSimulateContractParameters } from "src/utils/createSimulateContractParameters";
import { Abi, WalletClient } from "viem";

export interface ViemWritableContractOptions<TAbi extends Abi = Abi>
  extends ViemReadableContractOptions<TAbi> {
  walletClient: WalletClient;
}

/**
 * A viem implementation of the WritableContract interface.
 * @see https://viem.sh/
 */
export class ViemWritableContract<TAbi extends Abi = Abi>
  extends ViemReadableContract<TAbi>
  implements IWritableContract<TAbi>
{
  protected readonly _walletClient: WalletClient;

  constructor({
    abi,
    address,
    publicClient,
    walletClient,
  }: ViemWritableContractOptions<TAbi>) {
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

  withCache(cache?: SimpleCache): ViemCachedWritableContract<TAbi> {
    return new ViemCachedWritableContract({
      abi: this.abi,
      address: this.address,
      publicClient: this._publicClient,
      walletClient: this._walletClient,
      cache,
    });
  }
}
