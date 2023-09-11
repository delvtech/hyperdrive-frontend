import { ContractWriteOptions, IWritableContract } from "src/contract/Contract";
import { ReadableContractStub } from "src/contract/stubs/ReadableContractStub";
import { Abi } from "abitype";
import { FunctionArgs, FunctionName } from "src/base/abitype";
import { stub } from "sinon";

/**
 * A mock implementation of a writable Ethereum contract designed for unit
 * testing purposes. The `WritableContractStub` extends the functionalities of
 * `ReadableContractStub` and provides capabilities to stub out specific
 * contract write behaviors. This makes it a valuable tool when testing
 * scenarios that involve contract writing operations, without actually
 * interacting with a real Ethereum contract.
 *
 * @example
 * const contract = new WritableContractStub(HyperdriveABI);
 * contract.stubWrite("addLiquidity", 100n);
 *
 * const result = await contract.write("addLiquidity", []); // 100n
 * @extends {ReadableContractStub<TAbi>}
 * @implements {IWritableContract<TAbi>}
 */
export class WritableContractStub<TAbi extends Abi = Abi>
  extends ReadableContractStub<TAbi>
  implements IWritableContract<TAbi>
{
  /**
   * Simulates a contract write operation for a given function. If the function
   * is not previously stubbed using `stubWrite` from the parent class, an error
   * will be thrown.
   */
  write = stub().callsFake(
    <TFunctionName extends FunctionName<TAbi, "nonpayable" | "payable">>(
      functionName: TFunctionName,
      args: FunctionArgs<TAbi, TFunctionName>,
      options?: ContractWriteOptions,
    ) => {
      const stub = this.writeStubMap.get(functionName);
      if (!stub) {
        throw new Error(
          `Called write for ${functionName} on a stubbed contract without a return value. The function must be stubbed first:\n\tcontract.stubWrite("${functionName}", value)`,
        );
      }
      return stub(args, options);
    },
  );
}
