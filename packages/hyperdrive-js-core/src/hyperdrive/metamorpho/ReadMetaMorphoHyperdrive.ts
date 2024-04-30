import { ContractReadOptions, ReadContract } from "@delvtech/evm-client";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";

const SEPOLIA_METAMORPHO_ADDRESS = "0xf5461A30b3723085F8E702fCc7461db85481c173";

export class ReadMetaMorphoHyperdrive extends readMetaMorphoHyperdriveMixin(
  ReadHyperdrive,
) {}

/**
 * @internal
 */
export interface ReadMetaMorphoHyperdriveMixin {
  getYieldSourceRate(options?: {
    options?: ContractReadOptions;
  }): Promise<bigint>;
}

/**
 * @internal
 */
export function readMetaMorphoHyperdriveMixin<
  T extends Constructor<ReadHyperdrive>,
>(Base: T): Constructor<ReadMetaMorphoHyperdriveMixin> & T {
  return class extends Base implements ReadMetaMorphoHyperdriveMixin {
    metaMorphoContract: ReadContract<typeof MetaMorphoSnippetsABI>;
    constructor(...[options]: any[]) {
      const {
        name = "MetaMorpho Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
      } = options as ReadHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });

      this.metaMorphoContract = this.contractFactory({
        abi: MetaMorphoSnippetsABI,
        // TODO: Refactor to a switch/case on chainId once evm-client has chainId
        // support on the Network interface
        address: SEPOLIA_METAMORPHO_ADDRESS,
        cache,
        namespace,
      });
    }
    async getYieldSourceRate({
      options,
    }: {
      options?: ContractReadOptions | undefined;
    }): Promise<bigint> {
      const sharesToken = await this.getSharesToken();
      const rate = await this.metaMorphoContract.read(
        "supplyAPYVault",
        { vault: sharesToken.address },
        options,
      );
      return rate;
    }
  };
}

const MetaMorphoSnippetsABI = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "loanToken", type: "address" },
          { internalType: "address", name: "collateralToken", type: "address" },
          { internalType: "address", name: "oracle", type: "address" },
          { internalType: "address", name: "irm", type: "address" },
          { internalType: "uint256", name: "lltv", type: "uint256" },
        ],
        internalType: "struct MarketParams",
        name: "marketParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "totalSupplyAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalSupplyShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowShares",
            type: "uint128",
          },
          { internalType: "uint128", name: "lastUpdate", type: "uint128" },
          { internalType: "uint128", name: "fee", type: "uint128" },
        ],
        internalType: "struct Market",
        name: "market",
        type: "tuple",
      },
    ],
    name: "supplyAPYMarket",
    outputs: [{ internalType: "uint256", name: "supplyApy", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "vault", type: "address" }],
    name: "supplyAPYVault",
    outputs: [
      { internalType: "uint256", name: "avgSupplyApy", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
