import { Abi, WalletClient } from "viem";
import { ContractFunction, WritableContract } from "@hyperdrive/sdk";
import {
  ReadableViemContract,
  ReadableViemContractOptions,
} from "src/contract/base/ReadableViemContract";

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
  implements WritableContract<TAbi>
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

  write: ContractFunction<TAbi, "nonpayable" | "payable"> = async (
    functionName,
    args,
  ) => {
    const [account] = await this._walletClient.getAddresses();
    const { request } = await this._publicClient.simulateContract({
      abi: this.abi as any,
      address: this.address,
      account,
      functionName,
      args: args as any,
    });
    return this._walletClient.writeContract(request) as any;
  };
}
