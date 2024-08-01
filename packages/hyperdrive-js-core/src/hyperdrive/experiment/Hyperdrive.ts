import {
  CachedReadContract,
  ContractReadOptions,
  ContractWriteOptions,
  Network,
  SimpleCache,
} from "@delvtech/evm-client";
import { Abi, Address } from "abitype";
import {
  ContractFactoryOptions,
  ReadContractFactory,
} from "src/evm-client/contractFactory";
import { HyperdriveAbi, hyperdriveAbi } from "src/hyperdrive/abi";
import { WriteContract } from "src/hyperdrive/experiment/WriteContract";
import { PoolConfig, PoolInfo } from "src/pool/types";

export interface HyperdriveOptions {
  address: Address;
  debugName: string;
  readContractFactory: ReadContractFactory;
  writeContractFactory?: (
    options: ContractFactoryOptions<Abi>,
  ) => WriteContract;
  network: Network;
  cache: SimpleCache;
  namespace: string;
}

export class Hyperdrive {
  readonly address: Address;

  readonly network: Network;
  readonly namespace: string;
  readonly readContractFactory: ReadContractFactory;
  readonly readContract: CachedReadContract<HyperdriveAbi>;
  readonly writeContractFactory:
    | ((options: ContractFactoryOptions<Abi>) => WriteContract)
    | undefined;
  writeContract: WriteContract<HyperdriveAbi> | undefined;

  constructor({
    address,
    readContractFactory,
    writeContractFactory,
    cache,
    network,
    namespace,
  }: HyperdriveOptions) {
    this.namespace = namespace;
    this.address = address;
    this.readContractFactory = readContractFactory;
    this.network = network;
    this.readContract = readContractFactory({
      abi: hyperdriveAbi,
      address,
      cache,
      namespace,
    });
    this.writeContractFactory = writeContractFactory;
    this.writeContract = writeContractFactory?.({
      abi: hyperdriveAbi,
      address,
      cache,
      namespace,
    });
  }

  ////////////////////////////////////////
  // Read methods implemented as normal //
  ////////////////////////////////////////
  getDecimals(): Promise<number> {
    return this.readContract.read("decimals");
  }

  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.readContract.read("getPoolConfig", undefined, options);
  }
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.readContract.read("getPoolInfo", undefined, options);
  }

  async convertToBase({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.readContract.read(
      "convertToBase",
      { _sharesAmount: sharesAmount },
      options,
    );
  }

  ////////////////////////////////////////////////////////////////////////////
  // Model getters return models with the same semantics as this Hyperdrive //
  // class                                                                  //
  ////////////////////////////////////////////////////////////////////////////
  async getSharesToken(options?: ContractReadOptions): Promise<Token> {
    const { vaultSharesToken } = await this.getPoolConfig(options);
    return new Token({
      address: vaultSharesToken,
      readContractFactory: this.readContractFactory,
      writeContractFactory: this.writeContractFactory,
      namespace: this.namespace,
      network: this.network,
    });
  }

  ///////////////////////////////////////////////////////////////////////
  // Write methods check for a writeContract instance before executing //
  ///////////////////////////////////////////////////////////////////////

  async checkpoint({
    args: { time },
    options,
  }: {
    args: { time: number };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: `0x${string}`) => void;
  }): Promise<`0x${string}`> {
    // Throw if pre-conditions aren't met
    // NOTE: See decorator for alternative pattern
    requireWriteContract(this, "checkpoint");

    const hash = await this.writeContract.write(
      "checkpoint",
      { _checkpointTime: BigInt(time), _maxIterations: 4n },
      options,
    );
    return hash;
  }

  //////////////////////////////////////////////////////////////////////////////
  // The writeContract can be attached at runtime or set at construction time //
  //////////////////////////////////////////////////////////////////////////////
  setWriteContract(writeContract: WriteContract): void {
    this.writeContract = writeContract;
  }
}

// We can encapsulate the repetitive check logic in a util function and call it
// at the beginning of other methods. While this doesn’t eliminate the checks,
// it centralizes the logic, making it easier to manage.  NOTE: This could also
// be done via a decorator, ie: @requireWriteContract above the method
export function requireWriteContract(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  instance: any,
  methodName: string,
): asserts instance is { writeContract: WriteContract<HyperdriveAbi> } {
  if (!instance.writeContract) {
    throw new Error(
      `Cannot execute method "${methodName}". Write contract is required but not
      provided.`,
    );
  }
}
