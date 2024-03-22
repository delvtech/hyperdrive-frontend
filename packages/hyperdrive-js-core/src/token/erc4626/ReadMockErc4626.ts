import { ReadContractModelOptions } from "src/model/ReadModel";
import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { mockErc4626Abi, MockErc4626Abi } from "src/token/erc4626/abi";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";

export interface ReadMockErc4626Options extends ReadContractModelOptions {}

export class ReadMockErc4626 extends ReadErc4626 {
  mockErc4626Contract: CachedReadContract<MockErc4626Abi>;

  constructor({
    name = "Mock ERC-4626 Tokenized Vault",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadMockErc4626Options) {
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
}
