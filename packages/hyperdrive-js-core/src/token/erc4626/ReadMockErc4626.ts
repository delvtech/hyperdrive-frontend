import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import { mockErc4626Abi, MockErc4626Abi } from "src/token/erc4626/abi";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";

export class ReadMockErc4626 extends mockErc4626Mixin(ReadErc4626) {}

/**
 * The public interface of the Mock ERC-4626 mixin.
 * @internal
 */
export interface MockErc4626Mixin {
  mockErc4626Contract: CachedReadContract<MockErc4626Abi>;

  /**
   * Get the rate of the vault.
   */
  getRate({ options }: { options?: ContractReadOptions }): Promise<bigint>;
}

/**
 * @internal
 */
export function mockErc4626Mixin<T extends Constructor<ReadErc4626>>(
  BaseReadErc4626: T,
): T & Constructor<MockErc4626Mixin> {
  return class extends BaseReadErc4626 {
    mockErc4626Contract: CachedReadContract<MockErc4626Abi>;

    constructor(...[options]: any[]) {
      const {
        name = "Mock ERC-4626 Tokenized Vault",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ConstructorParameters<typeof ReadErc4626>[0];
      super({
        address,
        contractFactory,
        network,
        cache,
        name,
        namespace,
      });
      this.mockErc4626Contract = contractFactory({
        abi: mockErc4626Abi,
        address,
        cache,
        namespace,
      });
    }

    /**
     * Get the rate of the vault.
     */
    getRate({ options }: { options?: ContractReadOptions }): Promise<bigint> {
      return this.mockErc4626Contract.read("getRate", {}, options);
    }
  };
}
