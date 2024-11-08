import { Network } from "@delvtech/evm-client";
import { Prettify } from "src/base/types";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/evm-client/contractFactory";

/**
 * The base options required for all read models.
 */
export interface ReadModelOptions {
  contractFactory: ReadContractFactory;
  network: Network;

  /**
   * An arbitrary name for the instance. This is for convenience only (e.g., for
   * use as a display name or in logging) and has no affect on the model's
   * behavior.
   */
  debugName?: string;

  /**
   * The earliest block to fetch events from.
   */
  earliestBlock?: bigint;
}

/**
 * A base class for read-only models.
 */
export class ReadModel {
  debugName: string;
  network: Network;
  contractFactory: ReadContractFactory;

  constructor({
    debugName,
    network,
    contractFactory,
    earliestBlock,
  }: ReadModelOptions) {
    this.debugName = debugName ?? this.constructor.name;
    this.network = network;
    this.contractFactory = contractFactory;

    // Override the contract factory to ensure that events are fetched from the
    // earliest block if necessary.
    if (earliestBlock) {
      this.contractFactory = (options) => {
        const contract = contractFactory(options);

        // Override the getEvents method
        const originalGetEvents = contract.getEvents;
        contract.getEvents = async function (eventName, options) {
          const _options = { ...options };
          const fromBlock = _options?.fromBlock;
          const isBeforeEarliest =
            typeof fromBlock === "bigint" && fromBlock < earliestBlock;
          if (!fromBlock || fromBlock === "earliest" || isBeforeEarliest) {
            _options.fromBlock = earliestBlock;
          }

          return originalGetEvents(eventName, _options);
        };

        return contract;
      };
    }
  }
}

/**
 * The options required to create a read model that represents a specific
 * contract.
 */
export type ReadContractModelOptions = Prettify<
  // The abi is omitted because it's assumed the model will import its own ABI
  ReadModelOptions & Omit<ContractFactoryOptions, "abi">
>;
