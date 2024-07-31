import { ContractWriteArgs, FunctionName } from "@delvtech/evm-client";
import { Abi } from "abitype";

export interface WriteContract<TAbi extends Abi = Abi> {
  /**
   * Get the address of the signer for this contract.
   */
  getSignerAddress(): Promise<`0x${string}`>;

  /**
   * Writes to a specified function on the contract.
   * @returns The transaction hash of the submitted transaction.
   */
  write<TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">>(
    ...args: ContractWriteArgs<TAbi, TFunctionName>
  ): Promise<`0x${string}`>;
}
