import { ContractWriteOptions } from "src/contract/Contract";
import { WritableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";

interface WritableHyperdriveOptions {
  contract: WritableHyperdriveContract;
}

export class WritableHyperdrive {
  private readonly contract: WritableHyperdriveContract;

  constructor({ contract }: WritableHyperdriveOptions) {
    this.contract = contract;
  }

  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  checkpoint(time: number, options?: ContractWriteOptions): Promise<void> {
    return this.contract.write("checkpoint", [BigInt(time)], options);
  }

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  pause(paused: boolean, options?: ContractWriteOptions): Promise<void> {
    return this.contract.write("pause", [paused], options);
  }

  /**
   * Allows the first LP to initialize the market with a target APR.
   * @param args.contribution - The amount of base to supply.
   * @param args.apr - The target APR.
   * @param args.destination - The destination of the LP shares.
   * @param args.asUnderlying - If true the user is charged in underlying if false
   *                      the contract transfers in yield source directly. Note
   *                      - for some paths one choice may be disabled or
   *                      blocked.
   * @returns The initial number of LP shares created.
   */
  async initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asUnderlying?: boolean;
    },
    options?: ContractWriteOptions,
  ): Promise<bigint> {
    return this.contract.write(
      "initialize",
      [
        args.contribution,
        args.apr,
        args.destination,
        args?.asUnderlying ?? true,
      ],
      options,
    );
  }
}
