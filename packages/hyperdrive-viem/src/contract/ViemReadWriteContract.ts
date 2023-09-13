import {
  ContractWriteOptions,
  FunctionArgs,
  FunctionName,
  FunctionReturnType,
  IReadWriteContract,
  SimpleCache,
} from "@hyperdrive/sdk";
import { ViemCachedReadWriteContract } from "src/contract/ViemCachedReadWriteContract";
import {
  ViemReadContract,
  ViemReadContractOptions,
} from "src/contract/ViemReadContract";
import { createSimulateContractParameters } from "src/utils/createSimulateContractParameters";
import { Abi, WalletClient } from "viem";

export interface ViemReadWriteContractOptions<TAbi extends Abi = Abi>
  extends ViemReadContractOptions<TAbi> {
  walletClient: WalletClient;
}

/**
 * A viem implementation of the ReadWriteContract interface.
 * @see https://viem.sh/
 */
export class ViemReadWriteContract<TAbi extends Abi = Abi>
  extends ViemReadContract<TAbi>
  implements IReadWriteContract<TAbi>
{
  protected readonly _walletClient: WalletClient;

  constructor({
    abi,
    address,
    publicClient,
    walletClient,
  }: ViemReadWriteContractOptions<TAbi>) {
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

  withCache(cache?: SimpleCache): ViemCachedReadWriteContract<TAbi> {
    return new ViemCachedReadWriteContract({
      abi: this.abi,
      address: this.address,
      publicClient: this._publicClient,
      walletClient: this._walletClient,
      cache,
    });
  }
}
