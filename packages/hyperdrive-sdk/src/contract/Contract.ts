import { Abi, Address } from "abitype";
import { ContractEventFunction, ContractFunction } from "src/base/abitype";

/**
 * An abstracted contract interface to allow interchangeable web3 libraries.
 * Designed to be used by consumers that care about the interface of a contract,
 * but aren't necessarily concerned with where it's deployed or how it connects.
 */
export interface Contract<TAbi extends Abi> {
  abi: TAbi;
  address: Address;
  read: ContractFunction<TAbi>;
  write: ContractFunction<TAbi, "nonpayable" | "payable">;
  getEvents: ContractEventFunction<TAbi>;
}
